package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.ProductionPlanningRepository;
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
public class ProductionPlanningServiceImpl implements ProductionPlanningService{

    private final ProductionPlanningRepository productionPlanningRepository;

    @Override
    public int register(ProductionPlanningDTO productionPlanningDTO) {

        log.info(productionPlanningDTO);

        //dto -> entity
        ProductionPlanning productionPlanning = dtoToEntity(productionPlanningDTO);

        log.info(productionPlanning);

        int productionPlanNo = productionPlanningRepository.save(productionPlanning).getProductionPlanNo();

        log.info(productionPlanNo);

        return productionPlanNo;


    }

    @Override
    public ProductionPlanningDetailDTO read(int productionPlanNo) {

        log.info("productionPlanNo : " + productionPlanNo);

//        Optional<ProductionPlanning> result = productionPlanningRepository.findById(productionPlanNo);

//        ProductionPlanning productionPlanning = result.orElseThrow();

//        ProductionPlanningDetailDTO productionPlanningDetailDTO = ProductionPlanningDetailDTO.builder()
//                .productionPlanNo(productionPlanning.getProductionPlanNo())
//                .productCode(productionPlanning.getProductCode())
//                .productName(productionPlanning.getproduct)
//                .build();

        ProductionPlanningDetailDTO result = productionPlanningRepository.read(productionPlanNo);

        log.info("result : " + result);

        return result;
    }

    @Override
    public void modify(ProductionPlanningDTO productionPlanningDTO) {

        Optional<ProductionPlanning> result = productionPlanningRepository.findById(productionPlanningDTO.getProductionPlanNo());

        ProductionPlanning productionPlanning = result.orElseThrow();

        productionPlanning.change(productionPlanningDTO);

        productionPlanningRepository.save(productionPlanning);

    }

    @Override
    public void remove(int productionPlanNo) {

        productionPlanningRepository.deleteById(productionPlanNo);

    }

    @Override
    public PageResponseDTO<ProductionPlanningDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<ProductionPlanning> result = productionPlanningRepository.search(types, keyword, pageable);

        log.info("result : " + result);

        List<ProductionPlanningDTO> dtoList = result.getContent().stream()
                .map(productionPlanning -> entityToDto(productionPlanning))
                .collect(Collectors.toList());

        log.info("dtoList : " +dtoList);

        return PageResponseDTO.<ProductionPlanningDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) {

        int num = productionPlanningRepository.getCodeCount(code);

        return num;

    }
}
