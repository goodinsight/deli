package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialInOutHistoryService {

    int register(MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO); //자재 재고 입고,출고 등록

    MaterialInOutHistoryDetailDTO readOne(int materialHistoryNo);  //자재 재고 입고,출고 조회작업처리

    PageResponseDTO<MaterialInOutHistoryDetailDTO> List(PageRequestDTO pageRequestDTO);

//    PageResponseDTO<MaterialInventoryDTO> materialStockStateListOne(PageRequestDTO pageRequestDTO);

    default MaterialInOutHistory dtoToEntity(MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO) {

        MaterialInOutHistory materialInOutHistory = MaterialInOutHistory.builder()
                .materialHistoryNo(materialInOutHistoryDetailDTO.getMaterialHistoryNo())
                .inOutSeparator(materialInOutHistoryDetailDTO.getInOutSeparator())
                .quantity(materialInOutHistoryDetailDTO.getMaterialInOutQuantity())
                .materialInventory(MaterialInventory.builder().materialInventoryNo(materialInOutHistoryDetailDTO.getMaterialInventoryNo()).build())
                .employee(Employee.builder().employeeNo(materialInOutHistoryDetailDTO.getEmployeeNo()).build())
                .build();

        return materialInOutHistory;
    }

    default MaterialInOutHistoryDetailDTO entityToDto(MaterialInOutHistory materialInOutHistory) {

        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = MaterialInOutHistoryDetailDTO.builder()
                .employeeNo(materialInOutHistory.getEmployee().getEmployeeNo())
                .materialInventoryNo(materialInOutHistory.getMaterialInventory().getMaterialInventoryNo())
                .materialHistoryNo(materialInOutHistory.getMaterialHistoryNo())
                .inOutSeparator(materialInOutHistory.getInOutSeparator())
                .materialInOutQuantity(materialInOutHistory.getQuantity())
                .build();

        return materialInOutHistoryDetailDTO;
    }

}
