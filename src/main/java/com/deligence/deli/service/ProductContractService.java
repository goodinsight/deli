package com.deligence.deli.service;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.*;

public interface ProductContractService {

    int register(ProductContractDTO productContractDTO);

    ProductContractDetailDTO read(int productContractNo);

    void modify(ProductContractDTO productContractDTO);

    void remove(int productContractNo);

    PageResponseDTO<ProductContractDTO> list(PageRequestDTO pageRequestDTO);

    //상태조건 추가한 목록
    OrderPageResponseDTO<ProductContractDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO);

    int getCodeCount(String productContractCode);

    void changeState(int productContractNo, String state);

    default ProductContract dtoToEntity(ProductContractDTO productContractDTO) {

        ProductContract productContract = ProductContract.builder()
                .productContractNo(productContractDTO.getProductContractNo())
                .productContractCode(productContractDTO.getProductContractCode())
                .products(Products.builder().productNo(productContractDTO.getProductNo()).build())
                .productCode(productContractDTO.getProductCode())
                .productQuantity(productContractDTO.getProductQuantity())
                .productContractDate(productContractDTO.getProductContractDate())
                .productDeliveryDate(productContractDTO.getProductDeliveryDate())
                .productQuotation(productContractDTO.getProductQuotation())
                .productContractState(productContractDTO.getProductContractState())
                .cooperatorClient(CooperatorClient.builder().clientNo(productContractDTO.getClientNo()).build())
                .clientName(productContractDTO.getClientName())
                .clientStatus(productContractDTO.getClientStatus())
                .employee(Employee.builder().employeeNo(productContractDTO.getEmployeeNo()).build())
                .employeeName(productContractDTO.getEmployeeName())
                .documentFile(DocumentFile.builder().documentFileNo(productContractDTO.getDocumentFileNo()).build())
                .build();

        return productContract;
    }

    default ProductContractDTO entityToDto(ProductContract productContract) {

        ProductContractDTO productContractDTO = ProductContractDTO.builder()
                .productContractNo(productContract.getProductContractNo())
                .productContractCode(productContract.getProductContractCode())
                .productNo(productContract.getProducts().getProductNo())
                .productCode(productContract.getProducts().getProductCode())
//                .productCode(productContract.getProductCode())
                .productQuantity(productContract.getProductQuantity())
                .productContractDate(productContract.getProductContractDate())
                .productDeliveryDate(productContract.getProductDeliveryDate())
                .productQuotation(productContract.getProductQuotation())
                .productContractState(productContract.getProductContractState())
                .clientNo(productContract.getCooperatorClient().getClientNo())
                .clientName(productContract.getCooperatorClient().getClientName())
//                .clientName(productContract.getClientName())
                .clientStatus(productContract.getCooperatorClient().getClientStatus())
//                .clientStatus(productContract.getClientStatus())
                .employeeNo(productContract.getEmployee().getEmployeeNo())
                .employeeName(productContract.getEmployeeName())
                .documentFileNo(productContract.getDocumentFile().getDocumentFileNo())
                .build();

        return productContractDTO;

    }

}