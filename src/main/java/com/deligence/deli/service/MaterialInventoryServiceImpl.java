package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.MaterialInventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public MaterialInventoryDTO materialInventorylistOne(int materialNo) {

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialNo);

        MaterialInventory materialInventory = result.orElseThrow();

        MaterialInventoryDTO materialInventoryDTO = modelMapper.map(materialInventory, MaterialInventoryDTO.class);

        return materialInventoryDTO;
    }

    @Override
    public PageResponseDTO<MaterialInventoryDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("materials.materialNo");

        Page<MaterialInventory> result = materialInventoryRepository.searchAll(types, keyword, pageable);
        
        return null;
    }
}
