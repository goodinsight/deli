package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialProcurementPlanningDTO {

    private int material_procurement_plan_no;   //조달계획일련번호

    private LocalDate modDate;  //수정일

    private LocalDate regDate;  //등록일

    private LocalDate procurement_delivery_date;    //납기일

    private int material_requirements_count;    //자재소요량

    private String material_procurement_state;  //자재조달상태

    private int material_no;    //자재일련번호 FK

    private int production_plan_no; //생산계획 일련번호 FK

    private int employee_id;    //사원일련번호 FK

    private String material_code;   //자재코드 (검색용)

    private String material_name;   //자재이름 (검색용)

}


