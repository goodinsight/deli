package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialProcurementPlanningDTO {

    private int materialProcurementPlanNo;   //조달계획일련번호

    private LocalDate modDate;  //수정일

    @NotEmpty
    private LocalDate regDate;  //등록일

    @NotEmpty
    private LocalDate procurementDeliveryDate;    //납기일

    @NotEmpty
    private int materialRequirementsCount;    //자재소요량

    @NotEmpty
    private String materialProcurementState;  //자재조달상태

    @NotEmpty
    private int materialNo;    //자재일련번호 FK

    @NotEmpty
    private int productionPlanNo; //생산계획 일련번호 FK

    @NotEmpty
    private int employeeNo;    //사원일련번호 FK

    @NotEmpty
    private String materialCode;   //자재코드 (검색용)

    @NotEmpty
    private String materialName;   //자재이름 (검색용)

}


