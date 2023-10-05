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

    private int productionPlanNo;                   //생산계획일련번호 (-> 목록) ---------------------------

    private String productionPlanCode;              //생산계획코드(-> 목록, 상세)

    private int productionQuantity;                 //생산수량

    private int productionRequirementsDate;         //생산소요기간

    private String productionRequirementsProcess;   //생산소요공정

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productionDeliveryDate;       //생산 납기일

    private String detailExplaination;              //상세내용

    private String productionState;                 //생산계획진행상태

    //----------------------------------------------------------------------------------------------------

    private int productContractNo;                  //제품계약(일련번호) FK

    private String productContractCode;             //제품계약코드

    private String productCode;                     //제품코드 (-> 목록-검색용 / 상세) <- 제품계약에서 가져옴

    private String productName;                     //제품이름 (-> 상세)

    private String productType;                     //제품타입 (-> 상세)

    private int productQuantity;                    //제품계약수량 (-> 상세)

    private String clientName;                      //구매협력회사명 (-> 목록-검색용) <- 제품계약에서 가져옴

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productDeliveryDate;          //제품 납기일 (-> 목록-검색용?)   <- 제품계약에서 가져옴

//    private String productContractState;            //계약진행상태

    private String clientStatus;                    //계약상태 (-> 목록-검색용)    <- 제품계약에서 가져옴

    //-------------------------------------------------------------------------------------------------------

    private int materialRequirementsListNo;         //제품별필요자재항목 FK
    //필요자재코드 -> 자재명, 자재분류, 필요수량 ==> 추가로 클릭할 수 있음.

    private int productNo;                          //제품별필요자재항목의 productsFK -> 해당 제품을 클릭하면,,,

    private String productCode2;                     //제품코드 (-> 목록-검색용 / 상세) <- 제품계약에서 가져옴

    private String productName2;                     //제품이름 (-> 상세)

    private String productType2;                     //제품타입 (-> 상세)

    private int materialNo;                         //제품별필요자재항목의 materialsFK -> 제품에 필요한 자재들 나열...?

    private String materialCode;                    //필요자재코드 (-> 클릭시 검색)

    private String materialName;                    //자재이름 (-> 상세)

    private String materialType;                    //자재분류 (-> 상세)

    private int quantity;                           //필요수량 (-> 상세)

    private String employeeName;                    //담당자 (생산계획담당 : 카리나 - employee15)

    //-------------------------------------------------------------------------------------------------------

    private int employeeNo;                         //사원일련번호 FK

    private String employeeName2;                   //생산계획담당자

    private LocalDateTime regDate;                  //등록일

    private LocalDateTime modDate;                  //수정일

}
