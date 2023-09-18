package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialsDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class MaterialsServiceTests {

    @Autowired
    private MaterialsService materialsService;

    @Test
    public void testRegister() { //등록 test

        log.info(materialsService.getClass().getName());

        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialName("Name Test")
                .materialType("Type Test")
                .materialExplaination("Explaination Test")
                .materialSupplyPrice(10L)
                .build();

        int materialNo = materialsService.register(materialsDTO);

        log.info("materialNo: " + materialNo);
    }

    @Test
    public void testModify() { //수정 test

        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialNo(1314)
                .materialName("Name Test update")
                .materialExplaination("Explaination Test update")
                .materialType("Type Test update")
                .materialSupplyPrice(100000L)
                .build();

        materialsService.modify(materialsDTO);

    }

    @Test
    public void testDelete() { //삭제 test
        int materialNo = 1315;

        materialsService.delete(materialNo);
    }
}
