package com.deligence.deli.service;

import com.deligence.deli.dto.*;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

@SpringBootTest
@Log4j2
public class ProductionPlanningServiceTests {

    @Autowired
    private ProductionPlanningService productionPlanningService;

    @Test
    public void testRegister() {

        ProductionPlanningDTO productionPlanningDTO = ProductionPlanningDTO.builder()
                .productionPlanCode("PD-PLANNING-20230926-")
                .productionQuantity(100)
                .productionRequirementsDate(10)
                .productionRequirementsProcess("process...")
                .productionDeliveryDate(LocalDate.of(2023,9,27))
                .detailExplaination("explaination...")
                .productionState("제품생산단계")
                .productContractNo(50)
                .productCode("PD-CONTRACT-regTest")
                .clientName("ClientName")
                .productDeliveryDate(LocalDate.of(2023,11,15))
                .clientStatus("계약중")
                .employeeName("윈터")
                .materialRequirementsListNo(1)
                .employeeNo(28)
                .employeeName2("카리나")
                .build();

        productionPlanningService.register(productionPlanningDTO);

        log.info("success");

    }

    @Test
    public void testRead() {

        int productionPlanNo = 216;

        ProductionPlanningDetailDTO productionPlanningDetailDTO = productionPlanningService.read(productionPlanNo);

        log.info(productionPlanningDetailDTO);

    }

    @Test
    public void testModify() {

        ProductionPlanningDTO productionPlanningDTO = ProductionPlanningDTO.builder()
                .productionPlanNo(215)
                .productionPlanCode("PD-PLANNING-modTest-")
                .productionQuantity(200)
                .productionRequirementsDate(5)
                .productionRequirementsProcess("modifyProcess...")
                .productionDeliveryDate(LocalDate.of(2023,10,27))
                .detailExplaination("modifyExplaination...")
                .productionState("제품입고완료")
                .build();

        productionPlanningService.modify(productionPlanningDTO);

    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("a")
                .keyword("code")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<ProductionPlanningDTO> responseDTO = productionPlanningService.list(pageRequestDTO);

        log.info(responseDTO);

    }

    @Test
    public void testCC() {

        int num = productionPlanningService.getCodeCount("PD-PLANNING-20230926-");

        log.info( "cc :" + num);
    }


    //생산계획상세 (연관 조달계획 목록) 테스트
    @Test
    public void procurementPlanList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder().build();

        List<MaterialProcurementPlanningDTO> responseDTO =
                productionPlanningService.procurementPlanList(3, pageRequestDTO);

        log.info(responseDTO);
    }
}
