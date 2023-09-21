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

        MaterialProcurementContractDTO materialProcurementContractDTO =
                MaterialProcurementContractDTO.builder()
                        .materialProcurementContractCode("registerContractCode...")
                        .materialProcurementContractDate(LocalDate.of(2023, 9, 22))
                        .materialProcurementContractState("계약전")
                        .materialProcurementContractEtc("등록테스트")
                        .materialCode("materialCode")
                        .materialName("materialName")
                        .materialSupplyPrice(100L)
                        .supplierName("supplierName")
                        .supplierStatus("자재협력회사계약상태는왜?")
                        .build();

        materialProcurementContractService.register(materialProcurementContractDTO);

        log.info("success");
    }

    @Test
    public void testRead() {

        int materialProcurementContractNo = 100;

        MaterialProcurementContractDetailDTO materialProcurementContractDetailDTO =
                materialProcurementContractService.read(materialProcurementContractNo);

        log.info(materialProcurementContractDetailDTO);

    }

    @Test
    public void testModify() {

        MaterialProcurementContractDTO materialProcurementContractDTO =
                MaterialProcurementContractDTO.builder()
                        .MaterialProcurementContractNo(100)
                        .materialProcurementContractCode("modifyContractCode..")
                        .materialProcurementContractDate(LocalDate.of(2023,9,22))
                        .materialProcurementContractState("진행중")
                        .materialProcurementContractEtc("modifyContractEtc..")
                        .materialCode("modifyMaterialCode")
                        .materialName("modifyMaterialName")
                        .materialSupplyPrice(1000L)
                        .supplierName("modifySupplierName")
                        .supplierStatus("컬럼존재이유를모르겠음")
                        .build();

        materialProcurementContractService.modify(materialProcurementContractDTO);

        log.info(materialProcurementContractDTO);
    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                //a: No, b:자재코드, c:자재이름, d:공급단가, e:납품업체명, f:자재조달계약상태
                .type("a")
                .keyword("1")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialProcurementContractDTO> responseDTO =
                materialProcurementContractService.list(pageRequestDTO);

        log.info(responseDTO);
    }



}
