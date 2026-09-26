package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.EmployeeSecurityDTO;
import com.deligence.deli.dto.OrderDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.*;

@Service
@Transactional
public class OrderWorkflowService {
    @PersistenceContext private EntityManager em;
    private static final Set<String> COMMITTED = Set.of(
            "발주완료", "검수완료", "입고검수진행중", "반품진행중", "자재입고완료");

    // 모든 발주 변경은 조달계획 → 발주 → 자재 → 재고 순서로 잠근다.
    public Order lock(int id) {
        Integer planId = em.createQuery("select o.materialProcurementPlanning.materialProcurementPlanNo " +
                "from Order o where o.orderNo = :id", Integer.class).setParameter("id", id).getSingleResult();
        if (planId == null) throw new IllegalStateException("조달계획이 없는 발주입니다.");
        lockPlan(planId);
        Order order = em.find(Order.class, id, LockModeType.PESSIMISTIC_WRITE);
        em.refresh(order, LockModeType.PESSIMISTIC_WRITE);
        return order;
    }

    public MaterialProcurementPlanning lockPlan(int id) {
        MaterialProcurementPlanning plan = em.find(MaterialProcurementPlanning.class, id, LockModeType.PESSIMISTIC_WRITE);
        if (plan == null) throw new IllegalArgumentException("조달계획을 찾을 수 없습니다.");
        em.refresh(plan, LockModeType.PESSIMISTIC_WRITE);
        return plan;
    }

    public void validateNewOrder(Order order) {
        MaterialProcurementPlanning plan = lockPlan(order.getMaterialProcurementPlanning().getMaterialProcurementPlanNo());
        if (!"진행중".equals(plan.getMaterialProcurementState())) throw new IllegalStateException("진행 중인 조달계획만 발주할 수 있습니다.");
        MaterialProcurementContract contract = em.find(MaterialProcurementContract.class,
                order.getMaterialProcurementContract().getMaterialProcurementContractNo(), LockModeType.PESSIMISTIC_WRITE);
        if (contract == null || contract.getMaterialProcurementPlanning().getMaterialProcurementPlanNo() != plan.getMaterialProcurementPlanNo())
            throw new IllegalArgumentException("조달계약과 조달계획이 일치하지 않습니다.");
        if (Set.of("계약파기", "조달완료").contains(contract.getMaterialProcurementContractState()))
            throw new IllegalStateException("종료된 조달계약입니다.");
        if (order.getOrderQuantity() <= 0) throw new IllegalArgumentException("발주 수량은 양수여야 합니다.");
        order.setMaterialProcurementPlanning(plan);
        order.setMaterialProcurementContract(contract);
        order.setMaterialName(plan.getMaterialName());
        if (order.getEmployee() != null) order.setEmployeeName(em.find(Employee.class, order.getEmployee().getEmployeeNo()).getEmployeeName());
        order.changeState("진행중");
    }

    public void modify(OrderDTO dto) {
        Order order = lock(dto.getOrderNo());
        if (!"진행중".equals(order.getOrderState())) throw new IllegalStateException("진행된 발주는 수정할 수 없습니다. 취소 후 새로 등록하세요.");
        if (!"진행중".equals(dto.getOrderState()) || dto.getOrderQuantity() <= 0)
            throw new IllegalArgumentException("수량은 양수여야 하며 상태는 전용 처리 버튼으로 변경하세요.");
        order.change(dto);
    }

    public void complete(int id) {
        Order order = lock(id);
        ensureActive(order);
        if (COMMITTED.contains(order.getOrderState())) { recalculate(order.getMaterialProcurementPlanning()); return; }
        if (!"진행중".equals(order.getOrderState())) throw new IllegalStateException("취소된 발주는 완료할 수 없습니다.");
        order.changeState("발주완료");
        recalculate(order.getMaterialProcurementPlanning());
    }

    public void changeState(int id, String next) {
        if ("발주완료".equals(next)) { complete(id); return; }
        if ("발주파기".equals(next)) { cancel(id, currentEmployeeNo()); return; }
        Order order = lock(id);
        String current = order.getOrderState();
        ensureActive(order);
        if (Objects.equals(current, next) && !"자재입고완료".equals(next)) return;
        boolean allowed = (Set.of("진행중", "발주완료", "반품진행중").contains(current) && "검수완료".equals(next))
                || (Set.of("발주완료", "검수완료").contains(current) && "입고검수진행중".equals(next))
                || ("입고검수진행중".equals(current) && "반품진행중".equals(next));
        if (!allowed) throw new IllegalStateException("허용되지 않는 상태 변경입니다. 입고·취소 전용 기능을 사용하세요.");
        order.changeState(next);
        recalculate(order.getMaterialProcurementPlanning());
    }

    public void receive(int id, int employeeNo) {
        Order order = lock(id);
        OrderReceipt existing = em.find(OrderReceipt.class, id, LockModeType.PESSIMISTIC_WRITE);
        if (existing != null && !existing.isReversed()) return; // 재전송은 재고를 증가시키지 않는다.
        if (existing != null || "발주파기".equals(order.getOrderState())) throw new IllegalStateException("취소된 발주는 재입고할 수 없습니다.");
        if ("자재입고완료".equals(order.getOrderState())) return; // 과거 입고 건도 재처리하지 않는다.
        ensureActive(order);
        if (!Set.of("검수완료", "입고검수진행중", "발주완료").contains(order.getOrderState()))
            throw new IllegalStateException("입고 가능한 발주 상태가 아닙니다.");
        MaterialProcurementPlanning plan = order.getMaterialProcurementPlanning();
        Materials material = em.find(Materials.class, plan.getMaterials().getMaterialNo(), LockModeType.PESSIMISTIC_WRITE);
        List<MaterialInventory> matches = em.createQuery("select i from MaterialInventory i where i.materials.materialNo = :id", MaterialInventory.class)
                .setParameter("id", material.getMaterialNo()).setLockMode(LockModeType.PESSIMISTIC_WRITE).getResultList();
        if (matches.size() != 1) throw new IllegalStateException("자재별 재고를 정확히 한 건 등록해야 입고할 수 있습니다.");
        MaterialInventory inventory = matches.get(0);
        em.refresh(inventory, LockModeType.PESSIMISTIC_WRITE);
        int quantity = order.getOrderQuantity();
        Long price = order.getMaterialProcurementContract().getMaterialSupplyPrice();
        if (quantity <= 0 || price == null || price < 0) throw new IllegalStateException("발주 수량 또는 계약 단가가 올바르지 않습니다.");
        long amount = Math.multiplyExact(price, quantity);
        inventory.receive(quantity, amount);
        em.persist(new OrderReceipt(order, inventory, quantity, amount));
        history(order, inventory, quantity, amount, employeeNo, "입고");
        order.changeState("자재입고완료");
        recalculate(plan);
    }

    public void cancel(int id, int employeeNo) {
        Order order = lock(id);
        if ("발주파기".equals(order.getOrderState())) return;
        OrderReceipt receipt = em.find(OrderReceipt.class, id, LockModeType.PESSIMISTIC_WRITE);
        if (receipt == null && "자재입고완료".equals(order.getOrderState()))
            throw new IllegalStateException("과거 입고 증빙과 발주의 연결을 확인한 후 취소해야 합니다.");
        if (receipt != null && !receipt.isReversed()) {
            MaterialInventory inventory = receipt.getInventory();
            em.find(Materials.class, inventory.getMaterials().getMaterialNo(), LockModeType.PESSIMISTIC_WRITE);
            em.refresh(inventory, LockModeType.PESSIMISTIC_WRITE);
            inventory.reverseReceipt(receipt.getQuantity(), receipt.getAmount());
            history(order, inventory, receipt.getQuantity(), -receipt.getAmount(), employeeNo, "입고취소");
            receipt.reverse();
        }
        order.changeState("발주파기");
        recalculate(order.getMaterialProcurementPlanning());
    }

    public void recalculate(MaterialProcurementPlanning plan) {
        // 잠금 읽기로 MySQL REPEATABLE READ에서도 동시 완료 건을 빠짐없이 계산한다.
        List<Order> orders = em.createQuery("select o from Order o where o.materialProcurementPlanning = :plan order by o.orderNo", Order.class)
                .setParameter("plan", plan).setLockMode(LockModeType.PESSIMISTIC_WRITE).getResultList();
        long total = orders.stream().filter(o -> COMMITTED.contains(o.getOrderState())).mapToLong(Order::getOrderQuantity).sum();
        if (!"계획중단".equals(plan.getMaterialProcurementState()))
            plan.changeState(total >= plan.getMaterialRequirementsCount() && plan.getMaterialRequirementsCount() > 0 ? "계획완료" : "진행중");
    }

    private void history(Order order, MaterialInventory inventory, int quantity, long amount, int employeeNo, String type) {
        Employee employee = em.find(Employee.class, employeeNo);
        if (employee == null) throw new IllegalArgumentException("입고 담당자를 찾을 수 없습니다.");
        em.persist(MaterialInOutHistory.builder().order(order).materialInventory(inventory).quantity(quantity)
                .amount(amount).inOutSeparator(type).historyDate(LocalDate.now()).employee(employee).employeeName(employee.getEmployeeName()).build());
    }

    public int currentEmployeeNo() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ((EmployeeSecurityDTO) principal).getEmployeeNo();
    }

    private void ensureActive(Order order) {
        MaterialProcurementPlanning plan = order.getMaterialProcurementPlanning();
        MaterialProcurementContract contract = order.getMaterialProcurementContract();
        if (contract == null || contract.getMaterialProcurementPlanning() == null ||
                contract.getMaterialProcurementPlanning().getMaterialProcurementPlanNo() != plan.getMaterialProcurementPlanNo())
            throw new IllegalStateException("발주와 조달계약의 조달계획 연결을 확인하세요.");
        if ("계약파기".equals(contract.getMaterialProcurementContractState()) ||
                Arrays.asList("계획중단", "계획파기", "조달중단").contains(plan.getMaterialProcurementState()))
            throw new IllegalStateException("취소된 계획 또는 계약의 발주입니다.");
    }
}
