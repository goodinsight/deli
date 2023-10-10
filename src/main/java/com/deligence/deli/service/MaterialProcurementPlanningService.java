package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

import java.util.List;

public interface MaterialProcurementPlanningService {

    //등록
    int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO);

    //조회
    MaterialProcurementPlanningDetailDTO read(int materialProcurementPlanNo);

    //수정
    void modify(MaterialProcurementPlanningDTO materialProcurementPlanningDTO);

    //삭제
    void remove(int materialProcurementPlanNo);

    //목록,검색
    PageResponseDTO<MaterialProcurementPlanningDTO> list(PageRequestDTO pageRequestDTO);

    //상태 조건 검색
    OrderPageResponseDTO<MaterialProcurementPlanningDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO);

    //코드생성
    int getCodeCount(String materialProcurementPlanCode);

    //상태 변경
    void changeState(int materialProcurementPlanNo, String state);

    PageResponseDTO<MaterialProcurementPlanningDTO> listByState(String[] keywords, PageRequestDTO pageRequestDTO);


    void completePlan(int materialProcurementPlanNo);


    default MaterialProcurementPlanning dtoToEntity(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        MaterialProcurementPlanning materialProcurementPlanning = MaterialProcurementPlanning.builder()
                .materialProcurementPlanNo(materialProcurementPlanningDTO.getMaterialProcurementPlanNo())
                .materialProcurementPlanCode(materialProcurementPlanningDTO.getMaterialProcurementPlanCode())
                .procurementDeliveryDate(materialProcurementPlanningDTO.getProcurementDeliveryDate())
                .materialRequirementsCount(materialProcurementPlanningDTO.getMaterialRequirementsCount())
                .materialProcurementState(materialProcurementPlanningDTO.getMaterialProcurementState())
                .productionPlanning(ProductionPlanning.builder().productionPlanNo(materialProcurementPlanningDTO.getProductionPlanNo()).build())
                .productionPlanCode(materialProcurementPlanningDTO.getProductionPlanCode()) //생산계획코드
                .productionRequirementsDate(materialProcurementPlanningDTO.getProductionRequirementsDate())         //생산소요기간
                .productionRequirementsProcess(materialProcurementPlanningDTO.getProductionRequirementsProcess())   //생산소요공정
                .productionDeliveryDate(materialProcurementPlanningDTO.getProductionDeliveryDate()) //생산납기일
                .productionState(materialProcurementPlanningDTO.getProductionState())   //생산 진행 상태
                .materials(Materials.builder().materialNo(materialProcurementPlanningDTO.getMaterialNo()).build())
                .materialCode(materialProcurementPlanningDTO.getMaterialCode())
                .materialType(materialProcurementPlanningDTO.getMaterialType())
                .materialName(materialProcurementPlanningDTO.getMaterialName())
                .materialSupplyPrice(materialProcurementPlanningDTO.getMaterialSupplyPrice())
                .employee(Employee.builder().employeeNo(materialProcurementPlanningDTO.getEmployeeNo()).build())
                .employeeName(materialProcurementPlanningDTO.getEmployeeName())
                .build();

        return materialProcurementPlanning;
    }

    default MaterialProcurementPlanningDTO entityToDto(MaterialProcurementPlanning materialProcurementPlanning) {

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO = MaterialProcurementPlanningDTO.builder()
                .materialProcurementPlanNo(materialProcurementPlanning.getMaterialProcurementPlanNo())
                .materialProcurementPlanCode(materialProcurementPlanning.getMaterialProcurementPlanCode())
                .procurementDeliveryDate(materialProcurementPlanning.getProcurementDeliveryDate())
                .materialRequirementsCount(materialProcurementPlanning.getMaterialRequirementsCount())
                .materialProcurementState(materialProcurementPlanning.getMaterialProcurementState())
                .productionPlanNo(materialProcurementPlanning.getProductionPlanning().getProductionPlanNo())
                .productionPlanCode(materialProcurementPlanning.getProductionPlanning().getProductionPlanCode())
                .productionRequirementsDate(materialProcurementPlanning.getProductionPlanning().getProductionRequirementsDate())
                .productionRequirementsProcess(materialProcurementPlanning.getProductionPlanning().getProductionRequirementsProcess())
                .productionState(materialProcurementPlanning.getProductionPlanning().getProductionState())
                .materialNo(materialProcurementPlanning.getProductionPlanning().getMaterialRequirementsList().getMaterials().getMaterialNo())
//                .materialNo(materialProcurementPlanning.getMaterials().getMaterialNo())
                .materialCode(materialProcurementPlanning.getMaterialCode())
//                .materialCode(materialProcurementPlanning.getMaterials().getMaterialCode())
                .materialType(materialProcurementPlanning.getMaterialType())
                .materialName(materialProcurementPlanning.getMaterialName())
//                .materialName(materialProcurementPlanning.getMaterials().getMaterialName())
                .materialSupplyPrice(materialProcurementPlanning.getMaterialSupplyPrice())
                .employeeNo(materialProcurementPlanning.getEmployee().getEmployeeNo())
                .employeeName(materialProcurementPlanning.getEmployeeName())
//                .employeeName(materialProcurementPlanning.getEmployee().getEmployeeName())
                .build();

        return materialProcurementPlanningDTO;

    }

    //조달 계획 상세(연관 발주 목록)
    List<OrderDTO> orderList(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO);

    default OrderDTO entityToDto2(Order order) {

        OrderDTO orderDTO = OrderDTO.builder()
                .orderNo(order.getOrderNo())
                .orderCode(order.getOrderCode())
                .employeeName(order.getEmployeeName())
                .orderQuantity(order.getOrderQuantity())
                .orderDate(order.getOrderDate())
                .orderDeliveryDate(order.getOrderDeliveryDate())
                .orderState(order.getOrderState())
                .build();

        return orderDTO;
    }

}
