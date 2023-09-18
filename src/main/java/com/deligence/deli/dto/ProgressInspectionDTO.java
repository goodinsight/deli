package com.deligence.deli.dto;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProgressInspectionDTO {

    private int progress_inspection_no;//진척 검수 일련번호

    private LocalDate progress_inspection_date; //검수일

    private int progress_inspection_times; //검수 차수

    private String progress_inspection_etc; //검수 기타 사항

    private float rate_of_progress; //검수진척도

    private String progress_inspection_state; // 검수상태

    private Long order_no;//발주 일련번호

    private int employee_no;// 사원 아이디?

}
