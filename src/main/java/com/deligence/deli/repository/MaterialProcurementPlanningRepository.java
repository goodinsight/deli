package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.repository.search.MaterialProcurementPlanningSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MaterialProcurementPlanningRepository
        extends JpaRepository<MaterialProcurementPlanning, Integer>, MaterialProcurementPlanningSearch {

    @Query(value = "select now()", nativeQuery = true)
    String getTime();
}
