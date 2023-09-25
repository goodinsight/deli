package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.MaterialProcurementPlanningDetailDTO;
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
                        .materialProcurementPlanCode("codeTest")
                        .procurementDeliveryDate(LocalDate.of(2023, 9, 27))
                        .materialRequirementsCount(1)
                        .materialProcurementState("READY")
                        .productionPlanNo(3)
                        .materialNo(3)
                        .materialCode("registerMaterialCode")
                        .materialName("registerMaterialName")
                        .employeeNo(3)
                        .build();

        materialProcurementPlanningService.register(materialProcurementPlanningDTO);

        log.info("success");
    }

    @Test   //read test
    public void testRead() {

        int materialProcurementPlanNo = 116;

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO =
                materialProcurementPlanningService.read(materialProcurementPlanNo);

        log.info(materialProcurementPlanningDetailDTO);
    }

    @Test //수정(modify) 테스트 -> serviceImpl에서 modify 정립되면 test실행
    public void testModify() {

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                MaterialProcurementPlanningDTO.builder()
                        .materialProcurementPlanNo(99)
                        .materialProcurementPlanCode("modifyTestCode")
                        .procurementDeliveryDate(LocalDate.of(2023, 9, 22))
                        .materialRequirementsCount(1000)
                        .materialProcurementState("진행중")
                        .productionPlanNo(2)
                        .materialNo(2)
                        .materialCode("modifyMaterialCode")
                        .materialName("modifyMaterialName")
                        .employeeNo(2)
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

    @Test
    public void testCC() {

        int num = materialProcurementPlanningService.getCodeCount("MP-PLANNING-20230922-");

        log.info( "cc :" + num);

    }

}
