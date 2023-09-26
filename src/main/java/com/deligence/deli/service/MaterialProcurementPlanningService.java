package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

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


    void completePlan(int materialProcurementPlanNo);


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
                .materialCode(materialProcurementPlanning.getMaterialCode())
                .materialName(materialProcurementPlanning.getMaterialName())
                .build();

        return materialProcurementPlanningDTO;

    }

}
