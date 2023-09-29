package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

import java.util.List;

public interface ProductionPlanningService {

    int register(ProductionPlanningDTO productionPlanningDTO);

    ProductionPlanningDetailDTO read(int productionPlanNo);

    void modify(ProductionPlanningDTO productionPlanningDTO);

    void remove(int productionPlanNo);

    PageResponseDTO<ProductionPlanningDTO> list(PageRequestDTO pageRequestDTO);
    OrderPageResponseDTO<ProductionPlanningDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO);

    //생산계획 검색(상태)
    OrderPageResponseDTO<ProductionPlanningDTO> listProduction(OrderPageRequestDTO orderPageRequestDTO, String[] states);

    int getCodeCount(String productionPlanCode);

    //상태변경
    void changeState(int productionPlanNo, String state);

    default ProductionPlanning dtoToEntity(ProductionPlanningDTO productionPlanningDTO) {

        ProductionPlanning productionPlanning = ProductionPlanning.builder()
                .productionPlanNo(productionPlanningDTO.getProductionPlanNo())
                .productionPlanCode(productionPlanningDTO.getProductionPlanCode())
                .productionQuantity(productionPlanningDTO.getProductionQuantity())
                .productionRequirementsDate(productionPlanningDTO.getProductionRequirementsDate())
                .productionRequirementsProcess(productionPlanningDTO.getProductionRequirementsProcess())
                .productionDeliveryDate(productionPlanningDTO.getProductionDeliveryDate())
                .detailExplaination(productionPlanningDTO.getDetailExplaination())
                .productionState(productionPlanningDTO.getProductionState())
                .productContract(ProductContract.builder().productContractNo(productionPlanningDTO.getProductContractNo()).build())
                .productCode(productionPlanningDTO.getProductCode())
                .clientName(productionPlanningDTO.getClientName())
                .productDeliveryDate(productionPlanningDTO.getProductDeliveryDate())
                .clientStatus(productionPlanningDTO.getClientStatus())
                .materialRequirementsList(MaterialRequirementsList.builder().materialRequirementsListNo(productionPlanningDTO.getMaterialRequirementsListNo()).build())
                .employee(Employee.builder().employeeNo(productionPlanningDTO.getEmployeeNo()).build())
                .employeeName(productionPlanningDTO.getEmployeeName())      //제품계약담당자
                .employeeName2(productionPlanningDTO.getEmployeeName2())    //생산계획담당자
                .build();

        return productionPlanning;
    }

    default ProductionPlanningDTO entityToDto(ProductionPlanning productionPlanning) {

        ProductionPlanningDTO productionPlanningDTO = ProductionPlanningDTO.builder()
                .productionPlanNo(productionPlanning.getProductionPlanNo())
                .productionPlanCode(productionPlanning.getProductCode())
                .productionQuantity(productionPlanning.getProductionQuantity())
                .productionRequirementsDate(productionPlanning.getProductionRequirementsDate())
                .productionRequirementsProcess(productionPlanning.getProductionRequirementsProcess())
                .productionDeliveryDate(productionPlanning.getProductionDeliveryDate())
                .detailExplaination(productionPlanning.getDetailExplaination())
                .productionState(productionPlanning.getProductionState())
                .productContractNo(productionPlanning.getProductContract().getProductContractNo())
                .productCode(productionPlanning.getProductContract().getProductCode())
                .clientName(productionPlanning.getProductContract().getClientName())
                .productDeliveryDate(productionPlanning.getProductContract().getProductDeliveryDate())
                .clientStatus(productionPlanning.getProductContract().getClientStatus())
                .employeeName(productionPlanning.getProductContract().getEmployeeName())    //제품계약담당자
                .employeeNo(productionPlanning.getEmployee().getEmployeeNo())
                .employeeName2(productionPlanning.getEmployeeName())                         //생산계획담당자
                .materialRequirementsListNo(productionPlanning.getMaterialRequirementsList().getMaterialRequirementsListNo())
                .regDate(productionPlanning.getRegDate())
                .modDate(productionPlanning.getModDate())
                .build();

        return productionPlanningDTO;
    }

    //생산 계획 상세(연관 조달계획 목록)
    List<MaterialProcurementPlanningDTO> procurementPlanList(int productionPlanNo, PageRequestDTO pageRequestDTO);

    default MaterialProcurementPlanningDTO entityToDto2(MaterialProcurementPlanning materialProcurementPlanning) {

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO = MaterialProcurementPlanningDTO.builder()
                .materialProcurementPlanNo(materialProcurementPlanning.getMaterialProcurementPlanNo())
                .materialCode(materialProcurementPlanning.getMaterialCode())
                .materialName(materialProcurementPlanning.getMaterialName())
                //소요공정, 소요기간
                .materialRequirementsCount(materialProcurementPlanning.getMaterialRequirementsCount())  //소요량
                .procurementDeliveryDate(materialProcurementPlanning.getProcurementDeliveryDate())      //납기일
                .materialProcurementState(materialProcurementPlanning.getMaterialProcurementState())    //조달상태
                .build();

        return materialProcurementPlanningDTO;
    }

    //생산계획완료
    void completePlan(int productionPlanNo);
}
