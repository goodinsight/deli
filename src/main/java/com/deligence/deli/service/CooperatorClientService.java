package com.deligence.deli.service;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.dto.CooperatorClientDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface CooperatorClientService {

    int register(CooperatorClientDTO cooperatorClientDTO); //등록

    CooperatorClientDTO read(int clientNo); //조회

    void modify(CooperatorClientDTO cooperatorClientDTO); //수정

    void delete(int clientNo);

    PageResponseDTO<CooperatorClientDTO> list(PageRequestDTO pageRequestDTO); //목록 전체조회 + 검색

    default CooperatorClient dtoToEntity(CooperatorClientDTO cooperatorClientDTO) {

        CooperatorClient cooperatorClient = CooperatorClient.builder()
                .clientNo(cooperatorClientDTO.getClientNo())
                .corporateRegistrationNo(cooperatorClientDTO.getCorporateRegistrationNo())
                .clientCeo(cooperatorClientDTO.getClientCeo())
                .clientEmail(cooperatorClientDTO.getClientEmail())
                .clientName(cooperatorClientDTO.getClientName())
                .clientPhone(cooperatorClientDTO.getClientPhone())
                .clientAddress(cooperatorClientDTO.getClientAddress())
                .clientStatus(cooperatorClientDTO.getClientStatus())
                .clientEtc(cooperatorClientDTO.getClientEtc())
                .build();

        return cooperatorClient;
    }

    default CooperatorClientDTO entityToDto(CooperatorClient cooperatorClient) {

        CooperatorClientDTO cooperatorClientDTO = CooperatorClientDTO.builder()
                .clientNo(cooperatorClient.getClientNo())
                .corporateRegistrationNo(cooperatorClient.getCorporateRegistrationNo())
                .clientCeo(cooperatorClient.getClientCeo())
                .clientEmail(cooperatorClient.getClientEmail())
                .clientName(cooperatorClient.getClientName())
                .clientPhone(cooperatorClient.getClientPhone())
                .clientAddress(cooperatorClient.getClientAddress())
                .clientStatus(cooperatorClient.getClientStatus())
                .clientEtc(cooperatorClient.getClientEtc())
                .build();

        return cooperatorClientDTO;
    }
}
