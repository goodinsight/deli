package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.dto.MaterialRequirementsListDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.MaterialRequirementsListRepository;
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
public class MaterialRequirementsListServiceImpl implements MaterialRequirementsListService{

    private final MaterialRequirementsListRepository materialRequirementsListRepository;

    @Override
    public int register(MaterialRequirementsListDTO materialRequirementsListDTO) {

        log.info(materialRequirementsListDTO);

        //dto -> entity
        MaterialRequirementsList materialRequirementsList = dtoToEntity(materialRequirementsListDTO);

        log.info(materialRequirementsList);

        int materialRequirementsListNo = materialRequirementsListRepository.save(materialRequirementsList).getMaterialRequirementsListNo();

        log.info(materialRequirementsListNo);

        return materialRequirementsListNo;
    }

//    @Override
//    public MaterialRequirementsListDTO read(int materialRequirementsListNo) {
//
//        MaterialRequirementsListDTO result = materialRequirementsListRepository.read(materialRequirementsListNo);
//
//        return result;
//    }
    @Override
    public MaterialRequirementsListDTO read(int materialRequirementsListNo) {

        Optional<MaterialRequirementsList> result = materialRequirementsListRepository.findById(materialRequirementsListNo);

        MaterialRequirementsList materialRequirementsList = result.orElseThrow();

        MaterialRequirementsListDTO materialRequirementsListDTO = entityToDto(materialRequirementsList);

        return materialRequirementsListDTO;
    }

    @Override
    public void modify(MaterialRequirementsListDTO materialRequirementsListDTO) {

        Optional<MaterialRequirementsList> result = materialRequirementsListRepository.findById(materialRequirementsListDTO.getMaterialRequirementsListNo());

        MaterialRequirementsList materialRequirementsList = result.orElseThrow();

        materialRequirementsList.change(materialRequirementsListDTO);

        materialRequirementsListRepository.save(materialRequirementsList);

    }

    @Override
    public void remove(int materialRequirementsListNo) {

        materialRequirementsListRepository.deleteById(materialRequirementsListNo);

    }

    @Override
    public PageResponseDTO<MaterialRequirementsListDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<MaterialRequirementsList> result = materialRequirementsListRepository.search(types, keyword, pageable);

        List<MaterialRequirementsListDTO> dtoList = result.getContent().stream()
                .map(materialRequirementsList -> entityToDto(materialRequirementsList))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialRequirementsListDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();

    }


}
