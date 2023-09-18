package com.deligence.deli.domain;

// 자재조달차트테이블 Entity

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString(exclude = {"materialProcurementContract"})
public class MaterialProcurementChart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialProcurementChartNo;

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementContract materialProcurementContract;    //조달계약일련번호(no) FK

    private String materialCode; //자재코드

    private int materialRequirementsCount;  //자재수량

    private LocalDate procurementIncomingDate;  //입고일

    private String incomingInspection;  //입고검수

//    @ManyToOne(fetch = FetchType.LAZY)
//    private documentFile documentFile;  //문서파일일련번호(no) FK



}
