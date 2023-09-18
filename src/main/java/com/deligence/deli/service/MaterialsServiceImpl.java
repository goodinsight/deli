package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.repository.MaterialsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

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
    public MaterialsDTO detail(int materialNo) { //조회 작업처리

        Optional<Materials> result = materialsRepository.findById(materialNo);

        Materials materials = result.orElseThrow();

        MaterialsDTO materialsDTO = modelMapper.map(materials, MaterialsDTO.class);

        return materialsDTO;
    }

    @Override
    public void modify(MaterialsDTO materialsDTO) { // 수정 작업처리

        Optional<Materials> result = materialsRepository.findById(materialsDTO.getMaterialNo());

        Materials materials = result.orElseThrow();

        materials.change(materialsDTO.getMaterialName(), materialsDTO.getMaterialType(), materialsDTO.getMaterialExplaination(), materialsDTO.getMaterialSupplyPrice());

        materialsRepository.save(materials);

    }

    @Override
    public void delete(int materialsNo) { //삭제 작업처리

        materialsRepository.deleteById(materialsNo);
    }


}
