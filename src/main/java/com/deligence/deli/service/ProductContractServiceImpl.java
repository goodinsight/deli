package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.ProductContractRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
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
public class ProductContractServiceImpl implements ProductContractService{

    private final ProductContractRepository productContractRepository;

    @Override
    public int register(ProductContractDTO productContractDTO) {

        log.info(productContractDTO);

        //dto -> entity
        ProductContract productContract = dtoToEntity(productContractDTO);

        log.info(productContract);

        int productContractNo = productContractRepository.save(productContract).getProductContractNo();

        log.info(productContractNo);

        return productContractNo;

    }

    @Override
    public ProductContractDetailDTO read(int productContractNo) {

        ProductContractDetailDTO result = productContractRepository.read(productContractNo);

        return result;
    }

    @Override
    public void modify(ProductContractDTO productContractDTO) {

        Optional<ProductContract> result = productContractRepository.findById(productContractDTO.getProductContractNo());

        ProductContract productContract = result.orElseThrow();

        productContract.change(productContractDTO);

        productContractRepository.save(productContract);

    }

    @Override
    public void remove(int productContractNo) {

        productContractRepository.deleteById(productContractNo);

    }

    @Override
    public PageResponseDTO<ProductContractDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<ProductContract> result = productContractRepository.search(types, keyword, pageable);

        List<ProductContractDTO> dtoList = result.getContent().stream()
                .map(productContract -> entityToDto(productContract))
                .collect(Collectors.toList());

        return PageResponseDTO.<ProductContractDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();

    }

    //상태 조건 포함한 목록
    @Override
    public OrderPageResponseDTO<ProductContractDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO) {

        String[] types = orderPageRequestDTO.getTypes();
        String keyword = orderPageRequestDTO.getKeyword();
        String state = orderPageRequestDTO.getState();
        Pageable pageable = orderPageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<ProductContract> result = productContractRepository.searchWithState(types, keyword, state, pageable);

        List<ProductContractDTO> dtoList = result.getContent().stream()
                .map(productContract -> entityToDto(productContract))
                .collect(Collectors.toList());

        return OrderPageResponseDTO.<ProductContractDTO>withAll()
                .orderPageRequestDTO(orderPageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) {

        int num = productContractRepository.getCodeCount(code);

        return num;
    }


    //상태(검색조건)변경
    @Override
    public void changeState(int productContractNo, String state) {

        Optional<ProductContract> result = productContractRepository.findById(productContractNo);

        ProductContract productContract = result.orElseThrow();

        productContract.changeState(state);

        productContractRepository.save(productContract);

    }

}
