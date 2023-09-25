package com.deligence.deli.domain;


import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@ToString(exclude = {"products","productContract", "cooperatorClient"})
@ToString(exclude = "productContract")
public class ProductionPlanning extends BaseEntity {   //제품생산계획테이블 Entity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int productionPlanNo; //생산계획일련번호

    private String productionPlanCode;    //생산계획코드

    private int productionQuantity;    //생산수량

    private int productionRequirementsDate;   //생산소요기간

    private String productionRequirementsProcess; //생산소요공정

    private LocalDate productionDeliveryDate; //생산 납기일

    private String detailExplaination; //상세내용

    @ManyToOne(fetch = FetchType.LAZY)
    private ProductContract productContract;    //제품계약(일련번호) FK
    //제품계약 -> 제품일련번호, 제품수량, 납기일 가져올 수 있음.

//    @ManyToOne(fetch = FetchType.LAZY)
//    private Products products;  //제품일련번호 FK

    // 제품별필요자재항목 필요?
//    private MaterialRequirementsList materialRequirementsList;

    private String productCode;    //제품코드 (검색용)

    private LocalDate productDeliveryDate;  //제품 납기일

//    @ManyToOne(fetch = FetchType.LAZY)
//    private CooperatorClient cooperatorClient;  //구매협력회사 일련번호 FK

    private String clientName; //구매협력회사명 (검색용)

    private String clientStatus;   //계약상태 (검색용)


    public void change(ProductionPlanningDTO productionPlanningDTO){

        this.productionPlanCode = productionPlanningDTO.getProductionPlanCode();    //코드
        this.productionQuantity = productionPlanningDTO.getProductionQuantity();    //생산수량
        this.productionRequirementsDate = productionPlanningDTO.getProductionRequirementsDate();    //생산소요기간
        this.productionRequirementsProcess = productionPlanningDTO.getProductionRequirementsProcess();  //생산소요공정
        this.productionDeliveryDate = productionPlanningDTO.getProductionDeliveryDate();    //생산납기일
        this.detailExplaination = productionPlanningDTO.getDetailExplaination();    //상세내용

    }


}
