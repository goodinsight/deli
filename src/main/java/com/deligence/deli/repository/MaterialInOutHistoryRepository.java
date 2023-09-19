package com.deligence.deli.repository;

import com.deligence.deli.domain.MeterialInOutHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MaterialInOutHistoryRepository extends JpaRepository<MeterialInOutHistory, Integer> {

    @Query(value = "select now()", nativeQuery = true)
    String getTime();

}
