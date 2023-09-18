package com.deligence.deli.domain;


import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"documentFile", "materials"})

public class MaterialInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialInventoryNo; // 자재 재고 일련번호

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials; // 자재 일련번호

    @Column(length = 500, nullable = false)
    private int materialIncomingQuantity; // 입고 수량

    @Column(length = 500, nullable = false)
    private int materialOutgoingQuantity; // 출고 수량

    @Column(length = 500, nullable = false)
    private int materialStock; // 재고 수량

    @Column(length = 500, nullable = false)
    private Long materialSupplyPrice; // 공급 단가

    @Column(length = 500, nullable = false)
    private Long materialTotalInventoryPayments; // 재고 금액

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;

    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;

    public void change(int materialIncomingQuantity, int materialOutgoingQuantity, int materialStock, Long materialSupplyPrice, Long materialTotalInventoryPayments) {

        this.materialIncomingQuantity = materialIncomingQuantity;
        this.materialOutgoingQuantity = materialOutgoingQuantity;
        this.materialStock = materialStock;
        this.materialSupplyPrice = materialSupplyPrice;
        this.materialTotalInventoryPayments = materialTotalInventoryPayments;

    }


}
