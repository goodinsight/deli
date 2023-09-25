package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.OrderRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@SpringBootTest
@Log4j2
@Transactional
public class MaterialInventoryServiceTests {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Test
    public void testMaterialsServicelistOne() {

        int materialInventoryNo = 74;

        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.materialStockRead(materialInventoryNo);
        log.info(materialInventoryDTO);

    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("tcw")
                .keyword("30")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);

        log.info(responseDTO);

    }



}
