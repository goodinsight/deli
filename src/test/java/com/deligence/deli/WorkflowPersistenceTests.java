package com.deligence.deli;

import com.deligence.deli.domain.*;
import com.deligence.deli.service.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;
import javax.persistence.*;
import java.util.concurrent.*;
import static org.assertj.core.api.Assertions.*;

@DataJpaTest(properties={"spring.jpa.hibernate.ddl-auto=create-drop", "spring.jpa.database-platform=org.hibernate.dialect.H2Dialect", "spring.jpa.show-sql=false"})
@Import({OrderWorkflowService.class, BusinessRecordService.class, InventoryMaintenanceService.class})
@Transactional(propagation=Propagation.NOT_SUPPORTED)
class WorkflowPersistenceTests {
    @PersistenceContext EntityManager em;
    @Autowired OrderWorkflowService workflow;
    @Autowired BusinessRecordService records;
    @Autowired InventoryMaintenanceService maintenance;
    @Autowired PlatformTransactionManager manager;

    private TransactionTemplate tx() { return new TransactionTemplate(manager); }
    private int[] fixture() {
        return tx().execute(status -> {
            Employee employee = Employee.builder().employeeId("fixture-" + java.util.UUID.randomUUID()).employeeName("tester").build(); em.persist(employee);
            Materials material = Materials.builder().materialCode("m").materialName("material").materialType("part")
                    .materialExplaination("test").materialSupplyPrice(100L).build(); em.persist(material);
            MaterialInventory inventory = MaterialInventory.builder().materials(material).materialSupplyPrice(100L).materialTotalInventoryPayments(0L).build(); em.persist(inventory);
            MaterialProcurementPlanning plan = MaterialProcurementPlanning.builder().materials(material).materialRequirementsCount(10).materialProcurementState("진행중").build(); em.persist(plan);
            MaterialProcurementContract contract = MaterialProcurementContract.builder().materialProcurementPlanning(plan).materialSupplyPrice(100L).materialProcurementContractState("발주진행중").build(); em.persist(contract);
            Order order = Order.builder().orderQuantity(10).orderState("검수완료").materialProcurementPlanning(plan).materialProcurementContract(contract).employee(employee).build(); em.persist(order);
            return new int[]{order.getOrderNo(), inventory.getMaterialInventoryNo(), employee.getEmployeeNo(), plan.getMaterialProcurementPlanNo()};
        });
    }

    private int stock(int inventory) { return tx().execute(s -> em.find(MaterialInventory.class, inventory).getMaterialStock()); }

    @Test void masterRenameUpdatesInventoryButDoesNotRepriceContracts() {
        int[] f = fixture();
        tx().executeWithoutResult(s -> {
            Order order = em.find(Order.class, f[0]);
            Materials material = order.getMaterialProcurementPlanning().getMaterials();
            material.change(com.deligence.deli.dto.MaterialsDTO.builder()
                    .materialCode("renamed").materialName("new name").materialType("new type")
                    .materialExplaination("updated").materialSupplyPrice(500L).build());
            records.syncMaterial(material);
        });
        assertThat(tx().<String>execute(s -> em.find(MaterialInventory.class, f[1]).getMaterialName())).isEqualTo("new name");
        workflow.receive(f[0], f[2]);
        assertThat(tx().<Long>execute(s -> em.find(OrderReceipt.class, f[0]).getAmount())).isEqualTo(1000L);
        assertThatThrownBy(() -> maintenance.remove(f[1])).isInstanceOf(IllegalStateException.class);
    }
    private long histories(int order) { return tx().execute(s -> em.createQuery("select count(h) from MaterialInOutHistory h where h.order.orderNo=:id", Long.class).setParameter("id",order).getSingleResult()); }

    @Test void receiptIsIdempotentAndReversalPreservesAudit() {
        int[] f=fixture();
        workflow.receive(f[0],f[2]); workflow.receive(f[0],f[2]);
        assertThat(stock(f[1])).isEqualTo(10); assertThat(histories(f[0])).isEqualTo(1);
        assertThat(tx().<String>execute(s -> em.find(MaterialProcurementPlanning.class,f[3]).getMaterialProcurementState())).isEqualTo("계획완료");
        workflow.cancel(f[0],f[2]); workflow.cancel(f[0],f[2]);
        assertThat(stock(f[1])).isZero(); assertThat(histories(f[0])).isEqualTo(2);
        assertThat(tx().<String>execute(s -> em.find(Order.class,f[0]).getOrderState())).isEqualTo("발주파기");
        assertThat(tx().<String>execute(s -> em.find(MaterialProcurementPlanning.class,f[3]).getMaterialProcurementState())).isEqualTo("진행중");
    }

    @Test void failureWritingHistoryRollsBackStockReceiptAndState() {
        int[] f=fixture();
        assertThatThrownBy(() -> workflow.receive(f[0],-1)).isInstanceOf(IllegalArgumentException.class);
        assertThat(stock(f[1])).isZero(); assertThat(histories(f[0])).isZero();
        assertThat(tx().<OrderReceipt>execute(s -> em.find(OrderReceipt.class,f[0]))).isNull();
        assertThat(tx().<String>execute(s -> em.find(Order.class,f[0]).getOrderState())).isEqualTo("검수완료");
    }

    @Test void concurrentSubmissionsReceiveOnlyOnce() throws Exception {
        int[] f=fixture();
        parallel(() -> workflow.receive(f[0],f[2]), () -> workflow.receive(f[0],f[2]));
        assertThat(stock(f[1])).isEqualTo(10); assertThat(histories(f[0])).isEqualTo(1);
    }

    @Test void differentOrdersForSameMaterialDoNotLoseStockUpdates() throws Exception {
        int[] f=fixture();
        int second=tx().execute(s -> {
            Order original=em.find(Order.class,f[0]);
            MaterialProcurementPlanning plan=MaterialProcurementPlanning.builder().materials(original.getMaterialProcurementPlanning().getMaterials()).materialRequirementsCount(10).materialProcurementState("진행중").build(); em.persist(plan);
            MaterialProcurementContract contract=MaterialProcurementContract.builder().materialProcurementPlanning(plan).materialSupplyPrice(100L).build(); em.persist(contract);
            Order order=Order.builder().orderQuantity(7).orderState("검수완료").materialProcurementPlanning(plan).materialProcurementContract(contract).build(); em.persist(order);
            return order.getOrderNo();
        });
        parallel(() -> workflow.receive(f[0],f[2]), () -> workflow.receive(second,f[2]));
        assertThat(stock(f[1])).isEqualTo(17);
    }

    @Test void parallelCompletionsRecalculateTheSamePlan() throws Exception {
        int[] f=fixture();
        int second=tx().execute(s -> {
            Order first=em.find(Order.class,f[0]); first.setOrderQuantity(6); first.changeState("진행중");
            Order order=Order.builder().orderQuantity(6).orderState("진행중").materialProcurementPlanning(first.getMaterialProcurementPlanning()).materialProcurementContract(first.getMaterialProcurementContract()).build(); em.persist(order); return order.getOrderNo();
        });
        parallel(() -> workflow.complete(f[0]), () -> workflow.complete(second));
        assertThat(tx().<String>execute(s -> em.find(MaterialProcurementPlanning.class,f[3]).getMaterialProcurementState())).isEqualTo("계획완료");
        workflow.cancel(second,f[2]);
        assertThat(tx().<String>execute(s -> em.find(MaterialProcurementPlanning.class,f[3]).getMaterialProcurementState())).isEqualTo("진행중");
    }

    @Test void legacyReceiptsAndInvalidTransitionsAreProtected() {
        int[] f=fixture();
        assertThatThrownBy(() -> workflow.changeState(f[0],"자재입고완료")).isInstanceOf(IllegalStateException.class);
        tx().executeWithoutResult(s -> em.find(Order.class,f[0]).changeState("자재입고완료"));
        assertThatThrownBy(() -> workflow.cancel(f[0],f[2])).isInstanceOf(IllegalStateException.class);
        assertThat(stock(f[1])).isZero();
    }

    @Test void cannotCancelUsedStockOrParentWithActiveChildren() {
        int[] f=fixture();
        assertThatThrownBy(() -> records.cancel(MaterialProcurementPlanning.class,f[3])).isInstanceOf(IllegalStateException.class);
        workflow.receive(f[0],f[2]);
        tx().executeWithoutResult(s -> em.createQuery("update MaterialInventory i set i.materialStock=0 where i.materialInventoryNo=:id").setParameter("id",f[1]).executeUpdate());
        assertThatThrownBy(() -> workflow.cancel(f[0],f[2])).isInstanceOf(IllegalStateException.class);
        assertThat(histories(f[0])).isEqualTo(1);
        assertThat(tx().<String>execute(s -> em.find(Order.class,f[0]).getOrderState())).isEqualTo("자재입고완료");
    }

    private void parallel(Runnable first, Runnable second) throws Exception {
        ExecutorService pool=Executors.newFixedThreadPool(2);
        CountDownLatch ready=new CountDownLatch(2), start=new CountDownLatch(1);
        java.util.function.Function<Runnable, Runnable> gated = task -> () -> {
            ready.countDown();
            try { if (!start.await(5,TimeUnit.SECONDS)) throw new AssertionError("start timeout"); }
            catch (InterruptedException e) { throw new RuntimeException(e); }
            task.run();
        };
        try {
            Future<?> a=pool.submit(gated.apply(first)), b=pool.submit(gated.apply(second));
            assertThat(ready.await(5,TimeUnit.SECONDS)).isTrue(); start.countDown();
            a.get(15,TimeUnit.SECONDS); b.get(15,TimeUnit.SECONDS);
        } finally { start.countDown(); pool.shutdownNow(); }
    }
}
