package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.QOrder;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialProcurementPlanningRepository;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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

    private final MaterialProcurementPlanningRepository materialProcurementPlanningRepository;

    @Override  //등록
    public int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO) {

//        log.info("register start");

        log.info(materialProcurementPlanningDTO);

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


        materialProcurementPlanningRepository.save(materialProcurementPlanning);

    }

    @Override
    public void changeState(int materialProcurementPlanNo, String state) {

        Optional<MaterialProcurementPlanning> result = materialProcurementPlanningRepository.findById(materialProcurementPlanNo);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        materialProcurementPlanning.changeState(state);

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
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialProcurementPlanningDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public PageResponseDTO<MaterialProcurementPlanningDTO> listByState(String[] keywords, PageRequestDTO pageRequestDTO) {

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.searchByState(keywords, pageRequestDTO.getPageable());

        List<MaterialProcurementPlanningDTO> dtoList = result.getContent().stream()
                .map(materialProcurementPlanning -> entityToDto(materialProcurementPlanning))
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


    //조달계획상세(연관발주목록)

    @Override
    public PageResponseDTO<OrderDTO> orderList(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO) {

        Pageable pageable = pageRequestDTO.getPageable();

        Page<Order> result = materialProcurementPlanningRepository.orderList(materialProcurementPlanNo, pageable);

        List<OrderDTO> dtoList = result.getContent().stream()
                .map(order -> entityToDto(order))
                .collect(Collectors.toList());

        return PageResponseDTO.<OrderDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();

    }

    @Override
    public void completePlan(int materialProcurementPlanNo) {

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(materialProcurementPlanNo);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        materialProcurementPlanning.changeState("계획완료");

        materialProcurementPlanningRepository.save(materialProcurementPlanning);

    }


}
