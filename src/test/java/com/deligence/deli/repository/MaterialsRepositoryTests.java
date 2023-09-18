package com.deligence.deli.repository;

import com.deligence.deli.domain.Materials;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialsRepositoryTests {

    @Autowired
    private MaterialsRepository materialsRepository;

    @Test
    public void testInsert() { // 자재등록 test
        IntStream.rangeClosed(1, 100).forEach(i -> {
            Materials materials = Materials.builder()
                    .materialCode("code" + i)
                    .materialName("name" + i)
                    .materialType("type" + i)
                    .materialExplaination("explaination" + i)
                    .materialSupplyPrice((long) (100 + i))
                    .build();

            Materials result = materialsRepository.save(materials);
            log.info("materialNo:" + result.getMaterialNo());
        });
    }

    @Test
    public void testSelect(){ //select test
        int materialNo = 100;

        Optional<Materials> result = materialsRepository.findById(materialNo);

        Materials materials = result.orElseThrow();

        log.info(materials);
    }

    @Test
    public void testUpeate() { //Update test
        int materialNo = 1313;

        Optional<Materials> result = materialsRepository.findById(materialNo);

        Materials materials = result.orElseThrow();

        materials.change("update test", "update.. test", "update... test", 100000000L);

        materialsRepository.save(materials);
    }

    @Test
    public void testDelete() { //Delete test
        int materialNo = 1313;

        materialsRepository.deleteById(materialNo);
    }
    @Test
    public void testpaging(){ //자재 페이징 test

        Pageable pageable = PageRequest.of(0,10, Sort.by("materialNo").descending());

        Page<Materials> result = materialsRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number:" + result.getNumber());
        log.info("page size: " + result.getSize());

        List<Materials> todoList = result.getContent();

        todoList.forEach(materials -> log.info(materials));
    }

    @Test
    public void testSearch1(){

        Pageable pageable = PageRequest.of(1,10, Sort.by("materialNo").descending());

        materialsRepository.search1(pageable);
    }
}
