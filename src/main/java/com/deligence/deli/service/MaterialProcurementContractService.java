package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface MaterialProcurementContractService {

    int register(MaterialProcurementContractDTO materialProcurementContractDTO);

    MaterialProcurementContractDetailDTO read(int materialProcurementContractNo);

    void modify(MaterialProcurementContractDTO materialProcurementContractDTO);

    void remove(int materialProcurementContractNo);

    PageResponseDTO<MaterialProcurementContractDTO> list(PageRequestDTO pageRequestDTO);

    OrderPageResponseDTO<MaterialProcurementContractDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO);

    int getCodeCount(String materialProcurementContractCode);

    void changeState(int materialProcurementContractNo, String state);

    OrderPageResponseDTO<MaterialProcurementContractDTO> listWithState2(OrderPageRequestDTO orderPageRequestDTO, String[] states);

    //DTO To Entity
    default MaterialProcurementContract dtoToEntity(MaterialProcurementContractDTO materialProcurementContractDTO) {

        MaterialProcurementContract materialProcurementContract = MaterialProcurementContract.builder()
                .materialProcurementContractNo(materialProcurementContractDTO.getMaterialProcurementContractNo())
                .materialProcurementContractCode(materialProcurementContractDTO.getMaterialProcurementContractCode())
                .materialProcurementContractDate(materialProcurementContractDTO.getMaterialProcurementContractDate())
                .materialProcurementContractState(materialProcurementContractDTO.getMaterialProcurementContractState())
                .materialProcurementContractEtc(materialProcurementContractDTO.getMaterialProcurementContractEtc())
                .procurementQuantity(materialProcurementContractDTO.getProcurementQuantity())
                //추가 부분
                .materialProcurementPlanning(MaterialProcurementPlanning.builder().materialProcurementPlanNo(materialProcurementContractDTO.getMaterialProcurementPlanNo()).build())
                .materialProcurementPlanCode(materialProcurementContractDTO.getMaterialProcurementPlanCode())
                //Code
//                .materialCode(String.valueOf(MaterialProcurementPlanning.builder().materialCode(materialProcurementContractDTO.getMaterialCode())))
                .materialCode(materialProcurementContractDTO.getMaterialCode())
                .materialName(materialProcurementContractDTO.getMaterialName())
                .materialSupplyPrice(materialProcurementContractDTO.getMaterialSupplyPrice())
                .cooperatorSupplier(CooperatorSupplier.builder().supplierNo(materialProcurementContractDTO.getSupplierNo()).build())
                .supplierName(materialProcurementContractDTO.getSupplierName())
                .supplierStatus(materialProcurementContractDTO.getSupplierStatus())
                .employee(Employee.builder().employeeNo(materialProcurementContractDTO.getEmployeeNo()).build())
                .employeeName(materialProcurementContractDTO.getEmployeeName())
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
                .procurementQuantity(materialProcurementContract.getProcurementQuantity())
                //추가 부분
                .materialProcurementPlanNo(materialProcurementContract.getMaterialProcurementPlanning().getMaterialProcurementPlanNo())
//                .materialProcurementPlanCode(materialProcurementContract.getMaterialProcurementPlanCode())
                .materialProcurementPlanCode(materialProcurementContract.getMaterialProcurementPlanning().getMaterialProcurementPlanCode())
//                .materialCode(materialProcurementContract.getMaterialCode())
                .materialCode(materialProcurementContract.getMaterialProcurementPlanning().getMaterials().getMaterialCode())
//                .materialName(materialProcurementContract.getMaterialName())
                .materialName(materialProcurementContract.getMaterialProcurementPlanning().getMaterials().getMaterialName())
//                .materialSupplyPrice(materialProcurementContract.getMaterialSupplyPrice())
                .materialSupplyPrice(materialProcurementContract.getMaterialProcurementPlanning().getMaterials().getMaterialSupplyPrice())
                .supplierNo(materialProcurementContract.getCooperatorSupplier().getSupplierNo())
//                .supplierName(materialProcurementContract.getSupplierName())
                .supplierName(materialProcurementContract.getCooperatorSupplier().getSupplierName())
                .supplierStatus(materialProcurementContract.getCooperatorSupplier().getSupplierStatus())
//                .supplierStatus(materialProcurementContract.getSupplierStatus())
                .employeeNo(materialProcurementContract.getEmployee().getEmployeeNo())
                .employeeName(materialProcurementContract.getEmployeeName())
                .documentFileNo(materialProcurementContract.getDocumentFile().getDocumentFileNo())
                .build();

        return materialProcurementContractDTO;

    }
}
