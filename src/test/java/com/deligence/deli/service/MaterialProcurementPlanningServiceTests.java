package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class MaterialProcurementPlanningServiceTests {

    @Autowired
    private MaterialProcurementPlanningService materialProcurementPlanningService;

    @Test   //Register 테스트 -> localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testRegister() {

        log.info(materialProcurementPlanningService.getClass().getName());

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .procurement_delivery_date(LocalDate.of(2023, 10, 15))
                        .material_requirements_count(200)
                        .material_procurement_state("Sample")
                        .material_no(0)
                        .production_plan_no(0)
                        .employee_no(0)
                        .material_code("Sample")
                        .material_name("Sample")
                        .build();

        int material_procurement_plan_no =
                materialProcurementPlanningService.register(materialProcurementPlanningDTO);

        log.info("material_procurement_plan_no : " + material_procurement_plan_no);
    }

    @Test //수정(modify) 테스트 -> localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testModify() {

        //변경에 필요한 데이터만
        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .material_procurement_plan_no(2)
                        .procurement_delivery_date(LocalDate.of(2023, 9, 27))
                        .material_requirements_count(1000)
                        .material_procurement_state("ing")
                        .build();

        materialProcurementPlanningService.modify(materialProcurementPlanningDTO);
    }

    //페이징 오류 ->  No property 'material' found for type 'MaterialProcurementPlanning'; Did you mean 'materials'
    @Test //목록,검색 (list) 테스트 -> localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                //키워드 m:자재코드 n:자재이름 d:납기일 c:자재소요량 s:조달계약상태
                .type("s")      //자재조달상태
                .keyword("ing")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialProcurementPlanningDTO> responseDTO =
                materialProcurementPlanningService.list(pageRequestDTO);

        log.info(responseDTO);
    }

}
