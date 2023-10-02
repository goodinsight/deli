package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialProcurementContractDTO;
import com.deligence.deli.dto.MaterialProcurementContractDetailDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class MaterialProcurementContractServiceTests {

    @Autowired
    private MaterialProcurementContractService materialProcurementContractService;

    @Test
    public void testRegister() {

        MaterialProcurementContractDTO materialProcurementContractDTO = MaterialProcurementContractDTO.builder()
                        .materialProcurementContractCode("MP-CONTRACT-20231002-register")
                        .materialProcurementContractDate(LocalDate.of(2023, 9, 25))
                        .materialProcurementContractState("조달진행중")  //조달진행중, 조달계약파기, 조달완료
                        .materialProcurementContractEtc("등록테스트")
                        .materialProcurementPlanNo(100)
                        .MaterialProcurementContractNo(1)
                        .materialProcurementPlanCode("MP-PLANNING-20230928-test")
                        .materialCode("MATERIAL-20230928-0")
                        .materialName("materialName1")
                        .materialSupplyPrice(10000L)
                        .procurementQuantity(100)
                        .supplierNo(2)
                        .supplierName("supplierName2")
                        .supplierStatus("계약중")
                        .employeeNo(2)
                        .employeeName("혜인")
                        .documentFileNo(2)
                        .build();

        materialProcurementContractService.register(materialProcurementContractDTO);

        log.info("success");
    }

    @Test
    public void testRead() {

        int materialProcurementContractNo = 3;

        MaterialProcurementContractDetailDTO materialProcurementContractDetailDTO =
                materialProcurementContractService.read(materialProcurementContractNo);

        log.info(materialProcurementContractDetailDTO);

    }

    @Test
    public void testModify() {

        MaterialProcurementContractDTO materialProcurementContractDTO =
                MaterialProcurementContractDTO.builder()
                        .MaterialProcurementContractNo(3) //1,2번 없음
                        .materialProcurementContractCode("MP-CONTRACT-20231002-modify")
                        .materialProcurementContractDate(LocalDate.of(2023,9,22))
                        .materialProcurementContractState("조달계약파기")
                        .materialProcurementContractEtc("modifyContractEtc..")
                        .procurementQuantity(50)
                        .build();

        materialProcurementContractService.modify(materialProcurementContractDTO);

        log.info(materialProcurementContractDTO);
    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                //a:조달계획코드, b:자재코드, c:자재이름, d:공급단가, e:납품업체명, f:자재조달계약상태
                .type("b")
                .keyword("1")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialProcurementContractDTO> responseDTO =
                materialProcurementContractService.list(pageRequestDTO);

        log.info(responseDTO);
    }

    @Test
    public void testCC() {

        int num = materialProcurementContractService.getCodeCount("MP-CONTRACT-20230921-");

        log.info("cc: " + num);
    }



}
