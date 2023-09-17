package com.deligence.deli.repository;

//자재조달계획 Repository 생성 - ksy

import com.deligence.deli.domain.MaterialProcurementPlanning;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialProcurementPlanningRepository extends JpaRepository<MaterialProcurementPlanning, Integer> {


}
