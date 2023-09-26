package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    int materialStockRegister(MaterialInventoryDTO materialInventoryDTO);

    MaterialInventoryDetailDTO materialStockRead(int materialInventoryNo);

    PageResponseDTO<MaterialInventoryDTO> materialStockList(PageRequestDTO pageRequestDTO);

    PageResponseDTO<MaterialInventoryDTO> materialStockStateListOne(PageRequestDTO pageRequestDTO);

    default MaterialInventory dtoToEntity(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = MaterialInventory.builder()
                .employee(Employee.builder().employeeNo(materialInventoryDTO.getEmployeeNo()).build())
                .materials(Materials.builder().materialNo(materialInventoryDTO.getMaterialNo()).build())
                .materialImage(MaterialImage.builder().materialImgNo(materialInventoryDTO.getMaterialNo()).build())
                .materialInOutHistory(MaterialInOutHistory.builder().materialHistoryNo(materialInventoryDTO.getMaterialInventoryNo()).build())
                .build();

        return materialInventory;
    }

    default MaterialInventoryDTO entityDtoTo(MaterialInventory materialInventory) {

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .employeeNo(materialInventory.getEmployee().getEmployeeNo())
                .materialNo(materialInventory.getMaterials().getMaterialNo())
                .materialImageNo(materialInventory.getMaterials().getMaterialNo())
                .materialHistoryNo(materialInventory.getMaterialInventoryNo())
                .build();

        return materialInventoryDTO;
    }

}
