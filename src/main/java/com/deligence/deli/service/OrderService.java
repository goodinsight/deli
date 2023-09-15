package com.deligence.deli.service;

import com.deligence.deli.dto.OrderDTO;

public interface OrderService {

    void register(OrderDTO orderDTO);

    OrderDTO read(Long order_no);

    void modify(OrderDTO orderDTO);

    void remove(Long order_no);

    

}
