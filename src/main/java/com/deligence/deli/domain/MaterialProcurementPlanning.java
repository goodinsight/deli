package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"material","employee"})
public class MaterialProcurementPlanning extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int material_procurement_plan_no;   //조달계획일련번호

    private LocalDate procurement_delivery_date;    //납기일

    private int material_requirements_count;    //자재소요량

    private String material_procurement_state;  //자재조달상태

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials material;            //자재일련번호(material_no) (자재 FK)

//    @ManyToOne
//    private Production_planning production_plan;  //생산계획 일런번호(production_plan_no) (생산계획 FK)

    @ManyToOne
    private Employee employee;    //사원일련번호 (employee_no)(사원 FK)

    private String material_code;   //자재코드 (검색용)

    private String material_name;   //자재이름 (검색용)


    //수정가능한 속성 지정 (어떤부분이 수정 가능할 지 몰라서 일단 납기일,자재소요랑,자재조달상태만 지정함)
    public void change(LocalDate procurement_delivery_date, int material_requirements_count,
                       String material_procurement_state) {

        this.procurement_delivery_date = procurement_delivery_date;
        this.material_requirements_count = material_requirements_count;
        this.material_procurement_state = material_procurement_state;

    }

}
