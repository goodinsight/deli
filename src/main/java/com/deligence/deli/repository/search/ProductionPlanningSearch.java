package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.dto.ProductionPlanningDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductionPlanningSearch {

    Page<ProductionPlanning> search(String[] types, String keyword, Pageable pageable);

    Page<ProductionPlanning> searchWithState(String[] types, String keyword, String state, Pageable pageable);

    int getCodeCount(String productionPlanCode);

    ProductionPlanningDetailDTO read(int productionPlanNo);

    //제품생산계획 상세 (연관 조달 계획 목록)
    List<MaterialProcurementPlanning> procurementPlanList(int ProductionPlanNo);

    //생산진행상태검색
    Page<ProductionPlanning> searchProduction(String[] types, String keyword, String[] states, Pageable pageable);

}
