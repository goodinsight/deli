package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    //자재재고 등록
    int registerInventory(MaterialInventoryDTO materialInventoryDTO);

    //자재재고 상세
    MaterialInventoryDetailDTO readInventory(int materialInventoryNo);

    //자재재고 수정
    void modifyInventory(MaterialInventoryDTO materialInventoryDTO);

    //자재재고 삭제
    void removeInventory(int materialInventoryNo);

    MaterialInventoryDTO readByMaterialCode(String materialCode);

    //자재재고 목록
    PageResponseDTO<MaterialInventoryDTO> listInventory(PageRequestDTO pageRequestDTO);


    //자재재고 관련 dtoToEntity, entityToDto
    default MaterialInventory dtoToEntityInventory(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = MaterialInventory.builder()
                .materialInventoryNo(materialInventoryDTO.getMaterialInventoryNo())
                .materials(Materials.builder().materialNo(materialInventoryDTO.getMaterialNo()).build())
                .materialIncomingQuantity(materialInventoryDTO.getMaterialIncomingQuantity())
                .materialOutgoingQuantity(materialInventoryDTO.getMaterialOutgoingQuantity())
                .materialStock(materialInventoryDTO.getMaterialStock())
                .materialSupplyPrice(materialInventoryDTO.getMaterialSupplyPrice()) //materials().get
                .materialTotalInventoryPayments(materialInventoryDTO.getMaterialTotalInventoryPayments())
                .materialType(materialInventoryDTO.getMaterialType())
                .materialCode(materialInventoryDTO.getMaterialCode())
                .materialName(materialInventoryDTO.getMaterialName())
                .materialInOutHistory(MaterialInOutHistory.builder().materialHistoryNo(materialInventoryDTO.getMaterialHistoryNo()).build())
                .build();

        return materialInventory;
    }

    default MaterialInventoryDTO entityToDtoInventory(MaterialInventory materialInventory) {

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialInventoryNo(materialInventory.getMaterialInventoryNo())
                .materialNo(materialInventory.getMaterials().getMaterialNo())   //어디서 가져오는지 확인할것
                .materialIncomingQuantity(materialInventory.getMaterialIncomingQuantity())
                .materialOutgoingQuantity(materialInventory.getMaterialOutgoingQuantity())
                .materialStock(materialInventory.getMaterialStock())
                .materialSupplyPrice(materialInventory.getMaterials().getMaterialSupplyPrice())
                .materialTotalInventoryPayments(materialInventory.getMaterialTotalInventoryPayments())
                .materialType(materialInventory.getMaterials().getMaterialType())
                .materialName(materialInventory.getMaterials().getMaterialName())
                .materialCode(materialInventory.getMaterials().getMaterialCode())
                .materialHistoryNo(materialInventory.getMaterialInOutHistory().getMaterialHistoryNo())
                .build();

        return materialInventoryDTO;
    }


}
