package com.deligence.deli.domain;


import com.deligence.deli.dto.ProductionPlanningDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"productContract", "materialRequirementsList", "employee"})
public class ProductionPlanning extends BaseEntity {   //제품생산계획테이블 Entity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int productionPlanNo;                   //생산계획일련번호 (-> 목록) ---------------------------

    private String productionPlanCode;              //생산계획코드(-> 목록, 상세)

    private int productionQuantity;                 //생산수량

    private int productionRequirementsDate;         //생산소요기간

    private String productionRequirementsProcess;   //생산소요공정

    private LocalDate productionDeliveryDate;       //생산 납기일

    private String detailExplaination;              //상세내용

    private String productionState;                 //생산계획진행상태

    @ManyToOne(fetch = FetchType.LAZY)
    private ProductContract productContract;    //제품계약(일련번호) FK --------------------------------------

    private String productCode;                         //제품코드 (-> 목록-검색용 / 상세) <- 제품계약에서 가져옴

    private String clientName;                          //구매협력회사명 (검색용) <- 제품계약에서 가져옴

    private LocalDate productDeliveryDate;              //제품 납기일 (-> 목록-검색용?)   <- 제품계약에서 가져옴

//    private String productContractState;                //제품 계약 진행 상태

    private String clientStatus;                        //계약상태 (검색용)    <- 제품계약에서 가져옴

    private String employeeName;    //담당자

    //-------------------------------------------------------------------------------------------------------
    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialRequirementsList materialRequirementsList;      //제품별필요자재항목 FK
    //필요자재코드 -> 자재명, 자재분류, 필요수량 ==> 추가로 클릭할 수 있음.

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;      //사원일련번호 FK

    private String employeeName2;   //생산계획담당자

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementPlanning materialProcurementPlanning;


    public void change(ProductionPlanningDTO productionPlanningDTO){

        this.productionPlanCode = productionPlanningDTO.getProductionPlanCode();                        //코드
        this.productionQuantity = productionPlanningDTO.getProductionQuantity();                        //생산수량
        this.productionRequirementsDate = productionPlanningDTO.getProductionRequirementsDate();        //생산소요기간
        this.productionRequirementsProcess = productionPlanningDTO.getProductionRequirementsProcess();  //생산소요공정
        this.productionDeliveryDate = productionPlanningDTO.getProductionDeliveryDate();                //생산납기일
        this.detailExplaination = productionPlanningDTO.getDetailExplaination();                        //상세내용
        this.productionState = productionPlanningDTO.getProductionState();                              //생산진행상태

    }

    //생산 진행 상태 변경 (자재조달계획 -> 자재조달중 / 조달계획완료 -> 발주진행중)
    public void changeState(String state){
        this.productionState = state;

    }


}
