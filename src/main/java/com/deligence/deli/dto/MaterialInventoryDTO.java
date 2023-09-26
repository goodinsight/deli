package com.deligence.deli.dto;

import com.deligence.deli.domain.DocumentFile;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDTO {

    private int materialInventoryNo; // 자재 재고 일련번호

    private int materialNo; //자재 일련번호 FK

    private int materialIncomingQuantity; // 입고 수량

    private int materialOutgoingQuantity; // 출고 수량

    private int materialStock; // 재고 수량

    private Long materialSupplyPrice; // 공급 단가

    private Long materialTotalInventoryPayments; // 재고 총 금액

    private int materialImageNo;    //자재이미지 일련번호 FK

    private int materialHistoryNo;  //입출고기록 일련번호 FK

    private String materialName; // 자재명 검색

    private String materialType; // 자재타입 검색

    private String materialCode; // 자재코드 검색


    private String employeeName;    //담당자(검색용)

    private int orderNo;    //발주 일련번호

    private String orderCode;   //발주코드(검색용)

    private String orderState;  //발주상태 (검색용)

    private int documentFileNo; // 문서 파일 일련번호
}
