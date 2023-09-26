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
@ToString(exclude = {"materials", "materialImage", "order", "materialInOutHistory", "documentFile"})
public class MaterialInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialInventoryNo;                 // 자재 재고 일련번호 (-> 자재재고 목록)

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Materials materials;                    // 자재 일련번호 -> 자재타입, 자재코드, 자재이름 (-> 자재재고 목록 / 자재 재고 상세 - 자재 설명)

    private int materialIncomingQuantity;           // 입고 수량 (-> 자재재고 목록)

    private int materialOutgoingQuantity;           // 출고 수량 (-> 자재재고 목록)

    private int materialStock;                      // 재고 수량 (-> 자재재고 목록 / 자재 재고 상세)

    private Long materialSupplyPrice;               // 공급 단가 (-> 자재재고 목록)

    private Long materialTotalInventoryPayments;    // 총 재고 금액 (입고수량*공급단가 - 출고수량*공급단가) (-> 자재재고 목록)

    private String materialType;                    // 자재타입 (자재재고 목록 검색용)

    private String materialCode;                    // 자재코드 (자재재고 목록 검색용)

    private String materialName;                    // 자재이름 (자재재고 목록 / 재고 > 입고관리 검색용)


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MaterialImage materialImage;            //자재이미지 FK (-> 자재 재고 상세)

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Order order;                            // 발주 일련번호 (재고 > 입고관리) -> 발주코드, (발주)자재이름, 입고수량, 발주일, 납기일, 담당자, (발주)상태

    private String orderCode;                       //발주코드 (재고 > 입고관리 검색용)

    private String employeeName;                    //(발주)담당자 (재고 > 입고관리 검색용)

    private String orderState;                      //발주상태 (재고 > 입고관리 검색용)

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MaterialInOutHistory materialInOutHistory;    //입출고 기록 (->일련번호, 입출고구분자, 수량, 날짜, 담당자)

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private DocumentFile documentFile;              // 파일 일련번호

    public void change(MaterialInventoryDTO materialInventoryDTO ) {
        //입고수량, 출고수량, 재고수량, 공급단가, 총재고금액

        this.materialIncomingQuantity = materialInventoryDTO.getMaterialIncomingQuantity();
        this.materialOutgoingQuantity = materialInventoryDTO.getMaterialOutgoingQuantity();
        this.materialStock = materialInventoryDTO.getMaterialStock();
        this.materialSupplyPrice = materialInventoryDTO.getMaterialSupplyPrice();
        this.materialTotalInventoryPayments = materialInventoryDTO.getMaterialTotalInventoryPayments();
//        this.materialName = materialInventoryDTO.getMaterialName();
//        this.materialType = materialInventoryDTO.getMaterialType();
//        this.materialCode = materialInventoryDTO.getMaterialCode();

    }


}
