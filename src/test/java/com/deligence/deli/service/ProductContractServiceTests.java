package com.deligence.deli.service;

import com.deligence.deli.dto.*;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class ProductContractServiceTests {

    @Autowired
    private ProductContractService productContractService;

    @Test
    public void testRegister() {

        ProductContractDTO productContractDTO = ProductContractDTO.builder()
                .productContractCode("PD-CONTRACT-register")
                .productNo(1)
                .productCode("productCode1")
                .productQuantity(100)
                .productContractDate(LocalDate.now())
                .productDeliveryDate(LocalDate.of(2023, 10, 2))
                .productQuotation("BlahBlah")
                .productContractState("자재입고중")
                .clientNo(1)
                .clientName("client1")
                .clientStatus("계약중")
                .employeeNo(28)
                .employeeName("윈터")
                .documentFileNo(1)
                .build();

        productContractService.register(productContractDTO);

        log.info("success");

    }

    @Test
    public void testRead() {

        int productContractNo = 2;

        ProductContractDetailDTO productContractDetailDTO = productContractService.read(productContractNo);

        log.info(productContractDetailDTO);
    }

    @Test
    public void testModify() {

        ProductContractDTO productContractDTO = ProductContractDTO.builder()
                .productContractNo(2)
                .productContractCode("PD-CONTRACT-modify")
                .productQuantity(100)
                .productDeliveryDate(LocalDate.of(2023,10,8))
                .productQuotation("modifyTesting")
                .productContractState("제품생산중")
                .build();

        productContractService.modify(productContractDTO);
    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("a")  //a:제품계약코드 b:제품코드 c:회사명 d:계약일 e:클라이언트계약상태 +계약진행상태별도
                .keyword("code")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<ProductContractDTO> responseDTO = productContractService.list(pageRequestDTO);

        log.info(responseDTO);

    }

    @Test
    public void testCC() {

        int num = productContractService.getCodeCount("PD-CONTRACT-20230928-");

        log.info( "cc :" + num);
    }


}
