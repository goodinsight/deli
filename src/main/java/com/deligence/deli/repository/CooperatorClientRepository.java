package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorClient;
import java.util.List;
import com.deligence.deli.repository.search.CooperatorClientSearch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CooperatorClientRepository extends JpaRepository<CooperatorClient, Integer>, CooperatorClientSearch {
    @Query("select p from CooperatorClient p where not exists " +
            "(select l.id from PartnerLink l where l.client = p) order by p.clientName, p.clientNo")
    List<CooperatorClient> findUnlinked();


    @Query(value = "select now()", nativeQuery = true)
    String getTime();

}
