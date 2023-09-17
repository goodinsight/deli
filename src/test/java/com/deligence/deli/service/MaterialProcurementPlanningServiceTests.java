package com.deligence.deli.service;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class MaterialProcurementPlanningServiceTests {

    @Autowired
    private MaterialProcurementPlanningService materialProcurementPlanningService;

    @Test   //localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testRegister() {
        log.info(materialProcurementPlanningService.getClass().getName());
    }
}
