package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialInventoryDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.*;

@Service
@Transactional
public class InventoryMaintenanceService {
    @PersistenceContext private EntityManager em;

    public int register(MaterialInventoryDTO dto) {
        Materials material = em.find(Materials.class, dto.getMaterialNo(), LockModeType.PESSIMISTIC_WRITE);
        if (material == null) throw new IllegalArgumentException("자재를 찾을 수 없습니다.");
        Long count = em.createQuery("select count(i) from MaterialInventory i where i.materials=:m", Long.class).setParameter("m", material).getSingleResult();
        if (count > 0) throw new IllegalStateException("이미 재고가 등록된 자재입니다.");
        validate(dto);
        MaterialInventory inventory = MaterialInventory.builder().materials(material)
                .materialCode(material.getMaterialCode()).materialName(material.getMaterialName()).materialType(material.getMaterialType())
                .materialIncomingQuantity(dto.getMaterialIncomingQuantity()).materialOutgoingQuantity(dto.getMaterialOutgoingQuantity())
                .materialStock(dto.getMaterialStock()).materialSupplyPrice(dto.getMaterialSupplyPrice())
                .materialTotalInventoryPayments(dto.getMaterialTotalInventoryPayments()).build();
        em.persist(inventory);
        return inventory.getMaterialInventoryNo();
    }

    public void modify(MaterialInventoryDTO dto) {
        MaterialInventory inventory = locked(dto.getMaterialInventoryNo());
        ensureNoHistory(inventory);
        validate(dto);
        inventory.change(dto);
    }

    public void remove(int id) {
        MaterialInventory inventory = locked(id);
        ensureNoHistory(inventory);
        if (inventory.getMaterialStock() != 0 || inventory.getMaterialIncomingQuantity() != 0 || inventory.getMaterialOutgoingQuantity() != 0)
            throw new IllegalStateException("수량이 있는 재고는 삭제할 수 없습니다.");
        em.remove(inventory);
    }

    private MaterialInventory locked(int id) {
        Integer materialId = em.createQuery("select i.materials.materialNo from MaterialInventory i where i.materialInventoryNo=:id", Integer.class).setParameter("id", id).getSingleResult();
        em.find(Materials.class, materialId, LockModeType.PESSIMISTIC_WRITE);
        MaterialInventory inventory = em.find(MaterialInventory.class, id, LockModeType.PESSIMISTIC_WRITE);
        em.refresh(inventory, LockModeType.PESSIMISTIC_WRITE);
        return inventory;
    }

    private void ensureNoHistory(MaterialInventory inventory) {
        if (!em.createQuery("select h from MaterialInOutHistory h where h.materialInventory=:i", MaterialInOutHistory.class).setParameter("i", inventory).setLockMode(LockModeType.PESSIMISTIC_READ).setMaxResults(1).getResultList().isEmpty()
                || !em.createQuery("select r from OrderReceipt r where r.inventory=:i", OrderReceipt.class).setParameter("i", inventory).setLockMode(LockModeType.PESSIMISTIC_READ).setMaxResults(1).getResultList().isEmpty())
            throw new IllegalStateException("입출고 이력이 있는 재고는 직접 수정·삭제할 수 없습니다. 입고 취소 기능을 사용하세요.");
    }

    private void validate(MaterialInventoryDTO dto) {
        if (dto.getMaterialIncomingQuantity() < 0 || dto.getMaterialOutgoingQuantity() < 0 || dto.getMaterialStock() < 0
                || (long) dto.getMaterialIncomingQuantity() - dto.getMaterialOutgoingQuantity() != dto.getMaterialStock()
                || dto.getMaterialSupplyPrice() == null || dto.getMaterialSupplyPrice() < 0
                || dto.getMaterialTotalInventoryPayments() == null || dto.getMaterialTotalInventoryPayments() < 0)
            throw new IllegalArgumentException("입고누계 - 출고누계는 현재고와 같아야 하며 수량·금액은 음수일 수 없습니다.");
    }
}
