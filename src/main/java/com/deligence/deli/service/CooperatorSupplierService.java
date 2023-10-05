package com.deligence.deli.service;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.DocumentFile;
import com.deligence.deli.dto.*;

public interface CooperatorSupplierService {

    int register(CooperatorSupplierDTO cooperatorSupplierDTO);

    CooperatorSupplierDTO read(int supplierNo);

    void modify(CooperatorSupplierDTO cooperatorSupplierDTO);

    void remove(int supplierNo);

    PageResponseDTO<CooperatorSupplierDTO> list(PageRequestDTO pageRequestDTO);

    OrderPageResponseDTO<CooperatorSupplierDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO);

    //상태 변경
    void changState(int supplierNo, String state);

    default CooperatorSupplier dtoToEntity(CooperatorSupplierDTO cooperatorSupplierDTO) {

        CooperatorSupplier cooperatorSupplier = CooperatorSupplier.builder()
                .supplierNo(cooperatorSupplierDTO.getSupplierNo())
                .corporateRegistrationNo(cooperatorSupplierDTO.getCorporateRegistrationNo())
                .supplierCeo(cooperatorSupplierDTO.getSupplierCeo())
                .supplierEmail(cooperatorSupplierDTO.getSupplierEmail())
                .supplierName(cooperatorSupplierDTO.getSupplierName())
                .supplierPhone(cooperatorSupplierDTO.getSupplierPhone())
                .supplierAddress(cooperatorSupplierDTO.getSupplierAddress())
                .supplierStatus(cooperatorSupplierDTO.getSupplierStatus())
                .supplierEtc(cooperatorSupplierDTO.getSupplierEtc())
//                .documentFile(DocumentFile.builder().documentFileNo(cooperatorSupplierDTO.getDocumentFileNo()).build())
                .build();

        return cooperatorSupplier;
    }

    default CooperatorSupplierDTO entityToDto(CooperatorSupplier cooperatorSupplier) {

        CooperatorSupplierDTO cooperatorSupplierDTO = CooperatorSupplierDTO.builder()
                .supplierNo(cooperatorSupplier.getSupplierNo())
                .corporateRegistrationNo(cooperatorSupplier.getCorporateRegistrationNo())
                .supplierCeo(cooperatorSupplier.getSupplierCeo())
                .supplierEmail(cooperatorSupplier.getSupplierEmail())
                .supplierName(cooperatorSupplier.getSupplierName())
                .supplierPhone(cooperatorSupplier.getSupplierPhone())
                .supplierAddress(cooperatorSupplier.getSupplierAddress())
                .supplierStatus(cooperatorSupplier.getSupplierStatus())
                .supplierEtc(cooperatorSupplier.getSupplierEtc())
//                .documentFileNo(cooperatorSupplier.getDocumentFile().getDocumentFileNo())
                .build();

        return cooperatorSupplierDTO;
    }
}
