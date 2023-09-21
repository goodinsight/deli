package com.deligence.deli.repository;

import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProgressInspection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProgressInspectionRepository extends JpaRepository<ProgressInspection, Integer>{


    @Query("select pi " +
            "from ProgressInspection pi " +
            "where pi.order.orderNo = :orderNo")
    Page<ProgressInspection> listOfOrder(@Param("orderNo") int orderNo, Pageable pageable);

    Long countByOrder_OrderNo(int orderNo);

    void deleteByOrder_OrderNo(int orderNo);

}
