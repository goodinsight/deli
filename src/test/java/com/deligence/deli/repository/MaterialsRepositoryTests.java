package com.deligence.deli.repository;

import com.deligence.deli.domain.Materials;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialsRepositoryTests {

    @Autowired
    private MaterialsRepository materialsRepository;

//    @Test
//    public void testInsert() {
//        IntStream.rangeClosed(1, 100).forEach(i -> {
//            Materials materials = Materials.builder()
//                    .materialCode("code" + i)
//                    .materialName("name" + i)
//                    .materialType("type" + i)
//                    .materialExplaination("explaination" + i)
//                    .materialSupplyPrice((long) (100.00 + i))
//                    .build();
//
//            Materials result = materialsRepository.save(materials);
//            log.info("materialNo:" + result.getMaterialNo());
//        });
//    }
}
