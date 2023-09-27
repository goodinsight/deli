package com.deligence.deli.service;

import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
import com.deligence.deli.dto.ProductionPlanningDetailDTO;

public interface ProductionPlanningService {

    int register(ProductionPlanningDTO productionPlanningDTO);

    ProductionPlanningDetailDTO read(int productionPlanNo);

    void modify(ProductionPlanningDTO productionPlanningDTO);

    void remove(int productionPlanNo);

    PageResponseDTO<ProductionPlanningDTO> list(PageRequestDTO pageRequestDTO);

    int getCodeCount(String productionPlanCode);


    default ProductionPlanning dtoToEntity(ProductionPlanningDTO productionPlanningDTO) {

        ProductionPlanning productionPlanning = ProductionPlanning.builder()
                .productionPlanNo(productionPlanningDTO.getProductionPlanNo())
                .productionPlanCode(productionPlanningDTO.getProductionPlanCode())
                .productionQuantity(productionPlanningDTO.getProductionQuantity())
                .productionRequirementsDate(productionPlanningDTO.getProductionRequirementsDate())
                .productionRequirementsProcess(productionPlanningDTO.getProductionRequirementsProcess())
                .productionDeliveryDate(productionPlanningDTO.getProductionDeliveryDate())
                .detailExplaination(productionPlanningDTO.getDetailExplaination())
                .productContract(ProductContract.builder().productContractNo(productionPlanningDTO.getProductContractNo()).build())
                .productCode(productionPlanningDTO.getProductCode())
                .productDeliveryDate(productionPlanningDTO.getProductDeliveryDate())
                .clientName(productionPlanningDTO.getClientName())
                .clientStatus(productionPlanningDTO.getClientStatus())
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
//                .productContractNo(productionPlanning.getProductContract().getProductContractNo())
//                .productCode(productionPlanning.getProductContract().getProductCode())
//                .productDeliveryDate(productionPlanning.getProductContract().getProductDeliveryDate())
//                .clientName(productionPlanning.getProductContract().getClientName())
//                .clientStatus(productionPlanning.getProductContract().getClientStatus())
                .regDate(productionPlanning.getRegDate())
                .modDate(productionPlanning.getModDate())
                .build();

        return productionPlanningDTO;
    }
}
