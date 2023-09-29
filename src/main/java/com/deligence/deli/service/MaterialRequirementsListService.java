package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Products;
import com.deligence.deli.dto.MaterialRequirementsListDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface MaterialRequirementsListService {

    int register(MaterialRequirementsListDTO materialRequirementsListDTO);

    MaterialRequirementsListDTO read(int materialRequirementsListNo);

    void modify(MaterialRequirementsListDTO materialRequirementsListDTO);

    void remove(int materialRequirementsListNo);

    PageResponseDTO<MaterialRequirementsListDTO> list(PageRequestDTO pageRequestDTO);


    default MaterialRequirementsList dtoToEntity(MaterialRequirementsListDTO materialRequirementsListDTO) {

        MaterialRequirementsList materialRequirementsList = MaterialRequirementsList.builder()
                .materialRequirementsListNo(materialRequirementsListDTO.getMaterialRequirementsListNo())
                .products(Products.builder().productNo(materialRequirementsListDTO.getProductNo()).build())
                .materials(Materials.builder().materialNo(materialRequirementsListDTO.getMaterialNo()).build())
                .quantity(materialRequirementsListDTO.getQuantity())
                .productCode(materialRequirementsListDTO.getProductCode())
                .productName(materialRequirementsListDTO.getProductName())
                .materialCode(materialRequirementsListDTO.getMaterialCode())
                .materialName(materialRequirementsListDTO.getMaterialName())
                .materialType(materialRequirementsListDTO.getMaterialType())
                .build();

        return materialRequirementsList;
    }

    default MaterialRequirementsListDTO entityToDto(MaterialRequirementsList materialRequirementsList) {

        MaterialRequirementsListDTO materialRequirementsListDTO = MaterialRequirementsListDTO.builder()
                .materialRequirementsListNo(materialRequirementsList.getMaterialRequirementsListNo())
                .productNo(materialRequirementsList.getProducts().getProductNo())
                .materialNo(materialRequirementsList.getMaterials().getMaterialNo())
                .quantity(materialRequirementsList.getQuantity())
                .productCode(materialRequirementsList.getProducts().getProductCode())
                .productName(materialRequirementsList.getProducts().getProductName())
                .materialCode(materialRequirementsList.getMaterials().getMaterialCode())
                .materialName(materialRequirementsList.getMaterials().getMaterialName())
                .materialType(materialRequirementsList.getMaterials().getMaterialType())
                .build();

        return materialRequirementsListDTO;

    }
}
