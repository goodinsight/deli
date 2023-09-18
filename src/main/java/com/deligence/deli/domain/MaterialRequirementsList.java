package com.deligence.deli.domain;

//제품별 필요 자재 항목 테이블

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"products", "materials"})
public class MaterialRequirementsList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialRequirementsListNo; //필요항목일련번호

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;  //제품일련번호(FK)

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;    //자재일련번호(FK)

    private int quantity;   //수량
}
