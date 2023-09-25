package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialInventoryRepository;
import com.deligence.deli.repository.MaterialProcurementPlanningRepository;
import com.deligence.deli.repository.MaterialsRepository;
import com.deligence.deli.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
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

    private final OrderRepository orderRepository;

    private final MaterialProcurementPlanningRepository materialProcurementPlanningRepository;

    private final MaterialsRepository materialsRepository;



    // 자재 입고 상세보기
    @Override
    public OrderDetailDTO materialStockListOne(int orderNo) {

        Optional<Order> result = orderRepository.findById(orderNo);

        Order order = result.orElseThrow();

        log.info(order.getOrderNo());

        OrderDetailDTO orderDetailDTO = modelMapper.map(order, OrderDetailDTO.class);

        log.info("orderDetailDTO : " + orderDetailDTO);

        return orderDetailDTO;

    }


    // 자재 목록 수정
    @Override
    public int materialStockRegister(MaterialInventoryDTO materialInventoryDTO) {

        MaterialInventory materialInventory = modelMapper.map(materialInventoryDTO, MaterialInventory.class);
        int materialInventoryNo = materialInventoryRepository.save(materialInventory).getMaterialInventoryNo();

        log.info("materialInventoryNo : " + materialInventoryNo);

        return materialInventoryNo;

    }


    // 자재 입고 리스트 출력
    @Override
    public PageResponseDTO<OrderDTO> materialStockList(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("orderNo");

        Page<Order> result = orderRepository.search(types, keyword, pageable);

        List<OrderDTO> dtoList = result.getContent().stream()
                .map(order -> modelMapper.map(order, OrderDTO.class)).collect(Collectors.toList());

        return PageResponseDTO.<OrderDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();

    }


}










