package com.deligence.deli.domain;

import com.deligence.deli.dto.ProgressInspectionDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"order", "employee"})
public class ProgressInspection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int progressInspectionNo;//진척 검수 일련번호

    private LocalDate progressInspectionDate; //검수일

    private int progressInspectionTimes; //검수 차수

    private String progressInspectionEtc; //검수 기타 사항

    private float rateOfProgress; //검수진척도

    private String progressInspectionState; // 검수상태

    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;// 발주 (일련번호)

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;// 사원 (일련번호)

    private String employeeName;//담당자 이름

    public void change(ProgressInspectionDTO progressInspectionDTO){

        this.progressInspectionDate = progressInspectionDTO.getProgressInspectionDate();
        this.progressInspectionTimes = progressInspectionDTO.getProgressInspectionTimes();
        this.progressInspectionEtc = progressInspectionDTO.getProgressInspectionEtc();
        this.rateOfProgress = progressInspectionDTO.getRateOfProgress();
        this.progressInspectionState = progressInspectionDTO.getProgressInspectionState();

    }

}
