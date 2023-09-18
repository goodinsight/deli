package com.deligence.deli.domain;

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
    private int progress_inspection_no;//진척 검수 일련번호

    private LocalDate progress_inspection_date; //검수일

    private int progress_inspection_times; //검수 차수

    private String progress_inspection_etc; //검수 기타 사항

    private float rate_of_progress; //검수진척도

    private String progress_inspection_state; // 검수상태

    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;// 발주 (일련번호)

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;// 사원 (일련번호)


}
