package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProgressInspectionDTO {

    private int progressInspectionNo;//진척 검수 일련번호

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate progressInspectionDate; //검수일

    private int progressInspectionTimes; //검수 차수

    private String progressInspectionEtc; //검수 기타 사항

    private float rateOfProgress; //검수진척도

    private String progressInspectionState; // 검수상태

    private int orderNo;//발주 일련번호

    private int employeeNo;//담당자 일련번호

    private String employeeName;//담당자 이름

}
