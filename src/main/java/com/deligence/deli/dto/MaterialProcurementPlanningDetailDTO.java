package com.deligence.deli.dto;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Materials;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialProcurementPlanningDetailDTO {

    private int materialProcurementPlanNo;   //조달계획 일련번호

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate procurementDeliveryDate;    //납기일

    @NotNull
    private int materialRequirementsCount;    //자재소요량

    //@NotEmpty
    private String materialProcurementState;  //자재조달상태

//    private Materials materials;    //자재일련번호 FK

    private int productionPlanNo; //생산계획 일련번호 FK

    private int materialNo; //자재 일련번호

    private String materialType;    //자재타입

    @NotEmpty
    private String materialCode;   //자재코드 (검색용)

    @NotEmpty
    private String materialName;   //자재이름 (검색용)

//    private Employee employee;    //사원일련번호 FK

    private int employeeNo; //사원 일련번호

    private String employeeName;    //사원 이름 (담당자)

    private LocalDateTime regDate;  //등록일

    private LocalDateTime modDate;  //수정일


}


