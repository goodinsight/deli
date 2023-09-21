package com.deligence.deli.domain;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"products", "cooperatorClient"})
public class ProductionPlanning extends BaseEntity {   //제품생산계획테이블 Entity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int productionPlanNo; //생산계획일련번호

    private String productionPlanCode;    //생산계획코드

    private int productionQuantity;    //생산수량

    private int productionRequirementsDate;   //생산소요기간

    private String productionRequirementsProcess; //생산소요공정

    private LocalDate productionDeliveryDate; //납기일

    private String detailExplaination; //상세내용

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;  //제품일련번호 FK

    private String productCode;    //제품코드 (검색용)

    @ManyToOne(fetch = FetchType.LAZY)
    private CooperatorClient cooperatorClient;  //구매협력회사 일련번호 FK

    private String clientName; //구매협력회사명 (검색용)

    private String clientStatus;   //계약상태 (검색용)


}
