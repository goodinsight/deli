package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.repository.search.MaterialInventorySearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MaterialInventoryRepository extends JpaRepository<MaterialInventory, Integer>, MaterialInventorySearch {

    @Query(value = "select now()", nativeQuery = true)
    String getTime();

}
