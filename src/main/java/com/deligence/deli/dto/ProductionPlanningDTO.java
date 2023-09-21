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
public class ProductionPlanningDTO {

    private int productionPlanNo;   //생산계획 일련번호

    private String productionPlanCode;  //생산계획 코드

    private int productionQuantity; //생산수량

    private int productionRequirementsDate; //생산소요기간

    private String productionRequirementsProcess;   //생산소요공정

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productionDeliveryDate;   //납기일

    private String detailExplaination;  //상세내용

    private int productNo;  //제품일련번호(FK)
//    private Products products;

    private String productCode; //제품코드 (검색용)

    private int clientNo;   //구매협력회사일련번호(FK)
//    private CooperatorClient cooperatorClient;    //구매협력회사

    private String clientName;  //구매협력회사명 (검색용)

    private String clientStatus;    //구매협력회사 계약상태 (검색용)

    private LocalDateTime regDate;  //등록일

    private LocalDateTime modDate;  //수정일
}
