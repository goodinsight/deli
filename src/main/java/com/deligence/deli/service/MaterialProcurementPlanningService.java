package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface MaterialProcurementPlanningService {

    //등록
    int register(MaterialProcurementPlanningDTO materialProcurementPlanningDTO);

    //조회
    MaterialProcurementPlanningDTO readOne(int material_procurement_plan_no);

    //수정
    void modify(MaterialProcurementPlanningDTO materialProcurementPlanningDTO);

    //삭제
    void remove(int material_procurement_plan_no);

    //목록,검색
    PageResponseDTO<MaterialProcurementPlanningDTO> list(PageRequestDTO pageRequestDTO);

}
