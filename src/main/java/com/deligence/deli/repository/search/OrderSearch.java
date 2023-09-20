package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.OrderDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderSearch {

    Page<Order> search(String[] types, String keyword, Pageable pageable);

    int getCodeCount(String orderCode);

    public OrderDetailDTO read(int orderNo);

}
