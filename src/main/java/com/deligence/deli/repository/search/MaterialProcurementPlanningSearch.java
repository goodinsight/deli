package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialProcurementPlanningDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MaterialProcurementPlanningSearch {

    Page<MaterialProcurementPlanning> search1(Pageable pageable);

    Page<MaterialProcurementPlanning> searchAll(String[] types, String keyword, Pageable pageable);

    Page<MaterialProcurementPlanning> searchByState(String[] keywords, Pageable pageable);

    Page<MaterialProcurementPlanning> searchWithState(String[] types, String keyword, String state, Pageable pageable);

    int getCodeCount(String materialProcurementPlanCode);

    MaterialProcurementPlanningDetailDTO read(int materialProcurementPlanNo);

    //조달계획 상세(연관 발주 목록)
    List<Order> orderList(int materialProcurementPlanNo);


}
