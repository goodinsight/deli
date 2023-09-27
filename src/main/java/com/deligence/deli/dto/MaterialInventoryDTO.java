package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDTO {

    private int materialInventoryNo;        // 자재재고 일련번호 (-> 자재재고 목록)

    private int materialIncomingNo;         // 입고관리 일련번호 (-> 재고 > 입고관리)

    private int materialNo;                 //자재 일련번호 FK -> 자재타입, 자재코드, 자재이름, 공급단가 (-> 자재재고 목록/상세 -자재설명)

    private int materialIncomingQuantity;   // 입고 수량 (-> 자재재고 목록)

    private int materialOutgoingQuantity;   // 출고 수량 (-> 자재재고 목록)

    private int materialStock;              // 재고 수량 (-> 자재재고 목록 / 상세 )

    private Long materialSupplyPrice;       // 공급 단가 (-> 자재재고 목록)

    private Long materialTotalInventoryPayments; // 총 재고 금액 (입고수량*공급단가 - 출고수량*공급단가) (-> 자재재고 목록)

    private String materialType;            // 자재타입 (자재재고 목록 검색용)

    private String materialCode;            // 자재코드 (자재재고 목록 검색용)

    private String materialName;            // 자재이름 (자재재고 목록 / 재고 > 입고관리 검색용)

    private int materialImageNo;            // 자재이미지 일련번호 FK (-> 자재 재고 상세)

    private int orderNo;                    // 발주 일련번호 FK (재고 > 입고관리) -> 발주코드, (발주)자재이름, 입고수량, 발주일, 납기일, 담당자, (발주)상태

    private String orderCode;               // 발주코드 (재고 > 입고관리 검색용)

    private String employeeName;            // (발주)담당자 (재고 > 입고관리 검색용)

    private String orderState;              // (발주)상태 (재고 > 입고관리 검색용)

    private int materialHistoryNo;          // 입출고기록 일련번호 FK -> 일련번호, 입출고구분자, 수량, 날짜, 담당자

    private int documentFileNo;             // 문서파일 일련번호 FK
}
