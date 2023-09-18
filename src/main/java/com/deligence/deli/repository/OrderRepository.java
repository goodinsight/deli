package com.deligence.deli.repository;

import com.deligence.deli.domain.Order;
import com.deligence.deli.repository.search.OrderSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer>, OrderSearch {



}
