package com.deligence.deli.service;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.dto.BoardDTO;
import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

import java.util.List;
import java.util.stream.Collectors;

public interface MaterialProcurementPlanningService {

    //등록
    int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO);

    //조회
    MaterialProcurementPlanningDTO read(int materialProcurementPlanNo);


    //수정
    void modify(MaterialProcurementPlanningDTO materialProcurementPlanningDTO);

    //삭제
    void remove(int materialProcurementPlanNo);

    //목록,검색
    PageResponseDTO<MaterialProcurementPlanningDTO> list(PageRequestDTO pageRequestDTO);


    default MaterialProcurementPlanning dtoToEntity(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        MaterialProcurementPlanning materialProcurementPlanning = MaterialProcurementPlanning.builder()
                .materialProcurementPlanNo(materialProcurementPlanningDTO.getMaterialProcurementPlanNo())
                .procurementDeliveryDate(materialProcurementPlanningDTO.getProcurementDeliveryDate())
                .materialRequirementsCount(materialProcurementPlanningDTO.getMaterialRequirementsCount())
                .materialProcurementState(materialProcurementPlanningDTO.getMaterialProcurementState())
                .materials(materialProcurementPlanningDTO.getMaterials())
//                .productionPlanning(materialProcurementPlanningDTO.getProductionPlanning().getProductionPlanNo())
                .employee(materialProcurementPlanningDTO.getEmployee())
                .materialCode(materialProcurementPlanningDTO.getMaterialCode())
                .materialName(materialProcurementPlanningDTO.getMaterialName())
                .build();

        return materialProcurementPlanning;
    }

    default MaterialProcurementPlanningDTO entityToDTO(MaterialProcurementPlanning materialProcurementPlanning) {

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO = MaterialProcurementPlanningDTO.builder()

                .materialProcurementPlanNo(materialProcurementPlanning.getMaterialProcurementPlanNo())
                .modDate(materialProcurementPlanning.getModDate())
                .regDate(materialProcurementPlanning.getRegDate())
                .procurementDeliveryDate(materialProcurementPlanning.getProcurementDeliveryDate())
                .materialRequirementsCount(materialProcurementPlanning.getMaterialRequirementsCount())
                .materialProcurementState(materialProcurementPlanning.getMaterialProcurementState())
                .materials(materialProcurementPlanning.getMaterials())
//                .materialNo(materialProcurementPlanning.getMaterials().getMaterialNo())
                .productionPlanNo(materialProcurementPlanning.getProductionPlanning().getProductionPlanNo())
//                .employeeName(materialProcurementPlanning.getEmployee().getEmployeeName())
                .employee(materialProcurementPlanning.getEmployee())
                .materialCode(materialProcurementPlanning.getMaterials().getMaterialCode())
                .materialName(materialProcurementPlanning.getMaterials().getMaterialName())
//                .materialType(materialProcurementPlanning.getMaterials().getMaterialType())
                .build();

//        List<String> fileNames = materialProcurementPlanning.getImageSet().stream().sorted().map(boardImage ->
//                boardImage.getUuid()+"_"+boardImage.getFileName()
//        ).collect(Collectors.toList());
//
//        boardDTO.setFileNames(fileNames);

        return materialProcurementPlanningDTO;

    }

}
