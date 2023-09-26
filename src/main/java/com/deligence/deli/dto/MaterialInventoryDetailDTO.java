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

    private int materialInventoryNo; // 자재 재고 일련번호

    private int materialNo;

    private int materialIncomingQuantity; // 입고 수량

    private int materialOutgoingQuantity; // 출고 수량

    private int materialStock; // 재고 수량

    private Long materialSupplyPrice; // 공급 단가

    private Long materialTotalInventoryPayments; // 재고 총 금액

    private String materialExplaination;    //자재설명

    private int materialImageNo;    //자재이미지 일련번호

    private String materialImgName; //자재이미지이름

    private String materialUuid;    //자재이미지 범용식별자

    private int materialHistoryNo;  //입출고기록 일련번호

    private String inOutSeparator;  //입출고 구분자

    private int quantity; //(입출고) 수량

    private String materialName; // 자재명 검색

    private String materialType; // 자재타입 검색

    private String materialCode; // 자재코드 검색

    private int employeeNo; //사원 일련번호

    private String employeeName;   //사원 이름

    //Order -> 발주일련번호, 발주코드, 자재이름, 발주일, 납품일, 담당자, 상태 가져오기
    private int orderNo;    //발주일련번호

    private String orderCode;   //발주코드

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;    //발주일

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDeliveryDate;    //납기일

    private String orderState;  //발주상태

    private LocalDateTime modDate;  //수정일

    private LocalDateTime regDate;  //등록일

    private int documentFileNo; // 문서 파일 일련번호
}
