package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    //자재재고 등록
    int registerInventory(MaterialInventoryDTO materialInventoryDTO);

    //재고>입고관리 등록
    int registerIncoming(MaterialInventoryDTO materialInventoryDTO);

    //자재재고 상세
    MaterialInventoryDetailDTO readInventory(int materialInventoryNo);

    //재고>입고관리 상세
    MaterialInventoryDetailDTO readIncoming(int orderNo);
//    MaterialInventoryDetailDTO readIncoming(int materialInventoryNo);

    //자재재고 수정
    void modifyInventory(MaterialInventoryDTO materialInventoryDTO);

    //재고>입고관리 수정
    void modifyIncoming(MaterialInventoryDTO materialInventoryDTO);

    //자재재고 삭제
    void removeInventory(int materialInventoryNo);

    //재고>입고관리 삭제
    void removeIncoming(int orderNo);
//    void removeIncoming(int materialInventoryNo);

    //자재재고 목록
    PageResponseDTO<MaterialInventoryDTO> listInventory(PageRequestDTO pageRequestDTO);

    //재고>입고관리 목록
    OrderPageResponseDTO<MaterialInventoryDTO> listIncoming(OrderPageRequestDTO orderPageRequestDTO);


    //자재재고 관련 dtoToEntity, entityToDto
    default MaterialInventory dtoToEntityInventory(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = MaterialInventory.builder()
                .materialInventoryNo(materialInventoryDTO.getMaterialInventoryNo())
                .materialIncomingNo(materialInventoryDTO.getMaterialIncomingNo())
                .materials(Materials.builder().materialNo(materialInventoryDTO.getMaterialNo()).build())
                .materialIncomingQuantity(materialInventoryDTO.getMaterialIncomingQuantity())
                .materialOutgoingQuantity(materialInventoryDTO.getMaterialOutgoingQuantity())
                .materialStock(materialInventoryDTO.getMaterialStock())
                .materialSupplyPrice(materialInventoryDTO.getMaterialSupplyPrice()) //materials().get
                .materialTotalInventoryPayments(materialInventoryDTO.getMaterialTotalInventoryPayments())
                .materialType(materialInventoryDTO.getMaterialType())
                .materialCode(materialInventoryDTO.getMaterialCode())
                .materialName(materialInventoryDTO.getMaterialName())
                .materialImage(MaterialImage.builder().materialImgNo(materialInventoryDTO.getMaterialImageNo()).build())
                .materialInOutHistory(MaterialInOutHistory.builder().materialHistoryNo(materialInventoryDTO.getMaterialHistoryNo()).build())
                .employeeName(materialInventoryDTO.getEmployeeName())
                .build();

        return materialInventory;
    }

    default MaterialInventoryDTO entityToDtoInventory(MaterialInventory materialInventory) {

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialInventoryNo(materialInventory.getMaterialInventoryNo())
                .materialIncomingNo(materialInventory.getMaterialIncomingNo())
                .materialNo(materialInventory.getMaterials().getMaterialNo())   //어디서 가져오는지 확인할것
                .materialIncomingQuantity(materialInventory.getMaterialIncomingQuantity())
                .materialOutgoingQuantity(materialInventory.getMaterialOutgoingQuantity())
                .materialStock(materialInventory.getMaterialStock())
                .materialSupplyPrice(materialInventory.getMaterials().getMaterialSupplyPrice())
                .materialTotalInventoryPayments(materialInventory.getMaterialTotalInventoryPayments())
                .materialType(materialInventory.getMaterials().getMaterialType())
                .materialName(materialInventory.getMaterials().getMaterialName())
                .materialCode(materialInventory.getMaterials().getMaterialCode())
                .materialImageNo(materialInventory.getMaterialImage().getMaterialImgNo())
//                .materialHistoryNo(materialInventory.getMaterialInOutHistory().getMaterialHistoryNo())
//                .employeeName(materialInventory.getMaterialInOutHistory().getEmployeeName())
                .build();

        return materialInventoryDTO;
    }

    //재고>입고관리 관련 dtoToEntity, entityToDto
    default MaterialInventory dtoToEntityIncoming(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = MaterialInventory.builder()
                .materialInventoryNo(materialInventoryDTO.getMaterialInventoryNo())
                .materialIncomingNo(materialInventoryDTO.getMaterialIncomingNo())
                .order(Order.builder().orderNo(materialInventoryDTO.getOrderNo()).build())
                .orderCode(materialInventoryDTO.getOrderCode())
                .materialName(materialInventoryDTO.getMaterialName())
                .materialCode(materialInventoryDTO.getMaterialCode())
                .materialType(materialInventoryDTO.getMaterialType())
                .materialSupplyPrice(materialInventoryDTO.getMaterialSupplyPrice())
                .materialIncomingQuantity(materialInventoryDTO.getMaterialIncomingQuantity())   //입고수량?발주수량?
                .employeeName(materialInventoryDTO.getEmployeeName())   //(발주)담당자
                .orderState(materialInventoryDTO.getOrderState())
                .build();

        return materialInventory;
    }

    default MaterialInventoryDTO entityToDtoIncoming(MaterialInventory materialInventory) {

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialInventoryNo(materialInventory.getMaterialInventoryNo())
                .materialIncomingNo(materialInventory.getMaterialIncomingNo())
                .orderNo(materialInventory.getOrder().getOrderNo())
                .materialName(materialInventory.getOrder().getMaterialName())
                .materialIncomingQuantity(materialInventory.getMaterialIncomingQuantity())
                .employeeName(materialInventory.getOrder().getEmployeeName())
                .orderState(materialInventory.getOrder().getOrderState())
                .materialCode(materialInventory.getOrder().getMaterialProcurementContract().getMaterialCode())
                .materialType(materialInventory.getMaterialType())
                .materialSupplyPrice(materialInventory.getOrder().getMaterialProcurementContract().getMaterialSupplyPrice())
                .materialIncomingQuantity(materialInventory.getMaterialIncomingQuantity())
                .build();

        return materialInventoryDTO;
    }

}
