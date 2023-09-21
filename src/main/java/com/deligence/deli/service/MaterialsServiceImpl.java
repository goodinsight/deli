package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.MaterialsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class MaterialsServiceImpl implements MaterialsService {

    private final ModelMapper modelMapper;

    private final MaterialsRepository materialsRepository;

    @Override
    public int register(MaterialsDTO materialsDTO){ //등록 작업처리

        Materials materials = modelMapper.map(materialsDTO, Materials.class);

        int materialNo = materialsRepository.save(materials).getMaterialNo();

        return materialNo;
    }

    @Override
    public MaterialsDTO readOne(int materialNo) { //조회 작업처리

        Optional<Materials> result = materialsRepository.findById(materialNo);

        Materials materials = result.orElseThrow();

        MaterialsDTO materialsDTO = modelMapper.map(materials, MaterialsDTO.class);

        return materialsDTO;
    }

    @Override
    public void modify(MaterialsDTO materialsDTO) { // 수정 작업처리

        Optional<Materials> result = materialsRepository.findById(materialsDTO.getMaterialNo());

        Materials materials = result.orElseThrow();

        materials.change(materialsDTO.getMaterialName(), materialsDTO.getMaterialType(), materialsDTO.getMaterialExplaination(), materialsDTO.getMaterialSupplyPrice(),materialsDTO.getRegDate() ,materialsDTO.getModDate());

        materialsRepository.save(materials);

    }

    @Override
    public void delete(int materialNo) { //삭제 작업처리

        materialsRepository.deleteById(materialNo);
    }

    @Override
    public PageResponseDTO<MaterialsDTO> list(PageRequestDTO pageRequestDTO) { //전체조회 & 검색기능

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageble = pageRequestDTO.getPageable("materialNo");

        Page<Materials> result = materialsRepository.searchAll(types, keyword, pageble);

        List<MaterialsDTO> dtoList = result.getContent().stream()
                .map(materials -> modelMapper.map(materials, MaterialsDTO.class))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialsDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) { //자재코드생성

        int num = materialsRepository.getCodeCount(code);

        return num;
    }


}
