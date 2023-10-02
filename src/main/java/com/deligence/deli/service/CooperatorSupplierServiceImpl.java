package com.deligence.deli.service;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.CooperatorSupplierRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.PublicKey;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class CooperatorSupplierServiceImpl implements CooperatorSupplierService {

    private final CooperatorSupplierRepository cooperatorSupplierRepository;

    @Override
    public int register(CooperatorSupplierDTO cooperatorSupplierDTO) {

        log.info(cooperatorSupplierDTO);

        //dto -> entity
        CooperatorSupplier cooperatorSupplier = dtoToEntity(cooperatorSupplierDTO);

        log.info(cooperatorSupplier);

        int supplierNo = cooperatorSupplierRepository.save(cooperatorSupplier).getSupplierNo();

        log.info(supplierNo);

        return supplierNo;

    }

    @Override
    public CooperatorSupplierDTO read(int supplierNo) {

        Optional<CooperatorSupplier> result = cooperatorSupplierRepository.findById(supplierNo);

        CooperatorSupplier cooperatorSupplier = result.orElseThrow();

        CooperatorSupplierDTO cooperatorSupplierDTO = entityToDto(cooperatorSupplier);

        return cooperatorSupplierDTO;

    }

    @Override
    public void modify(CooperatorSupplierDTO cooperatorSupplierDTO) {

        Optional<CooperatorSupplier> result = cooperatorSupplierRepository.findById(cooperatorSupplierDTO.getSupplierNo());

        CooperatorSupplier cooperatorSupplier = result.orElseThrow();

        cooperatorSupplier.change(cooperatorSupplierDTO);

        cooperatorSupplierRepository.save(cooperatorSupplier);

    }

    @Override
    public void remove(int supplierNo) {

        cooperatorSupplierRepository.deleteById(supplierNo);

    }

    @Override
    public PageResponseDTO<CooperatorSupplierDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<CooperatorSupplier> result = cooperatorSupplierRepository.search(types, keyword, pageable);

        List<CooperatorSupplierDTO> dtoList = result.getContent().stream()
                .map(cooperatorSupplier -> entityToDto(cooperatorSupplier))
                .collect(Collectors.toList());

        return PageResponseDTO.<CooperatorSupplierDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();

    }

    @Override
    public OrderPageResponseDTO<CooperatorSupplierDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO) {

        String[] types = orderPageRequestDTO.getTypes();
        String keyword = orderPageRequestDTO.getKeyword();
        String state = orderPageRequestDTO.getState();
        Pageable pageable = orderPageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<CooperatorSupplier> result = cooperatorSupplierRepository.searchWithState(types, keyword, state, pageable);

        List<CooperatorSupplierDTO> dtoList = result.getContent().stream()
                .map(cooperatorSupplier -> entityToDto(cooperatorSupplier))
                .collect(Collectors.toList());

        return OrderPageResponseDTO.<CooperatorSupplierDTO>withAll()
                .orderPageRequestDTO(orderPageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();

    }

    @Override
    public void changState(int supplierNo, String state) {

        Optional<CooperatorSupplier> result = cooperatorSupplierRepository.findById(supplierNo);

        CooperatorSupplier cooperatorSupplier = result.orElseThrow();

        cooperatorSupplier.changeState(state);

        cooperatorSupplierRepository.save(cooperatorSupplier);

    }
}
