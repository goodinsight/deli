package com.deligence.deli.domain;

import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MaterialProcurementPlanning")
@ToString(exclude = {"materials", "employee", "productionPlanning"})
public class MaterialProcurementPlanning extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer materialProcurementPlanNo;                  //조달계획일련번호
    //JPA에 사용할 경우 Entity에서 id는 모두 Integer이어야 함.

    private String materialProcurementPlanCode;             //조달계획코드

    private LocalDate procurementDeliveryDate;              //납기일

    private int materialRequirementsCount;                  //자재소요량

    private String materialProcurementState;                //자재조달상태 -> 진행중, 조달중단, 조달완료

    //-------------------------------------------------------------------------------------------------

    @ManyToOne(cascade = CascadeType.ALL)
    private ProductionPlanning productionPlanning;          //생산계획 일련번호 (생산계획 FK)

    //추가 -> 생산계획 정보
    private int productionRequirementsDate;                 //생산소요기간

    private String productionRequirementsProcess;           //생산소요공정

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productionDeliveryDate;               //생산 납기일

    private String productionState;                         //생산 진행 상태
    // -자재조달단계, 자재입고단계, 제품생산단계, 제품검수단계, 제품입고완료

    //--------------------------------------------------------------------------------------------------

    @ManyToOne(cascade = CascadeType.ALL)
    private Materials materials;                            //자재일련번호(material_no) (자재 FK)

    private String materialCode;                            //자재코드 (검색용)

    private String materialName;                            //자재이름 (검색용)

    //----------------------------------------------------------------------------------------------------

    @ManyToOne(cascade = CascadeType.ALL)
    private Employee employee;                              //사원일련번호 (employee_no)(사원 FK)

    private String employeeName;                            //담당자


    //수정가능한 속성 지정 (일단 납기일,자재소요랑,자재조달상태 지정)
    public void change(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        this.materialProcurementPlanCode = materialProcurementPlanningDTO.getMaterialProcurementPlanCode(); //조달계획코드
        this.procurementDeliveryDate = materialProcurementPlanningDTO.getProcurementDeliveryDate();         //납기일
        this.materialRequirementsCount = materialProcurementPlanningDTO.getMaterialRequirementsCount();     //자재소요량
        this.materialProcurementState = materialProcurementPlanningDTO.getMaterialProcurementState();       //자재조달상태

        //생산계획일련번호
        //자재코드
        //카테고리, 자재이름
        //담당자

    }


    public void changeState(String state){
        this.materialProcurementState = state;

    }

}
