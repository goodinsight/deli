package com.deligence.deli.dto;

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
public class OrderDetailDTO {

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

    private String materialCode;//자재 코드

    private String materialName;//자재 명

    private int materialRequirementsCount;//소요량

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate procurementDeliveryDate;//계획 납기일

    private int materialProcurementContractNo;//조달계약 일련번호 : FK

    private String materialProcurementContractCode;//계약 코드

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate materialProcurementContractDate;//계약일

    private Long materialSupplyPrice;//자재공급단가

    private String supplierName;//자재협력회사명

    private int employeeNo;//담당자 사원 일련번호

    private String employeeName; //담당자명

}
