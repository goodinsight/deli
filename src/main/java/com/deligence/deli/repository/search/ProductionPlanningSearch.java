package com.deligence.deli.repository.search;

import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.dto.ProductionPlanningDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductionPlanningSearch {

    Page<ProductionPlanning> search(String[] types, String keyword, Pageable pageable);

//    Page<ProductionPlanning> searchByState(String[] keywords, Pageable pageable);

    int getCodeCount(String productionPlanCode);

    ProductionPlanningDetailDTO read(int productionPlanNo);

}
