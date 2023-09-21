package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.OrderDetailDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.OrderRepository;
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
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;

    @Override
    public int register(OrderDTO orderDTO) {

        log.info(orderDTO);

        //dto -> entity
        Order order = dtoToEntity(orderDTO);

        log.info(order);

        int orderNo = orderRepository.save(order).getOrderNo();

        log.info(orderNo);

        return orderNo;

    }

    @Override
    public OrderDetailDTO read(int orderNo) {

        OrderDetailDTO result = orderRepository.read(orderNo);

        return result;
    }

    @Override
    public void modify(OrderDTO orderDTO) {

        Optional<Order> result = orderRepository.findById(orderDTO.getOrderNo());

        Order order = result.orElseThrow();

        order.change(orderDTO);

        // 추후 발주 수정에 따라 다른 영역에 관련된 수정 사항이 있으면 여기에 추가



        // -----------------------------------------

        orderRepository.save(order);


    }

    @Override
    public void remove(int orderNo) {

        orderRepository.deleteById(orderNo);

    }

    @Override
    public PageResponseDTO<OrderDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<Order> result = orderRepository.search(types, keyword, pageable);

        List<OrderDTO> dtoList = result.getContent().stream()
                .map(order -> entityToDto(order))
                .collect(Collectors.toList());

        return PageResponseDTO.<OrderDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) {

        int num = orderRepository.getCodeCount(code);

        return num;
    }
}
