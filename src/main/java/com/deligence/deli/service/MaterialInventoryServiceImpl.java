package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.repository.MaterialInventoryRepository;
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
public class MaterialInventoryServiceImpl implements MaterialInventoryService {

    private final ModelMapper modelMapper;

    private final MaterialInventoryRepository materialInventoryRepository;

    @Override
    public MaterialInventoryDTO materialInventorylistOne(Long material_no) {

        Optional<MaterialInventory> result = materialInventoryRepository.findById(material_no);

        MaterialInventory materialInventory = result.orElseThrow();

        MaterialInventoryDTO materialInventoryDTO = modelMapper.map(materialInventory, MaterialInventoryDTO.class);

        return materialInventoryDTO;
    }
}
