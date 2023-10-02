package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.repository.search.CooperatorClientSearch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CooperatorClientRepository extends JpaRepository<CooperatorClient, Integer>, CooperatorClientSearch {

    @Query(value = "select now()", nativeQuery = true)
    String getTime();

}
