package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.dto.MaterialInventoryDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Log4j2
public class MaterialInventoryServiceTests {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Test
    public void testMaterialInventoryServicelistOne() {

        int materialNo = 50;

        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.materialInventorylistOne(materialNo);

        log.info(materialInventoryDTO);


    }

}
