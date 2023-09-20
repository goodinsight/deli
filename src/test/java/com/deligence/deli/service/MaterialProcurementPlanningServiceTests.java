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

//        log.info(materialProcurementPlanningService.getClass().getName());

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .procurementDeliveryDate(LocalDate.of(2023, 9, 27))
                        .materialRequirementsCount(1)
                        .materialProcurementState("READY")
                        .materialCode("registerMaterialCode")
                        .materialName("registerMaterialName")
                        .build();

        materialProcurementPlanningService.register(materialProcurementPlanningDTO);

        log.info("success");
    }

    @Test   //read test
    public void testRead() {

        int materialProcurementPlanNo = 2;

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                materialProcurementPlanningService.read(materialProcurementPlanNo);

        log.info(materialProcurementPlanningDTO);
    }

    @Test //수정(modify) 테스트
    public void testModify() {

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .materialProcurementPlanNo(2)   //No=2 변경
                        .procurementDeliveryDate(LocalDate.of(2023, 9, 22))
                        .materialRequirementsCount(1000)
                        .materialProcurementState("진행중")
                        .materialCode("modifyMaterialCode")
                        .materialName("modifyMaterialName")
                        .build();

        materialProcurementPlanningService.modify(materialProcurementPlanningDTO);

        log.info(materialProcurementPlanningDTO);

    }

    @Test //목록,검색 (list) 테스트
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                //키워드 a:조달계획일련번호 b:자재코드 c:자재이름 d:납기일 e:자재소요량 f:조달계약상태
                .type("a")
                .keyword("1")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialProcurementPlanningDTO> responseDTO =
                materialProcurementPlanningService.list(pageRequestDTO);

        log.info(responseDTO);
    }

}
