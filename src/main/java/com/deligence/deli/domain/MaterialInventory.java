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
@ToString(exclude = {"materials", "documentFile"})
public class MaterialInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialInventoryNo;                 // 자재 재고 일련번호 (-> 자재재고 목록)

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;                    // 자재 일련번호 -> 자재타입, 자재코드, 자재이름, 공급단가 (-> 자재재고 목록 / 자재 재고 상세 - 자재 설명)

    private int materialIncomingQuantity;           // 입고 수량 (-> 자재재고 목록)

    private int materialOutgoingQuantity;           // 출고 수량 (-> 자재재고 목록)

    private int materialStock;                      // 재고 수량 (-> 자재재고 목록 / 자재 재고 상세)

    private Long materialSupplyPrice;               // 공급 단가 (-> 자재재고 목록)

    private Long materialTotalInventoryPayments;    // 총 재고 금액 (입고수량*공급단가 - 출고수량*공급단가) (-> 자재재고 목록)

    private String materialType;                    // 자재타입 (자재재고 목록 검색용)

    private String materialCode;                    // 자재코드 (자재재고 목록 검색용)

    private String materialName;                    // 자재이름 (자재재고 목록 검색용)

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;              // 파일 일련번호


    public void change(MaterialInventoryDTO materialInventoryDTO ) {
        //입고수량, 출고수량, 재고수량, 공급단가, 총재고금액

        this.materialIncomingQuantity = materialInventoryDTO.getMaterialIncomingQuantity();
        this.materialOutgoingQuantity = materialInventoryDTO.getMaterialOutgoingQuantity();
        this.materialStock = materialInventoryDTO.getMaterialStock();
        this.materialSupplyPrice = materialInventoryDTO.getMaterialSupplyPrice();
        this.materialTotalInventoryPayments = materialInventoryDTO.getMaterialTotalInventoryPayments();

    }


}
