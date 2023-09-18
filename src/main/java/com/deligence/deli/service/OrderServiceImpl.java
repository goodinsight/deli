package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService{

    private final ModelMapper modelMapper;

    private final OrderRepository orderRepository;

    @Override
    public void register(OrderDTO orderDTO) {

        //dto -> entity
        Order order = modelMapper.map(orderDTO, Order.class);
        //안되면 interface 에 DtoToEntity 메소드 만들자.

        log.info(order);

        int order_no = orderRepository.save(order).getOrderNo();

        log.info(order_no);

    }

    @Override
    public OrderDTO read(int orderNo) {

        Optional<Order> result = orderRepository.findById(orderNo);

        Order order = result.orElseThrow();

        //entity -> dto
        OrderDTO orderDTO = modelMapper.map(order, OrderDTO.class);

        return null;
    }

    @Override
    public void modify(OrderDTO orderDTO) {

        Optional<Order> result = orderRepository.findById(orderDTO.getOrderNo());

        Order order = result.orElseThrow();




    }

    @Override
    public void remove(int orderNo) {

    }

    @Override
    public PageResponseDTO<OrderDTO> list(PageRequestDTO pageRequestDTO) {
        return null;
    }
}
