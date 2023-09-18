package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"materials", "employee"})
//@ToString(exclude = {"materials", "employee", "productionPlanning"})
public class MaterialProcurementPlanning extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialProcurementPlanNo;   //조달계획일련번호

    private LocalDate procurementDeliveryDate;    //납기일

    private int materialRequirementsCount;    //자재소요량

    private String materialProcurementState;  //자재조달상태

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;            //자재일련번호(material_no) (자재 FK)

//    @ManyToOne(fetch = FetchType.LAZY)
//    private ProductionPlanning productionPlanning;  //생산계획 일런번호(production_plan_no) (생산계획 FK)

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;    //사원일련번호 (employee_no)(사원 FK)

    private String materialCode;   //자재코드 (검색용)

    private String materialName;   //자재이름 (검색용)


    //수정가능한 속성 지정 (어떤부분이 수정 가능할 지 몰라서 일단 납기일,자재소요랑,자재조달상태만 지정함)
    public void change(LocalDate procurementDeliveryDate, int materialRequirementsCount,
                       String materialProcurementState) {

        this.procurementDeliveryDate = procurementDeliveryDate;
        this.materialRequirementsCount = materialRequirementsCount;
        this.materialProcurementState = materialProcurementState;

    }

}
