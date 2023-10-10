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

    private int materialProcurementPlanNo;                  //조달계획 일련번호

    private String materialProcurementPlanCode;             //조달계획코드

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate procurementDeliveryDate;              //납기일

    private int materialRequirementsCount;                  //자재소요량

    private String materialProcurementState;                //자재조달상태 -> 진행중, 조달중단, 조달완료

    //-------------------------------------------------------------------------------------------------

    private int productionPlanNo;                           //생산계획 일련번호 FK

    private String productionPlanCode;                      //생산계획 코드

    //추가 -> 생산계획 정보
    private int productionRequirementsDate;                 //생산소요기간

    private String productionRequirementsProcess;           //생산소요공정

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productionDeliveryDate;               //생산 납기일

    private String productionState;                         //생산 진행 상태
    // -자재조달단계, 자재입고단계, 제품생산단계, 제품검수단계, 제품입고완료

    private String productCode;                             //제품 코드

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productDeliveryDate;                  //제품 납기일

    private String clientName;                              //클라이언트 회사명

    private String clientStatus;                            //클라이언트 계약 상태

    //productionPlanning의 materialRequirementsList에서 자재 정보 가져 옴.

    //--------------------------------------------------------------------------------------------------

    private int materialNo;                                 //자재 일련번호 FK

    private String materialCode;                            //자재코드 (검색용)

    private String materialName;                            //자재이름 (검색용)

    private String materialType;                            //자재타입

    private Long materialSupplyPrice;                       //자재 공급단가

    //--------------------------------------------------------------------------------------------------

    private int employeeNo;                             //사원 일련번호

    private String employeeName;                        //사원 이름 (담당자)

    private LocalDateTime regDate;                      //등록일

    private LocalDateTime modDate;                      //수정일






}


