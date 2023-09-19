package com.deligence.deli.dto;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialInventory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInOutHistoryDTO {

    private int materialHistoryNo;

    private MaterialInventory materialInventory;

    private String inOutSeparator;

    private int quantity;

    private Employee employee;

}
