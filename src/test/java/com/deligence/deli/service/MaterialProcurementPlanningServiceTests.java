package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
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

    @Test   //Register 테스트
    public void testRegister() {

        log.info(materialProcurementPlanningService.getClass().getName());

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .procurementDeliveryDate(LocalDate.of(2023, 10, 15))
                        .materialRequirementsCount(200)
                        .materialProcurementState("Sample")
                        .productionPlanNo(0)
                        .materialCode("Sample")
                        .materialName("Sample")
                        .build();

        int materialProcurementPlanNo =
                materialProcurementPlanningService.register(materialProcurementPlanningDTO);

        log.info("materialProcurementPlanNo : " + materialProcurementPlanNo);
    }


    @Test //수정(modify) 테스트
    public void testModify() {

        //변경에 필요한 데이터만
        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .materialProcurementPlanNo(2)
                        .procurementDeliveryDate(LocalDate.of(2023, 9, 27))
                        .materialRequirementsCount(1000)
                        .materialProcurementState("ing")
                        .build();

        materialProcurementPlanningService.modify(materialProcurementPlanningDTO);
    }

    @Test //목록,검색 (list) 테스트
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                //키워드 m:자재코드 n:자재이름 d:납기일 c:자재소요량 s:조달계약상태
                .type("s")      //자재조달상태
                .keyword("진행중")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialProcurementPlanningDTO> responseDTO =
                materialProcurementPlanningService.list(pageRequestDTO);

        log.info(responseDTO);
    }

}
