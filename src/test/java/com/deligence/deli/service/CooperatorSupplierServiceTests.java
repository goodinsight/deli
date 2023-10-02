package com.deligence.deli.service;

import com.deligence.deli.dto.CooperatorSupplierDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class CooperatorSupplierServiceTests {

    @Autowired
    private CooperatorSupplierService cooperatorSupplierService;

    @Test
    public void testRegister() {

        CooperatorSupplierDTO cooperatorSupplierDTO = CooperatorSupplierDTO.builder()
                .corporateRegistrationNo(7123456)
                .supplierCeo("registerCeo")
                .supplierEmail("registerEmail")
                .supplierName("registerName")
                .supplierPhone("registerPhone")
                .supplierAddress("registerAddress")
                .supplierStatus("계약중")
                .supplierEtc("registerEtc")
                .documentFileNo(6)
                .build();

        cooperatorSupplierService.register(cooperatorSupplierDTO);

        log.info("success");
    }

    @Test
    public void testRead() {

        int supplierNo = 1;

        CooperatorSupplierDTO cooperatorSupplierDTO = cooperatorSupplierService.read(supplierNo);

        log.info(cooperatorSupplierDTO);
    }

    @Test
    public void testModify() {

        CooperatorSupplierDTO cooperatorSupplierDTO = CooperatorSupplierDTO.builder()
                .supplierNo(1)
                .supplierCeo("modifyCeo")
                .supplierEmail("modifyEmail")
                .supplierName("modifyName")
                .supplierPhone("modifyPhone")
                .supplierAddress("modifyAddress")
                .supplierStatus("계약완료")
                .supplierEtc("modifyEtc")
                .build();

        cooperatorSupplierService.modify(cooperatorSupplierDTO);
    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("c")
                .keyword("경기도")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<CooperatorSupplierDTO> responseDTO = cooperatorSupplierService.list(pageRequestDTO);

        log.info(responseDTO);

    }



}
