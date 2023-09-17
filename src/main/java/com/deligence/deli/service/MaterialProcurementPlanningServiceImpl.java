package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.repository.MaterialProcurementPlanningRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class MaterialProcurementPlanningServiceImpl implements MaterialProcurementPlanningService{

    private final ModelMapper modelMapper;

    private final MaterialProcurementPlanningRepository materialProcurementPlanningRepository;

    @Override
    public int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        MaterialProcurementPlanning materialProcurementPlanning
                = modelMapper.map(materialProcurementPlanningDTO, MaterialProcurementPlanning.class);

        int material_procurement_plan_no
                = materialProcurementPlanningRepository
                .save(materialProcurementPlanning)
                .getMaterial_procurement_plan_no();

        return material_procurement_plan_no;


    }
}
