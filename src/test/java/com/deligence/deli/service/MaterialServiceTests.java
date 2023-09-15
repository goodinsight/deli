package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialsDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class MaterialServiceTests {

    @Autowired
    private MaterialService materialService;

    @Test
    public void testRegister() {

        log.info(materialService.getClass().getName());

        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .material_name("Name Test")
                .material_type("Type Test")
                .material_explaination("Explaination Test")
                .build();

        int material_no = materialService.register(materialsDTO);

        log.info("material_no: " + material_no);
    }
}
