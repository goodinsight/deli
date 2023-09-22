package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialInventoryRepository;
import com.deligence.deli.repository.MaterialsRepository;
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

    private final ModelMapper modelMapper;

    private final MaterialInventoryRepository materialInventoryRepository;

    @Override
    public int[] materialStockRegister(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = modelMapper.map(materialInventoryDTO, MaterialInventory.class);
        int materialInventoryNo = materialInventoryRepository.save(materialInventory).getMaterialInventoryNo();

        Optional<Order> order = materialInventoryRepository.findFristByOrderNo(materialInventoryDTO.getOrder().getOrderNo());
        Order order1 = modelMapper.map(order, Order.class);
        int orderNo = order1.getOrderNo();

        log.info("materialInventoryNo : "+materialInventoryNo);
        log.info("order : "+orderNo);

        return new int[]{materialInventoryNo, orderNo};

    }

    @Override
    public MaterialInventoryDTO materialStockListOne(int materialInventoryNo) {

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        MaterialInventoryDTO materialInventoryDTO = modelMapper.map(materialInventory, MaterialInventoryDTO.class);

        return materialInventoryDTO;
    }

    @Override
    public PageResponseDTO<MaterialInventoryDTO> materialStockList(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("materialInventoryNo");

        Page<MaterialInventory> result = materialInventoryRepository.materialStockList(types, keyword, pageable);

        List<MaterialInventoryDTO> dtoList = result.getContent().stream()
                .map(materialInventory -> modelMapper.map(materialInventory, MaterialInventoryDTO.class)).collect(Collectors.toList());

        return PageResponseDTO.<MaterialInventoryDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();

    }


}










