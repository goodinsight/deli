package com.deligence.deli.service;

import com.deligence.deli.dto.*;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

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
                .productContractNo(3)
                .productCode("productCode")
                .productDeliveryDate(LocalDate.of(2023,11,15))
                .clientName("client")
                .clientStatus("계약중")
                .build();

        productionPlanningService.register(productionPlanningDTO);

        log.info("success");

    }

    @Test
    public void testRead() {

        int productionPlanNo = 1;

        ProductionPlanningDetailDTO productionPlanningDetailDTO = productionPlanningService.read(productionPlanNo);

        log.info(productionPlanningDetailDTO);

    }

    @Test
    public void testModify() {

        ProductionPlanningDTO productionPlanningDTO = ProductionPlanningDTO.builder()
                .productionPlanNo(1)
                .productionPlanCode("PD-PLANNING-20230926-")
                .productionQuantity(200)
                .productionRequirementsDate(5)
                .productionRequirementsProcess("modifyProcess...")
                .productionDeliveryDate(LocalDate.of(2023,9,27))
                .detailExplaination("modifyExplaination...")
                .productContractNo(3)
                .productCode("modifyProductCode")
                .productDeliveryDate(LocalDate.of(2023,11,15))
                .clientName("client")
                .clientStatus("계약중")
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
}
