package com.deligence.deli.repository;

import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.repository.search.ProductionPlanningSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductionPlanningRepository extends JpaRepository<ProductionPlanning, Integer>, ProductionPlanningSearch {

}
