package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

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

    //코드생성
    int getCodeCount(String materialProcurementPlanCode);

    void changeState(int materialProcurementPlanNo, String state);

    PageResponseDTO<MaterialProcurementPlanningDTO> listByState(String[] keywords, PageRequestDTO pageRequestDTO);


    default MaterialProcurementPlanning dtoToEntity(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        MaterialProcurementPlanning materialProcurementPlanning = MaterialProcurementPlanning.builder()
                .materialProcurementPlanNo(materialProcurementPlanningDTO.getMaterialProcurementPlanNo())
                .materialProcurementPlanCode(materialProcurementPlanningDTO.getMaterialProcurementPlanCode())
                .procurementDeliveryDate(materialProcurementPlanningDTO.getProcurementDeliveryDate())
                .materialRequirementsCount(materialProcurementPlanningDTO.getMaterialRequirementsCount())
                .materialProcurementState(materialProcurementPlanningDTO.getMaterialProcurementState())
                .productionPlanning(ProductionPlanning.builder().productionPlanNo(materialProcurementPlanningDTO.getProductionPlanNo()).build())
                .materials(Materials.builder().materialNo(materialProcurementPlanningDTO.getMaterialNo()).build())
                .employee(Employee.builder().employeeNo(materialProcurementPlanningDTO.getEmployeeNo()).build())
                .employeeName(materialProcurementPlanningDTO.getEmployeeName())
                .materialCode(materialProcurementPlanningDTO.getMaterialCode())
                .materialName(materialProcurementPlanningDTO.getMaterialName())
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
                .materialNo(materialProcurementPlanning.getMaterials().getMaterialNo())
                .employeeNo(materialProcurementPlanning.getEmployee().getEmployeeNo())
                .employeeName(materialProcurementPlanning.getEmployeeName())
                .materialCode(materialProcurementPlanning.getMaterials().getMaterialCode())
                .materialName(materialProcurementPlanning.getMaterials().getMaterialName())
                .build();

        return materialProcurementPlanningDTO;

    }

    //조달 계획 상세(연관 발주 목록)
    PageResponseDTO<OrderDTO> orderList(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO);

    default OrderDTO entityToDto(Order order) {

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
