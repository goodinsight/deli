package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInOutHistoryDetailDTO {

//  detail DTO 필요 정보
// 자재일련번호, 자재코드 ,자재명, 자재분류, 자재공급단가
// 자재 재고 목록 일련번호, 재고수량
// 담당자 사원 일련번호. 담당자명
    private int materialHistoryNo;  //자재기록번호

    private String inOutSeparator;  //입출고 구분자

    private int materialInOutQuantity;  //입고 또는 출고 수량

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate historyDate;  //입/출고 날짜

    private int materialNo; //자재일련번호 : FK

    private String materialCode; //자재코드

    private String materialName; //자재명

    private String materialType; //자재분류

    private Long materialSupplyPrice; //자재공급단가

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime regDate; //출고 등록일

    private int materialInventoryNo; // 자재 재고 일련번호 : FK

    private int materialStock; // 재고 수량

    private int employeeNo;//담당자 사원 일련번호 : FK

    private String employeeName; //담당자명




}
