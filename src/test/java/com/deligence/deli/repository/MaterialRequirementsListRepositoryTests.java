package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.Products;
import com.deligence.deli.dto.MaterialRequirementsListDTO;
import com.deligence.deli.dto.OrderDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialRequirementsListRepositoryTests {

    @Autowired
    private MaterialRequirementsListRepository materialRequirementsListRepository;

    @Test
    public void testInsert() {
        IntStream.rangeClosed(1, 10).forEach(i -> {

            MaterialRequirementsList materialRequirementsList = MaterialRequirementsList.builder()
                    .products(Products.builder().productNo(1).build())
                    .materials(Materials.builder().materialNo(1).build())
                    .quantity(i)
                    .productCode("PRODUCT-20230930-0")
                    .productName("PN1")
                    .materialCode("MATERIAL-20230930-0")
                    .materialName("MN1")
                    .materialType("MT1")
                    .build();

            log.info(materialRequirementsList);

            materialRequirementsListRepository.save(materialRequirementsList);

        });
    }

    @Test
    public void testSelect() {

        int materialRequirementsListNo = 1;

        Optional<MaterialRequirementsList> result = materialRequirementsListRepository.findById(materialRequirementsListNo);

        MaterialRequirementsList materialRequirementsList = result.orElseThrow();

        log.info(materialRequirementsList);

    }

    @Test
    public void testUpdate() {

        int materialRequirementsListNo = 2;

        Optional<MaterialRequirementsList> result = materialRequirementsListRepository.findById(materialRequirementsListNo);

        MaterialRequirementsList materialRequirementsList = result.orElseThrow();

        materialRequirementsList.change(MaterialRequirementsListDTO.builder()
                .quantity(10)
                .build());

        materialRequirementsListRepository.save(materialRequirementsList);

    }

    @Test
    public void testDelete(){

        int materialRequirementsListNo = 18;

        materialRequirementsListRepository.deleteById(materialRequirementsListNo);

    }

    @Test
    public void testPaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("materialRequirementsListNo").descending());

        log.info(pageable);

        Page<MaterialRequirementsList> result = materialRequirementsListRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page  number: " + result.getNumber());
        log.info("page  size: " + result.getSize());

        List<MaterialRequirementsList> list = result.getContent();

        list.forEach(log::info);

    }

    @Test
    public void testSearch() {

        String[] types = {"a"};

        String keyword = "code";

        Pageable pageable = PageRequest.of(1, 10, Sort.by("materialRequirementsListNo").descending());

        log.info(pageable);

        Page<MaterialRequirementsList> result = materialRequirementsListRepository.search(types, keyword, pageable);

        //total pages
        log.info(result.getTotalPages());

        //page size
        log.info(result.getSize());

        //pageNumber
        log.info(result.getNumber());

        //prev next
        log.info(result.hasPrevious() + ": " + result.hasNext());

        result.getContent().forEach(log::info);

    }

}
