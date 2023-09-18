package com.deligence.deli.domain;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductionPlanning extends BaseEntity {   //제품생산계획테이블 Entity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int production_plan_no; //생산계획일련번호

    private String production_plan_code;    //생산계획코드

    private int production_quantity;    //생산수량

    private int production_requirements_date;   //생산소요기간

    private String production_requirements_process; //생산소요공정

    private LocalDate production_delivery_date; //납기일

    private String detail_explaination; //상세내용

//    @ManyToOne(fetch = FetchType.LAZY)
//    private Products products;  //제품일련번호 FK

    private String product_code;    //제품코드 (검색용)

    private String client_name; //구매협력회사명 (검색용)

    private String client_status;   //계약상태 (검색용)


}
