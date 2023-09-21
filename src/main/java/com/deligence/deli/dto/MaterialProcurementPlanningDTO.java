package com.deligence.deli.dto;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.ProductionPlanning;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialProcurementPlanningDTO {

    private int materialProcurementPlanNo;   //조달계획일련번호

    @NotNull //@NotEmpty는 String타입에만 붙음. 그 외는 @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate procurementDeliveryDate;    //납기일

    @NotNull
    private int materialRequirementsCount;    //자재소요량

    //@NotEmpty
    private String materialProcurementState;  //자재조달상태

    @NotNull
    private int productionPlanNo; //생산계획 일련번호 FK

    private int materialNo;  //자재일련번호 FK
//    private Materials materials;

    private int employeeNo;  //사원일련번호 FK
//    private Employee employee;

    @NotEmpty
    private String materialCode;   //자재코드 (검색용)

    @NotEmpty
    private String materialName;   //자재이름 (검색용)

    private LocalDateTime regDate;  //등록일

    private LocalDateTime modDate;  //수정일

}


