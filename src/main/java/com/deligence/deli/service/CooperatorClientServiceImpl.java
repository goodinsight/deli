package com.deligence.deli.service;


import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.dto.CooperatorClientDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.CooperatorClientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

        log.info("clientNo : "+clientNo);

        return clientNo;
    }

    @Override
    public CooperatorClientDTO read(int clientNo) { //조회
        log.info("clientNo : "+clientNo);
        Optional<CooperatorClient> result = cooperatorClientRepository.findById(clientNo);

        CooperatorClient cooperatorClient = result.orElseThrow();

        CooperatorClientDTO cooperatorClientDTO = modelMapper.map(cooperatorClient, CooperatorClientDTO.class);

        return cooperatorClientDTO;
    }

    @Override
    public void modify(CooperatorClientDTO cooperatorClientDTO) { //수정

        Optional<CooperatorClient> result = cooperatorClientRepository.findById(cooperatorClientDTO.getClientNo());
        log.info("clientNo : "+cooperatorClientDTO.getClientNo());
        CooperatorClient cooperatorClient = result.orElseThrow();

        cooperatorClient.change(cooperatorClientDTO);

        cooperatorClientRepository.save(cooperatorClient);

    }

    @Override
    public void delete(int clientNo) { //삭제
        log.info("clientNo : "+clientNo);
        cooperatorClientRepository.deleteById(clientNo);

    }

    @Override
    public PageResponseDTO<CooperatorClientDTO> list(PageRequestDTO pageRequestDTO) { //목록전제조회 + 검색

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("clientNo");

        Page<CooperatorClient> result = cooperatorClientRepository.searchAll(types, keyword,pageable);

        List<CooperatorClientDTO> dtoList = result.getContent().stream()
                .map(cooperatorClient -> modelMapper.map(cooperatorClient, CooperatorClientDTO.class))
                .collect(Collectors.toList());

        return PageResponseDTO.<CooperatorClientDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }
}
