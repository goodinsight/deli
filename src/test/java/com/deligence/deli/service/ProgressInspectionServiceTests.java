package com.deligence.deli.service;

import com.deligence.deli.dto.ProgressInspectionDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class ProgressInspectionServiceTests {

    @Autowired
    private ProgressInspectionService progressInspectionService;

    @Test
    public void testRegister(){

        ProgressInspectionDTO progressInspectionDTO = ProgressInspectionDTO.builder()
                .progressInspectionDate(LocalDate.now())
                .progressInspectionEtc("service Test")
                .rateOfProgress(0L)
                .progressInspectionState("대기중")
                .orderNo(45)
                .employeeNo(3)
                .employeeName("김발주")
                .build();

        progressInspectionService.register(progressInspectionDTO);

    }

    @Test
    public void testRead(){

        int pin = 3;

        ProgressInspectionDTO progressInspectionDTO = progressInspectionService.read(pin);

        log.info(progressInspectionDTO);
    }


}
