package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialProcurementPlanningRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
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

//    private final ModelMapper modelMapper;

    private final MaterialProcurementPlanningRepository materialProcurementPlanningRepository;

    @Override  //등록
    public int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

//        log.info("register start");

        log.info(materialProcurementPlanningDTO);

//        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);

        //dto -> entity
        MaterialProcurementPlanning materialProcurementPlanning = dtoToEntity(materialProcurementPlanningDTO);

        log.info(materialProcurementPlanning);

        int materialProcurementPlanNo = materialProcurementPlanningRepository
                .save(materialProcurementPlanning).getMaterialProcurementPlanNo();

        log.info(materialProcurementPlanNo);

        return materialProcurementPlanNo;

    }

    @Override //조회
    public MaterialProcurementPlanningDetailDTO read(int materialProcurementPlanNo) {

        MaterialProcurementPlanningDetailDTO result =
                materialProcurementPlanningRepository.read(materialProcurementPlanNo);

        return result;

    }

    @Override //수정
    public void modify(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(
                        materialProcurementPlanningDTO.getMaterialProcurementPlanNo());

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        materialProcurementPlanning.change(materialProcurementPlanningDTO);

        //추후 자재조달계획 수정에 따라 다른 영역에 관련된 수정 사항이 있으면 여기에 추가


        //------------------------------------------------------------------

        materialProcurementPlanningRepository.save(materialProcurementPlanning);

    }

    @Override   //삭제
    public void remove(int materialProcurementPlanNo) {

        materialProcurementPlanningRepository.deleteById(materialProcurementPlanNo);
    }

    @Override   //목록, 검색
    public PageResponseDTO<MaterialProcurementPlanningDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();
//        Pageable pageable = pageRequestDTO.getPageable("materialProcurementPlanNo");
        //속성 넣으면 SearchImpl의 searchAll() paging 부분 오류남.

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.searchAll(types, keyword, pageable);

        List<MaterialProcurementPlanningDTO> dtoList = result.getContent().stream()
                .map(materialProcurementPlanning -> entityToDto(materialProcurementPlanning))
//                .map(materialProcurementPlanning -> modelMapper
//                        .map(MaterialProcurementPlanning, MaterialProcurementPlanningDetailDTO.class))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialProcurementPlanningDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) {

        int num = materialProcurementPlanningRepository.getCodeCount(code);

        return num;
    }
}
