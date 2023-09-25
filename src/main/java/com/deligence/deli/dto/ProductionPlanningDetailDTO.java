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
public class ProductionPlanningDetailDTO {

    private int productionPlanNo;   //생산계획 일련번호

    private String productionPlanCode;  //생산계획 코드

    private int productionQuantity; //생산수량

    private int productionRequirementsDate; //생산소요기간

    private String productionRequirementsProcess;   //생산소요공정

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productionDeliveryDate;   //납기일

    private String detailExplaination;  //상세내용

    private int productContractNo;  //제품계약일련번호 (FK)

    private int employeeNo; //제품계약 -> 사원일련번호 (계약담당자)

    private String employeeName;

    private int productNo;  //제품일련번호(FK)    (제품계약에서 가져올 수 있음)

    private String productCode; //제품코드 (검색용)    (제품계약->제품코드)

    //제품관련
    private String productName; //제품->제품이름

    private String productType; //제품->제품타입

    private String productContent;  //제품->제품내용

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productDeliveryDate;  //제품 납기일

    private int clientNo;   //구매협력회사일련번호(FK)    (제품계약->구매협력회사일련번호)

    private String clientName;  //구매협력회사명 (검색용) (제품계약->구매협력회사명)

    private String clientStatus;    //구매협력회사 계약상태 (검색용) (제품계약->구매협력회사 계약상태)

    private LocalDateTime regDate;  //등록일

    private LocalDateTime modDate;  //수정일
}
