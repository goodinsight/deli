package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface MaterialInventorySearch {

    Page<Order> materialStockListOne(Pageable pageable);

    Page<Order> materialStockList(String[] types, String keyword, Pageable pageable);

}
