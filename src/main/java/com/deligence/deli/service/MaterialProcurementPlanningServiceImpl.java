package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.MaterialProcurementPlanningRepository;
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
public class MaterialProcurementPlanningServiceImpl implements MaterialProcurementPlanningService{

    private final ModelMapper modelMapper;

    private final MaterialProcurementPlanningRepository materialProcurementPlanningRepository;

    @Override  //등록
    public int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        MaterialProcurementPlanning materialProcurementPlanning
                = modelMapper.map(materialProcurementPlanningDTO, MaterialProcurementPlanning.class);

        int material_procurement_plan_no
                = materialProcurementPlanningRepository
                .save(materialProcurementPlanning)
                .getMaterial_procurement_plan_no();

        return material_procurement_plan_no;

    }

    @Override //조회
    public MaterialProcurementPlanningDTO readOne(int material_procurement_plan_no) {

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(material_procurement_plan_no);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                modelMapper.map(materialProcurementPlanning, MaterialProcurementPlanningDTO.class);

        return materialProcurementPlanningDTO;
    }

    @Override //수정
    public void modify(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(
                        materialProcurementPlanningDTO.getMaterial_procurement_plan_no());

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        materialProcurementPlanning.change(
                materialProcurementPlanningDTO.getProcurement_delivery_date(),      //납기일 수정
                materialProcurementPlanningDTO.getMaterial_requirements_count(),    //자재소요량 수정
                materialProcurementPlanningDTO.getMaterial_procurement_state());    //자재조달상태 수정

        materialProcurementPlanningRepository.save(materialProcurementPlanning);
    }

    @Override   //삭제
    public void remove(int material_procurement_plan_no) {

        materialProcurementPlanningRepository.deleteById(material_procurement_plan_no);
    }

    @Override   //목록, 검색
    public PageResponseDTO<MaterialProcurementPlanningDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("material_procurement_plan_no");

        Page<MaterialProcurementPlanning> result =
//                materialProcurementPlanningRepository.searchAll(types, keyword, pageable);
                materialProcurementPlanningRepository.searchAll(types, keyword, pageable);

        List<MaterialProcurementPlanningDTO> dtoList =
                result.getContent().stream().map(materialProcurementPlanning ->
                        modelMapper.map(materialProcurementPlanning,
                                MaterialProcurementPlanningDTO.class)).collect(Collectors.toList());

        return PageResponseDTO.<MaterialProcurementPlanningDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();
    }
}
