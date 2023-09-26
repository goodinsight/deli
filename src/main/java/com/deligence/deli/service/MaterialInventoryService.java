package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    //자재 총 재고 등록
    int stockRegister(MaterialInventoryDTO materialInventoryDTO);

    //자재 총 재고 상세
    MaterialInventoryDetailDTO stockRead(int materialInventoryNo);

    //자재 총 재고 수정
    void stockModify(MaterialInventoryDTO materialInventoryDTO);

    //자재 총 재고 삭제
    void remove(int materialInventoryNo);

    //자재 총 재고 목록
    PageResponseDTO<MaterialInventoryDTO> stockList(PageRequestDTO pageRequestDTO);

//    PageResponseDTO<MaterialInventoryDTO> materialStockStateListOne(PageRequestDTO pageRequestDTO);

    default MaterialInventory dtoToEntity(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = MaterialInventory.builder()
                .materialInventoryNo(materialInventoryDTO.getMaterialInventoryNo())
                .materials(Materials.builder().materialNo(materialInventoryDTO.getMaterialNo()).build())
                .materialIncomingQuantity(materialInventoryDTO.getMaterialIncomingQuantity())
                .materialOutgoingQuantity(materialInventoryDTO.getMaterialOutgoingQuantity())
                .materialStock(materialInventoryDTO.getMaterialStock())
                .materialSupplyPrice(materialInventoryDTO.getMaterialSupplyPrice())
                .materialTotalInventoryPayments(materialInventoryDTO.getMaterialTotalInventoryPayments())
                .order(Order.builder().orderNo(materialInventoryDTO.getOrderNo()).build())
                .materialImage(MaterialImage.builder().materialImgNo(materialInventoryDTO.getMaterialImageNo()).build())
                .materialInOutHistory(MaterialInOutHistory.builder().materialHistoryNo(materialInventoryDTO.getMaterialHistoryNo()).build())
                .materialName(materialInventoryDTO.getMaterialName())
                .materialType(materialInventoryDTO.getMaterialType())
                .materialCode(materialInventoryDTO.getMaterialCode())
                .orderCode(materialInventoryDTO.getOrderCode())
                .employeeName(materialInventoryDTO.getEmployeeName())
                .orderState(materialInventoryDTO.getOrderState())
                .documentFile(DocumentFile.builder().documentFileNo(materialInventoryDTO.getDocumentFileNo()).build())
                .build();

        return materialInventory;
    }

    default MaterialInventoryDTO entityToDto(MaterialInventory materialInventory) {

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialInventoryNo(materialInventory.getMaterialInventoryNo())
                .materialNo(materialInventory.getMaterials().getMaterialNo())   //어디서 가져오는지 확인할것
                .materialIncomingQuantity(materialInventory.getMaterialIncomingQuantity())
                .materialOutgoingQuantity(materialInventory.getMaterialOutgoingQuantity())
                .materialStock(materialInventory.getMaterialStock())
                .materialSupplyPrice(materialInventory.getMaterialSupplyPrice())
                .materialTotalInventoryPayments(materialInventory.getMaterialTotalInventoryPayments())
                .materialImageNo(materialInventory.getMaterialImage().getMaterialImgNo())
                .materialHistoryNo(materialInventory.getMaterialInOutHistory().getMaterialHistoryNo())
                .materialName(materialInventory.getMaterialName())
                .materialType(materialInventory.getMaterialType())
                .materialCode(materialInventory.getMaterialCode())
                .employeeName(materialInventory.getEmployeeName())
                .orderNo(materialInventory.getOrder().getOrderNo())
                .orderCode(materialInventory.getOrderCode())
                .orderState(materialInventory.getOrderState())
                .documentFileNo(materialInventory.getDocumentFile().getDocumentFileNo())
                .build();

        return materialInventoryDTO;
    }

}
