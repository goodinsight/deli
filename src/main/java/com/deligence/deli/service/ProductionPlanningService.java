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
                .productionPlanCode(productionPlanning.getProductionPlanCode())
                .productionQuantity(productionPlanning.getProductionQuantity())
                .productionRequirementsDate(productionPlanning.getProductionRequirementsDate())
                .productionRequirementsProcess(productionPlanning.getProductionRequirementsProcess())
                .productionDeliveryDate(productionPlanning.getProductionDeliveryDate())
                .detailExplaination(productionPlanning.getDetailExplaination())
                .productionState(productionPlanning.getProductionState())
                .productContractNo(productionPlanning.getProductContract().getProductContractNo())
                .productCode(productionPlanning.getProductCode())   //검색용
//                .productCode(productionPlanning.getProductContract().getProductCode())
//                .clientName(productionPlanning.getClientName()) //검색용
                .clientName(productionPlanning.getProductContract().getCooperatorClient().getClientName())
                .productDeliveryDate(productionPlanning.getProductDeliveryDate())   //검색용
//                .productDeliveryDate(productionPlanning.getProductContract().getProductDeliveryDate())
//                .clientStatus(productionPlanning.getClientStatus()) //검색용
                .clientStatus(productionPlanning.getProductContract().getCooperatorClient().getClientStatus())
//                .employeeName(productionPlanning.getEmployeeName())    //제품계약담당자
                .employeeName(productionPlanning.getProductContract().getEmployee().getEmployeeName())    //제품계약담당자
                .employeeNo(productionPlanning.getEmployee().getEmployeeNo())
                .employeeName2(productionPlanning.getEmployeeName2())                        //생산계획담당자
                .materialRequirementsListNo(productionPlanning.getMaterialRequirementsList().getMaterialRequirementsListNo())
                .regDate(productionPlanning.getRegDate())
                .modDate(productionPlanning.getModDate())
                .build();

        return productionPlanningDTO;
    }

    //생산 계획 상세(연관 조달계획 목록)
    List<MaterialProcurementPlanningDTO> procurementPlanList(int productionPlanNo, PageRequestDTO pageRequestDTO);
    List<MaterialProcurementPlanningDetailDTO> planList(int productionPlanNo, PageRequestDTO pageRequestDTO);

    default MaterialProcurementPlanningDTO entityToDto2(MaterialProcurementPlanning materialProcurementPlanning) {

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO = MaterialProcurementPlanningDTO.builder()
                .materialProcurementPlanNo(materialProcurementPlanning.getMaterialProcurementPlanNo())
                .materialCode(materialProcurementPlanning.getMaterialCode())
                .materialName(materialProcurementPlanning.getMaterialName())
                .productionRequirementsProcess(materialProcurementPlanning.getProductionPlanning().getProductionRequirementsProcess())  //소요공정
                .productionRequirementsDate(materialProcurementPlanning.getProductionPlanning().getProductionRequirementsDate())
                .materialRequirementsCount(materialProcurementPlanning.getMaterialRequirementsCount())  //소요량
                .procurementDeliveryDate(materialProcurementPlanning.getProcurementDeliveryDate())      //자재 조달 납기일
                .productionDeliveryDate(materialProcurementPlanning.getProductionPlanning().getProductionDeliveryDate())    //생산납기일
                .materialProcurementState(materialProcurementPlanning.getMaterialProcurementState())    //자재 조달 상태
                .productionState(materialProcurementPlanning.getProductionPlanning().getProductionState())  //생산 진행 상태
                .build();

        return materialProcurementPlanningDTO;
    }

    //사용불가
    default MaterialProcurementPlanningDetailDTO entityToDto3(MaterialProcurementPlanning materialProcurementPlanning) {

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO = MaterialProcurementPlanningDetailDTO.builder()
                .materialProcurementPlanNo(materialProcurementPlanning.getMaterialProcurementPlanNo())
                .materialCode(materialProcurementPlanning.getMaterialCode())        //자재 코드
                .materialName(materialProcurementPlanning.getMaterialName())        //자재 이름
                //생산 소요 공정
                .productionRequirementsProcess(materialProcurementPlanning.getProductionPlanning().getProductionRequirementsProcess())
                //생산 소요 기간
                .productionRequirementsDate(materialProcurementPlanning.getProductionPlanning().getProductionRequirementsDate())
                .materialRequirementsCount(materialProcurementPlanning.getMaterialRequirementsCount())      //소요량
                .procurementDeliveryDate(materialProcurementPlanning.getProcurementDeliveryDate())          //조달납기일
                //생산 납기일
                .productionDeliveryDate(materialProcurementPlanning.getProductionPlanning().getProductionDeliveryDate())
                .materialProcurementState(materialProcurementPlanning.getMaterialProcurementState())        //조달상태
                .productionState(materialProcurementPlanning.getProductionPlanning().getProductionState())  //생산진행상태
                .build();

        return materialProcurementPlanningDetailDTO;
    }

    //생산계획완료
    void completePlan(int productionPlanNo);
}
