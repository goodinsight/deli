package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDetailDTO {

    private int materialInventoryNo;        // 자재재고 일련번호 (-> 자재재고 목록)

    private int materialIncomingNo;         // 입고관리 일련번호 (-> 재고 > 입고관리)

    private int materialNo;                 // 자재 일련번호 FK (-> 자재타입, 자재코드, 자재이름, 공급단가 (-> 자재재고 목록/상세 - 자재설명)

    private int materialIncomingQuantity;   // 입고 수량 (-> 자재재고 목록)

    private int materialOutgoingQuantity;   // 출고 수량 (-> 자재재고 목록)

    private int materialStock;              // 재고 수량 (-> 자재재고 목록 / 상세)

    private Long materialSupplyPrice;       // 공급 단가 (-> 자재재고 목록)

    private Long materialTotalInventoryPayments;    // 총 재고 금액 (입고수량*공급단가 - 출고수량*공급단가) (-> 자재재고 목록)

    private String materialType;            // 자재타입 (-> 자재재고 목록, 검색용)

    private String materialCode;            // 자재코드 (-> 자재재고 목록, 검색용)

    private String materialName;            // 자재이름 (-> 자재재고 목록 / 재고 > 입고관리, 검색용)

    private String materialExplaination;    // 자재설명 (-> 자재재고 상세)

    private int materialImageNo;            // 자재이미지 일련번호 (-> 자재재고 상세)

    private String materialImgName;         // 자재이미지이름 (-> 자재재고 상세)

    private String materialUuid;            // 자재이미지 범용식별자 (-> 자재재고 상세)

    //Order -> 발주일련번호, 발주코드, 자재이름, 발주일, 납품일, 담당자, 상태 가져오기
    private int orderNo;                    // 발주 일련번호 (재고 > 입고관리) -> 발주코드, (발주)자재이름, 입고수량, 발주일, 납기일, 담당자, (발주)상태

    private String orderCode;               // 발주코드 (재고 > 입고관리, 검색용)

    private int orderQuantity;              // 발주수량 (재고 > 입고관리) -> 발주수량을 쓸지 입고수량을 쓸지

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;            // 발주일 (재고 > 입고관리)

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDeliveryDate;    // 납기일 (재고 > 입고관리)

    private int employeeNo;                 // 사원 일련번호

    private String employeeName;            // 사원명 (재고 > 입고관리 - (발주)담당자 / 입/출고 기록관리 - (기록)담당자)

    private String orderState;              // (발주)상태 (재고 > 입고관리, 검색용)

    private int materialHistoryNo;          // 입출고기록 일련번호 -> 입출고구분자, 수량, 날짜, 담당자

    private String inOutSeparator;          // 입/출고 구분자 (입고:"IN" 출고:"OUT")

    private int quantity;                   // (입/출고) 수량

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate historyDate;          // (입/출고) 날짜

    private LocalDateTime regDate;          // 등록일

    private LocalDateTime modDate;          // 수정일

    private int documentFileNo;             // 문서 파일 일련번호

}
