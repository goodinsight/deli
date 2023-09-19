package com.deligence.deli.dto;


import com.deligence.deli.domain.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    private int orderNo;//발주 일련번호

    private String orderCode;//발주 코드

    private int orderQuantity;//발주 수량

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDeliveryDate;//납기일

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;//발주일

    private String orderState;//발주 상태

    private String orderEtc; //비고

    private int materialProcurementPlanNo;//조달계획 일련번호 : FK

    private int materialProcurementContractNo;//조달계약 일련번호 : FK

    private int employeeNo;// 사원 아이디

    private String materialName; //자재 이름

    private String employeeName; //사원명

}
