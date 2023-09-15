package com.deligence.deli.dto;


import com.deligence.deli.domain.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    private Long order_no;//발주 일련번호

    private String order_code;//발주 코드

    private int order_quantity;//발주 수량

    private LocalDate order_delivery_date;//납기일

    private LocalDate order_date;//발주일

    private String order_state;//발주 상태

    private String order_etc; //비고

    private Long material_procurement_plan_no;//조달계획 일련번호 : FK

    private Long material_procurement_contact_no;//조달계약 일련번호 : FK

    private String eployee_id;// 사원 아이디?

    private String material_name; //자재 이름

    private String employee_name; //사원명

}
