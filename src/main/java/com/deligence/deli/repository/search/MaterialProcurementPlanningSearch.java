package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialProcurementPlanningDetailDTO;
import com.deligence.deli.dto.OrderDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

//조달계획목록 페이지 -> 검색처리
public interface MaterialProcurementPlanningSearch {

    Page<MaterialProcurementPlanning> search1(Pageable pageable);

    Page<MaterialProcurementPlanning> searchAll(String[] types, String keyword, Pageable pageable);

    Page<MaterialProcurementPlanning> searchByState(String[] keywords, Pageable pageable);

    int getCodeCount(String materialProcurementPlanCode);

    MaterialProcurementPlanningDetailDTO read(int materialProcurementPlanNo);

    //조달계획 상세(연관 발주 목록)
//    OrderDetailDTO readOrder(int orderNo);
    Page<Order> orderList(int materialProcurementPlanNo, Pageable pageable);


}
