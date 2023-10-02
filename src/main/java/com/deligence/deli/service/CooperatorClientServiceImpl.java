package com.deligence.deli.service;


import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.dto.CooperatorClientDTO;
import com.deligence.deli.repository.CooperatorClientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class CooperatorClientServiceImpl implements CooperatorClientService {

    private final ModelMapper modelMapper;

    private final CooperatorClientRepository cooperatorClientRepository;

    @Override
    public int register(CooperatorClientDTO cooperatorClientDTO) { //등록(추가)

        CooperatorClient cooperatorClient = modelMapper.map(cooperatorClientDTO, CooperatorClient.class);

        int clientNo = cooperatorClientRepository.save(cooperatorClient).getClientNo();

        return clientNo;
    }
}
