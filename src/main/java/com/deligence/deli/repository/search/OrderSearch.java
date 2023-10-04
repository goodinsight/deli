package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.OrderDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface OrderSearch {

    Page<Order> search(String[] types, String keyword, Pageable pageable);

    Page<Order> searchWithState(String[] types, String keyword, String state, Pageable pageable);

    int getCodeCount(String orderCode);

    OrderDetailDTO read(int orderNo);

    Page<Order> searchIncoming(String[] types, String keyword, String[] states, Pageable pageable);

    int sumOfOrderQuantity(int materialProcurementPlanningNo);

    Map<String, Integer> orderChart(String materialName, String year, String state);

}
