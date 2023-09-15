package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Orders")
@ToString(exclude = {"employee"})
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_no;//발주 일련번호

    private String order_code;//발주 코드

    private int order_quantity;//발주 수량

    private LocalDate order_delivery_date;//납기일

    private LocalDate order_date;//발주일

    private String order_state;//발주 상태

    private String order_etc; //비고
/*
    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementPlan materialProcurementPlan; // 조달계획 (일련번호)

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementContract materialProcurementContract; // 조달계획 (일련번호)
*/
    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee; //사원 (일련번호)

    private String material_name; //자재 이름

    private String employee_name; //사원명

}
