package com.deligence.deli.dto;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialInventory;
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
public class MaterialInOutHistoryDTO {

    private int materialHistoryNo;

//    private MaterialInventory materialInventory;

    private int materialInventoryNo;

    private String inOutSeparator;

    private int quantity;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate historyDate;  //입/출고 날짜

    private int employeeNo; //사원일련번호 FK

    private String employeeName;    //담당자

}
