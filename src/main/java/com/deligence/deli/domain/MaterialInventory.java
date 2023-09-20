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

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
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
    private DocumentFile documentFile; // 파일 일련번호

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Order order; // 오더 일련번호

    @Column(length = 500, nullable = false)
    private String materialName; // 자재명 검색

    @Column(length = 500, nullable = false)
    private String materialType; // 자재타입 검색

    @Column(length = 500, nullable = false)
    private String materialCode; // 자재코드 검색

    public void change(int materialIncomingQuantity, int materialOutgoingQuantity, int materialStock, Long materialSupplyPrice, Long materialTotalInventoryPayments) {

        this.materialIncomingQuantity = materialIncomingQuantity;
        this.materialOutgoingQuantity = materialOutgoingQuantity;
        this.materialStock = materialStock;
        this.materialSupplyPrice = materialSupplyPrice;
        this.materialTotalInventoryPayments = materialTotalInventoryPayments;

    }


}
