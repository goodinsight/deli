package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDetailDTO {

    private int materialInventoryNo; // 자재 재고 일련번호

    private int materialNo;

    private int materialIncomingQuantity; // 입고 수량

    private int materialOutgoingQuantity; // 출고 수량

    private int materialStock; // 재고 수량

    private String materialExplaination;

    private Long materialSupplyPrice; // 공급 단가

    private Long materialTotalInventoryPayments; // 재고 금액

    private int documentFile; // 문서 파일 일련번호

    private String materialName; // 자재명 검색

    private String materialType; // 자재타입 검색

    private String materialCode; // 자재코드 검색

    private int materialHistoryNo;

    private String inOutSeparator;

    private int quantity;

    private LocalDateTime modDate;

    private LocalDateTime regDate;

    private int employeeNo;

    private int employeeName;

    private int materialInOutHistoryNo;

    private int materialImageNo;

    private String materialImgName;

    private String materialUuid;

}
