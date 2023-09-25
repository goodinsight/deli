package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
import com.deligence.deli.dto.ProductionPlanningDetailDTO;
import com.deligence.deli.repository.ProductionPlanningRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        return null;
    }

    @Override
    public void modify(ProductionPlanningDTO productionPlanningDTO) {

    }

    @Override
    public void remove(int productionPlanNo) {

    }

    @Override
    public PageResponseDTO<ProductionPlanningDTO> list(PageRequestDTO pageRequestDTO) {
        return null;
    }

    @Override
    public int getCodeCount(String productionPlanCode) {
        return 0;
    }
}
