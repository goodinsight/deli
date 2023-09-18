package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderSearch {

    Page<Order> search(String[] types, String keyword, Pageable pageable);


}
