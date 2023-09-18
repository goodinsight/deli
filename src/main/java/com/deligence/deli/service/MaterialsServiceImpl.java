package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.repository.MaterialsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class MaterialsServiceImpl implements MaterialsService {

    private final ModelMapper modelMapper;

    private final MaterialsRepository materialsRepository;

    @Override
    public int register(MaterialsDTO materialsDTO){

        Materials materials = modelMapper.map(materialsDTO, Materials.class);

        int material_no = materialsRepository.save(materials).getMaterial_no();

        return material_no;
    }
}
