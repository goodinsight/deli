package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class MaterialInventoryServiceTests {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Test
    public void testMaterialsServicelistOne() {

        int materialInventoryNo = 50;

        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.materialStockListOne(materialInventoryNo);

        log.info(materialInventoryDTO);

    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("tcw")
                .keyword("2")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);

        log.info(responseDTO);

        // 테스트 확인 필요

    }

}
