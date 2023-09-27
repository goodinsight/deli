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
@Transactional
public class MaterialInventoryServiceImpl implements MaterialInventoryService {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    private final MaterialInventoryRepository materialInventoryRepository;

    //자재재고 register
    @Override
    public int registerInventory(MaterialInventoryDTO materialInventoryDTO) {

        log.info(materialInventoryDTO);

        //dto -> entity
        MaterialInventory materialInventory = dtoToEntityInventory(materialInventoryDTO);

        log.info("materialInventory : " + materialInventory);

        int materialInventoryNo = materialInventoryRepository.save(materialInventory).getMaterialInventoryNo();

        log.info("materialInventoryNo : " + materialInventoryNo);

        return materialInventoryNo;
    }


    //자재재고 read
    @Override
    public MaterialInventoryDetailDTO readInventory(int materialInventoryNo) {

        MaterialInventoryDetailDTO result = materialInventoryRepository.readInventory(materialInventoryNo);

        return result;
    }


    //자재재고 modify
    @Override
    public void modifyInventory(MaterialInventoryDTO materialInventoryDTO) {

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryDTO.getMaterialInventoryNo());

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(materialInventoryDTO);

        materialInventoryRepository.save(materialInventory);

    }


    //자재재고 remove
    @Override
    public void removeInventory(int materialInventoryNo) {

        materialInventoryRepository.deleteById(materialInventoryNo);
    }

    @Override
    public MaterialInventoryDTO readByMaterialCode(String materialCode) {

        MaterialInventoryDTO materialInventoryDTO = entityToDtoInventory(materialInventoryRepository.readByCode(materialCode));

        return materialInventoryDTO;
    }


    //자재재고 list
    @Override
    public PageResponseDTO<MaterialInventoryDTO> listInventory(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<MaterialInventory> result = materialInventoryRepository.searchInventory(types, keyword, pageable);

        List<MaterialInventoryDTO> dtoList = result.getContent().stream()
                .map(materialInventory -> entityToDtoInventory(materialInventory))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialInventoryDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }



}










