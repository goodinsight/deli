package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialProcurementContractService {

    int register(MaterialProcurementContractDTO materialProcurementContractDTO);

    MaterialProcurementContractDetailDTO read(int materialProcurementContractNo);

    void modify(MaterialProcurementContractDTO materialProcurementContractDTO);

    void remove(int materialProcurementContractNo);

    PageResponseDTO<MaterialProcurementContractDTO> list(PageRequestDTO pageRequestDTO);

    int getCodeCount(String materialProcurementContractCode);

    //DTO To Entity
    default MaterialProcurementContract dtoToEntity(MaterialProcurementContractDTO materialProcurementContractDTO) {

        MaterialProcurementContract materialProcurementContract = MaterialProcurementContract.builder()
                .materialProcurementContractNo(materialProcurementContractDTO.getMaterialProcurementContractNo())
                .materialProcurementContractCode(materialProcurementContractDTO.getMaterialProcurementContractCode())
                .materialProcurementContractDate(materialProcurementContractDTO.getMaterialProcurementContractDate())
                .materialProcurementContractState(materialProcurementContractDTO.getMaterialProcurementContractState())
                .materialProcurementContractEtc(materialProcurementContractDTO.getMaterialProcurementContractEtc())
                .materials(Materials.builder().materialNo(materialProcurementContractDTO.getMaterialNo()).build())
                //추가 부분
                .materialProcurementPlanning(MaterialProcurementPlanning.builder().materialProcurementPlanNo(materialProcurementContractDTO.getMaterialProcurementPlanNo()).build())
                .materialProcurementPlanCode(materialProcurementContractDTO.getMaterialProcurementPlanCode())
                .materialCode(materialProcurementContractDTO.getMaterialCode())
                .materialName(materialProcurementContractDTO.getMaterialName())
                .materialSupplyPrice(materialProcurementContractDTO.getMaterialSupplyPrice())
                .procurementQuantity(materialProcurementContractDTO.getProcurementQuantity())
                .cooperatorSupplier(CooperatorSupplier.builder().supplierNo(materialProcurementContractDTO.getSupplierNo()).build())
                .supplierName(materialProcurementContractDTO.getSupplierName())
                .supplierStatus(materialProcurementContractDTO.getSupplierStatus())
                .employee(Employee.builder().employeeNo(materialProcurementContractDTO.getEmployeeNo()).build())
                .documentFile(DocumentFile.builder().documentFileNo(materialProcurementContractDTO.getDocumentFileNo()).build())
                .build();

        return materialProcurementContract;
    }

    //Entity To DTO
    default MaterialProcurementContractDTO entityToDto(MaterialProcurementContract materialProcurementContract) {

        MaterialProcurementContractDTO materialProcurementContractDTO = MaterialProcurementContractDTO.builder()
                .MaterialProcurementContractNo(materialProcurementContract.getMaterialProcurementContractNo())
                .materialProcurementContractCode(materialProcurementContract.getMaterialProcurementContractCode())
                .materialProcurementContractDate(materialProcurementContract.getMaterialProcurementContractDate())
                .materialProcurementContractState(materialProcurementContract.getMaterialProcurementContractState())
                .materialProcurementContractEtc(materialProcurementContract.getMaterialProcurementContractEtc())
                .materialNo(materialProcurementContract.getMaterials().getMaterialNo())
                //추가 부분
                .materialProcurementPlanNo(materialProcurementContract.getMaterialProcurementContractNo())
                .materialProcurementPlanCode(materialProcurementContract.getMaterialProcurementPlanCode())
                .materialCode(materialProcurementContract.getMaterialCode())
                .materialName(materialProcurementContract.getMaterialName())
                .materialSupplyPrice(materialProcurementContract.getMaterialSupplyPrice())
                .procurementQuantity(materialProcurementContract.getProcurementQuantity())
                .supplierNo(materialProcurementContract.getCooperatorSupplier().getSupplierNo())
                .supplierName(materialProcurementContract.getSupplierName())
                .supplierStatus(materialProcurementContract.getSupplierStatus())
                .employeeNo(materialProcurementContract.getEmployee().getEmployeeNo())
                .documentFileNo(materialProcurementContract.getDocumentFile().getDocumentFileNo())
                .build();

        return materialProcurementContractDTO;

    }
}
