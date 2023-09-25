package com.deligence.deli.service;

import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
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
                .productContractNo(1)
                .productCode("productCode")
                .productDeliveryDate(LocalDate.of(2023,11,15))
                .clientName("client")
                .clientStatus("계약중")
                .build();

        productionPlanningService.register(productionPlanningDTO);

        log.info("success");

    }
}
