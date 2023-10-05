package com.deligence.deli.dto;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.domain.ProductContract;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductionPlanningDTO {

    private int productionPlanNo;                   //생산계획일련번호 (-> 목록) ---------------------------

    private String productionPlanCode;              //생산계획코드(-> 목록, 상세)

    private int productionQuantity;                 //생산수량

    private int productionRequirementsDate;         //생산소요기간

    private String productionRequirementsProcess;   //생산소요공정

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productionDeliveryDate;       //생산 납기일

    private String detailExplaination;              //상세내용

    private String productionState;                 //생산계획진행상태
    //자재조달단계, 자재입고단계, 제품생산단계, 제품검수단계, 제품입고단계

    //----------------------------------------------------------------------------------------------------

    private int productContractNo;                  //제품계약(일련번호) FK

    private String productCode;                     //제품코드 (-> 목록-검색용 / 상세) <- 제품계약에서 가져옴

    private String clientName;                      //구매협력회사명 (검색용) <- 제품계약에서 가져옴

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productDeliveryDate;          //제품 납기일 (-> 목록-검색용?)   <- 제품계약에서 가져옴

//    private String productContractState;            //제품 계약 진행 상태

    private String clientStatus;                    //계약상태 (검색용)    <- 제품계약에서 가져옴

    private String employeeName;                    //제품계약담당자
    //-------------------------------------------------------------------------------------------------------

    private int materialRequirementsListNo;         //제품별필요자재항목 FK
    //필요자재코드 -> 자재명, 자재분류, 필요수량 ==> 추가로 클릭할 수 있음.

    private int employeeNo;      //사원일련번호 FK

    private String employeeName2;   //생산계획담당자

    private LocalDateTime regDate;  //등록일

    private LocalDateTime modDate;  //수정일

}
