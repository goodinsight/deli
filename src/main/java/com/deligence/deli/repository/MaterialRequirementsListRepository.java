package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.dto.MaterialRequirementsListDTO;
import com.deligence.deli.repository.search.MaterialRequirementsListSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRequirementsListRepository extends JpaRepository<MaterialRequirementsList, Integer>, MaterialRequirementsListSearch {


}
