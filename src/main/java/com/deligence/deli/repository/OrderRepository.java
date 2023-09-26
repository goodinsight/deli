package com.deligence.deli.repository;

import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProgressInspection;
import com.deligence.deli.repository.search.OrderSearch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderRepository extends JpaRepository<Order, Integer>, OrderSearch {

}
