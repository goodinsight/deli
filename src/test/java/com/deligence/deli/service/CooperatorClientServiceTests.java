package com.deligence.deli.service;

import com.deligence.deli.dto.CooperatorClientDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class CooperatorClientServiceTests {

    @Autowired
    private CooperatorClientService cooperatorClientService;

    @Test
    public void testRegister() { //등록(추가)
        log.info(cooperatorClientService.getClass().getName());

        CooperatorClientDTO cooperatorClientDTO = CooperatorClientDTO.builder()
                .corporateRegistrationNo(1111111111)
                .clientCeo("test")
                .clientEmail("11111@test.com")
                .clientName("대표에용")
                .clientPhone("010-9876-5432")
                .clientAddress("서울")
                .build();

        int clientNo = cooperatorClientService.register(cooperatorClientDTO);

        log.info("clientNo: " + clientNo);
    }

}
