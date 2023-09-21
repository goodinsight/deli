package com.deligence.deli.domain;

import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"materials", "employee", "productionPlanning"})
public class MaterialProcurementPlanning extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int materialProcurementPlanNo;   //조달계획일련번호

    private LocalDate procurementDeliveryDate;    //납기일

    private int materialRequirementsCount;    //자재소요량

    private String materialProcurementState;  //자재조달상태

    @ManyToOne(fetch = FetchType.LAZY)
    private ProductionPlanning productionPlanning;  //생산계획 일련번호 (생산계획 FK)

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;            //자재일련번호(material_no) (자재 FK)

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;    //사원일련번호 (employee_no)(사원 FK)

    private String materialCode;   //자재코드 (검색용)

    private String materialName;   //자재이름 (검색용)


    //수정가능한 속성 지정 (일단 납기일,자재소요랑,자재조달상태 지정)
    public void change(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        this.procurementDeliveryDate = procurementDeliveryDate;         //납기일
        this.materialRequirementsCount = materialRequirementsCount;     //자재소요량
        this.materialProcurementState = materialProcurementState;       //자재조달상태

        //생산계획일련번호
        //자재코드
        //카테고리, 자재이름
        //담당자

    }

}
