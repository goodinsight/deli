package com.deligence.deli.domain;


import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.MaterialInventoryDetailDTO;
import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"documentFile", "materials", "order","materialImage","materialInOutHistory" })
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
    private Order order; // 오더 일련번호

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialImage materialImage;    //자재이미지 FK

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialInOutHistory materialInOutHistory;

    @Column(length = 500, nullable = false)
    private String materialName; // 자재명 검색

    @Column(length = 500, nullable = false)
    private String materialType; // 자재타입 검색

    @Column(length = 500, nullable = false)
    private String materialCode; // 자재코드 검색

    private String orderCode;   //발주코드(검색용)

    private String employeeName;    //담당자(검색용)

    private String orderState;  //발주상태 (검색용)

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile; // 파일 일련번호

    public void change(MaterialInventoryDTO materialInventoryDTO ) {

        this.materialIncomingQuantity = materialInventoryDTO.getMaterialIncomingQuantity();
        this.materialOutgoingQuantity = materialInventoryDTO.getMaterialOutgoingQuantity();
        this.materialStock = materialInventoryDTO.getMaterialStock();
        this.materialSupplyPrice = materialInventoryDTO.getMaterialSupplyPrice();
        this.materialTotalInventoryPayments = materialInventoryDTO.getMaterialTotalInventoryPayments();
        this.materialName = materialInventoryDTO.getMaterialName();
        this.materialType = materialInventoryDTO.getMaterialType();
        this.materialCode = materialInventoryDTO.getMaterialCode();

    }


}
