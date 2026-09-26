package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.*;
import java.util.*;

/** 후속 업무가 사용하는 수량/스냅샷을 고정하고, 삭제 대신 취소 상태를 남긴다. */
@Service
@Transactional
public class BusinessRecordService {
    @PersistenceContext private EntityManager em;

    public <T> T lock(Class<T> type, int id) {
        if (type == MaterialProcurementContract.class) {
            Integer planId = em.createQuery("select c.materialProcurementPlanning.materialProcurementPlanNo from MaterialProcurementContract c where c.materialProcurementContractNo = :id", Integer.class)
                    .setParameter("id", id).getSingleResult();
            lock(MaterialProcurementPlanning.class, planId);
        }
        T entity = em.find(type, id, LockModeType.PESSIMISTIC_WRITE);
        if (entity == null) throw new IllegalArgumentException("업무 데이터를 찾을 수 없습니다.");
        em.refresh(entity, LockModeType.PESSIMISTIC_WRITE);
        return entity;
    }

    public <T> T editable(Class<T> type, int id) {
        T entity = lock(type, id);
        if (terminal(state(entity)) || children(type, id, false) > 0)
            throw new IllegalStateException("종료되었거나 후속 업무가 있어 수정할 수 없습니다. 취소 후 새로 등록하세요.");
        return entity;
    }

    public void cancel(Class<?> type, int id) {
        Object entity = lock(type, id);
        String target = type == ProductContract.class || type == MaterialProcurementContract.class ? "계약파기" : "계획중단";
        if (Objects.equals(state(entity), target)) return;
        changeState(type, id, target);
    }

    public void changeState(Class<?> type, int id, String next) {
        Set<String> allowed;
        if (type == ProductContract.class) allowed = Set.of("자재검토중", "자재조달중", "자재입고중", "제품생산중", "제품출고완료", "계약파기");
        else if (type == ProductionPlanning.class) allowed = Set.of("자재조달단계", "자재입고단계", "제품생산단계", "제품검수단계", "제품입고완료", "계획중단");
        else if (type == MaterialProcurementContract.class) allowed = Set.of("조달계약협상중", "발주진행중", "조달완료", "계약파기");
        else allowed = Set.of("진행중", "계획완료", "계획중단");
        if (next == null || !allowed.contains(next)) throw new IllegalArgumentException("올바르지 않은 업무 상태입니다.");
        Object entity = lock(type, id);
        String current = state(entity);
        if (Objects.equals(current, next)) return;
        if (terminal(current)) throw new IllegalStateException("종료된 업무 상태를 다시 변경할 수 없습니다.");
        if (Set.of("계약파기", "계획중단").contains(next) && children(type, id, true) > 0)
            throw new IllegalStateException("진행 중인 하위 업무를 먼저 취소하세요.");
        if (entity instanceof ProductContract) ((ProductContract) entity).changeState(next);
        else if (entity instanceof ProductionPlanning) ((ProductionPlanning) entity).changeState(next);
        else if (entity instanceof MaterialProcurementContract) ((MaterialProcurementContract) entity).changeState(next);
        else if (entity instanceof MaterialProcurementPlanning) {
            if ("계획완료".equals(next)) throw new IllegalStateException("조달계획 완료는 발주 누계로 자동 계산됩니다.");
            ((MaterialProcurementPlanning) entity).changeState(next);
        }
    }

    public boolean terminal(String value) {
        return value != null && Set.of("계약파기", "계획중단", "발주파기", "제품출고완료", "제품입고완료", "조달완료", "계획완료").contains(value);
    }

    private String state(Object entity) {
        if (entity instanceof ProductContract) return ((ProductContract) entity).getProductContractState();
        if (entity instanceof ProductionPlanning) return ((ProductionPlanning) entity).getProductionState();
        if (entity instanceof MaterialProcurementContract) return ((MaterialProcurementContract) entity).getMaterialProcurementContractState();
        if (entity instanceof MaterialProcurementPlanning) return ((MaterialProcurementPlanning) entity).getMaterialProcurementState();
        return null;
    }

    private long children(Class<?> type, int id, boolean activeOnly) {
        if (type == ProductContract.class) return count("ProductionPlanning", "productContract.productContractNo", "productionState", id, activeOnly);
        if (type == ProductionPlanning.class) return count("MaterialProcurementPlanning", "productionPlanning.productionPlanNo", "materialProcurementState", id, activeOnly);
        if (type == MaterialProcurementPlanning.class) return count("MaterialProcurementContract", "materialProcurementPlanning.materialProcurementPlanNo", "materialProcurementContractState", id, activeOnly)
                + count("Order", "materialProcurementPlanning.materialProcurementPlanNo", "orderState", id, activeOnly);
        if (type == MaterialProcurementContract.class) return count("Order", "materialProcurementContract.materialProcurementContractNo", "orderState", id, activeOnly);
        if (type == MaterialRequirementsList.class) return count("ProductionPlanning", "materialRequirementsList.materialRequirementsListNo", "productionState", id, false);
        return 0;
    }

    private long count(String type, String relation, String state, int id, boolean activeOnly) {
        // 완료된 하위 기록도 취소 전파에서 보존한다. 명시적으로 취소된 하위만 제외한다.
        String where = activeOnly ? " and (c." + state + " is null or c." + state + " not in ('계약파기','계획중단','발주파기'))" : "";
        return em.createQuery("select c from " + type + " c where c." + relation + " = :id" + where)
                .setParameter("id", id).setLockMode(LockModeType.PESSIMISTIC_READ).getResultList().size();
    }

    public void syncMaterial(Materials material) {
        em.flush();
        em.createQuery("update MaterialInventory i set i.materialName=:name, i.materialCode=:code, i.materialType=:type where i.materials=:material")
                .setParameter("name", material.getMaterialName()).setParameter("code", material.getMaterialCode())
                .setParameter("type", material.getMaterialType()).setParameter("material", material).executeUpdate();
        em.createQuery("update MaterialRequirementsList b set b.materialName=:name, b.materialCode=:code, b.materialType=:type where b.materials=:material")
                .setParameter("name", material.getMaterialName()).setParameter("code", material.getMaterialCode())
                .setParameter("type", material.getMaterialType()).setParameter("material", material).executeUpdate();
    }

    public void syncProduct(Products product) {
        em.flush();
        em.createQuery("update MaterialRequirementsList b set b.productName=:name, b.productCode=:code, b.productType=:type where b.products=:product")
                .setParameter("name", product.getProductName()).setParameter("code", product.getProductCode())
                .setParameter("type", product.getProductType()).setParameter("product", product).executeUpdate();
    }

    public void snapshot(MaterialProcurementContract c) {
        if (c.getProcurementQuantity() <= 0) throw new IllegalArgumentException("계약 수량은 양수여야 합니다.");
        MaterialProcurementPlanning p = lock(MaterialProcurementPlanning.class, c.getMaterialProcurementPlanning().getMaterialProcurementPlanNo());
        if (!"진행중".equals(p.getMaterialProcurementState())) throw new IllegalStateException("진행 중인 조달계획이 아닙니다.");
        CooperatorSupplier supplier = lock(CooperatorSupplier.class, c.getCooperatorSupplier().getSupplierNo());
        Employee employee = lock(Employee.class, c.getEmployee().getEmployeeNo());
        c.setMaterialProcurementPlanning(p);
        c.setMaterialProcurementPlanCode(p.getMaterialProcurementPlanCode());
        c.setMaterialCode(p.getMaterialCode()); c.setMaterialName(p.getMaterialName()); c.setMaterialSupplyPrice(p.getMaterialSupplyPrice());
        c.setSupplierName(supplier.getSupplierName()); c.setSupplierStatus(supplier.getSupplierStatus());
        c.setEmployeeName(employee.getEmployeeName()); c.setMaterialProcurementContractState("조달계약협상중");
    }

    public void snapshot(MaterialProcurementPlanning p) {
        if (p.getMaterialRequirementsCount() <= 0) throw new IllegalArgumentException("조달 수량은 양수여야 합니다.");
        ProductionPlanning production = lock(ProductionPlanning.class, p.getProductionPlanning().getProductionPlanNo());
        if (terminal(production.getProductionState())) throw new IllegalStateException("종료된 생산계획입니다.");
        Materials material = lock(Materials.class, p.getMaterials().getMaterialNo());
        p.setMaterialCode(material.getMaterialCode()); p.setMaterialName(material.getMaterialName());
        p.setMaterialType(material.getMaterialType()); p.setMaterialSupplyPrice(material.getMaterialSupplyPrice());
        p.setProductionPlanCode(production.getProductionPlanCode()); p.setProductionRequirementsDate(production.getProductionRequirementsDate());
        p.setProductionRequirementsProcess(production.getProductionRequirementsProcess()); p.setProductionDeliveryDate(production.getProductionDeliveryDate());
        p.setProductionState(production.getProductionState()); p.setEmployeeName(lock(Employee.class, p.getEmployee().getEmployeeNo()).getEmployeeName());
        p.setMaterialProcurementState("진행중");
    }

    public void snapshot(ProductContract c) {
        if (c.getProductQuantity() <= 0) throw new IllegalArgumentException("계약 수량은 양수여야 합니다.");
        Products product = lock(Products.class, c.getProducts().getProductNo());
        CooperatorClient client = lock(CooperatorClient.class, c.getCooperatorClient().getClientNo());
        c.setProductCode(product.getProductCode()); c.setClientName(client.getClientName()); c.setClientStatus(client.getClientStatus());
        c.setEmployeeName(lock(Employee.class, c.getEmployee().getEmployeeNo()).getEmployeeName()); c.setProductContractState("자재검토중");
    }

    public void snapshot(ProductionPlanning p) {
        if (p.getProductionQuantity() <= 0) throw new IllegalArgumentException("생산 수량은 양수여야 합니다.");
        ProductContract contract = lock(ProductContract.class, p.getProductContract().getProductContractNo());
        if (terminal(contract.getProductContractState())) throw new IllegalStateException("종료된 제품계약입니다.");
        MaterialRequirementsList bom = lock(MaterialRequirementsList.class, p.getMaterialRequirementsList().getMaterialRequirementsListNo());
        if (bom.getProducts().getProductNo() != contract.getProducts().getProductNo()) throw new IllegalArgumentException("계약 제품과 소요자재 제품이 다릅니다.");
        p.captureSnapshot(contract, lock(Employee.class, p.getEmployee().getEmployeeNo()));
    }

    public void snapshot(MaterialRequirementsList bom) {
        if (bom.getQuantity() <= 0) throw new IllegalArgumentException("소요 수량은 양수여야 합니다.");
        bom.captureSnapshot(lock(Products.class, bom.getProducts().getProductNo()), lock(Materials.class, bom.getMaterials().getMaterialNo()));
    }
}
