package com.deligence.deli.service;

import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface OrderService {

    void register(OrderDTO orderDTO);

    OrderDTO read(int orderNo);

    void modify(OrderDTO orderDTO);

    void remove(int orderNo);

    PageResponseDTO<OrderDTO> list(PageRequestDTO pageRequestDTO);

}
