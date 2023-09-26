package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialInventoryRepository;
import com.deligence.deli.repository.OrderRepository;
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
//@Transactional
public class MaterialInventoryServiceImpl implements MaterialInventoryService {

    private final MaterialInventoryRepository materialInventoryRepository;

    @Override
    public int stockRegister(MaterialInventoryDTO materialInventoryDTO) {

        log.info(materialInventoryDTO);

        //dto -> entity
        MaterialInventory materialInventory = dtoToEntity(materialInventoryDTO);

        log.info(materialInventory);

        int materialInventoryNo = materialInventoryRepository.save(materialInventory).getMaterialInventoryNo();

        log.info(materialInventoryNo);

        return materialInventoryNo;
    }

    @Override
    public MaterialInventoryDetailDTO stockRead(int materialInventoryNo) {

        MaterialInventoryDetailDTO result = materialInventoryRepository.readInventory(materialInventoryNo);

        return result;

    }

    @Override
    public void stockModify(MaterialInventoryDTO materialInventoryDTO) {

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryDTO.getMaterialInventoryNo());

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(materialInventoryDTO);

        materialInventoryRepository.save(materialInventory);

    }

    @Override
    public void remove(int materialInventoryNo) {

        materialInventoryRepository.deleteById(materialInventoryNo);

    }

    // 자재 리스트 출력


    @Override
    public PageResponseDTO<MaterialInventoryDTO> stockList(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<MaterialInventory> result = materialInventoryRepository.searchInventory(types, keyword, pageable);

        List<MaterialInventoryDTO> dtoList = result.getContent().stream()
                .map(materialInventory -> entityToDto(materialInventory))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialInventoryDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }
}










