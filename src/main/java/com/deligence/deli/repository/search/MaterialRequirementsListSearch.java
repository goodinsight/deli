package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.dto.MaterialRequirementsListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialRequirementsListSearch {

    Page<MaterialRequirementsList> search(String[] types, String keyword, Pageable pageable);

    MaterialRequirementsListDTO read(int materialRequirementsListNo);

}
