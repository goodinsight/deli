package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
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
public class MaterialInventoryRepositoryTests {

    @Autowired
    private MaterialInventoryRepository materialInventoryRepository;

    @Autowired
    private MaterialsRepository materialsRepository;

    @Test
    public void testMaterialInventoryInsert() {

        IntStream.rangeClosed(1, 50).forEach(i -> {

            MaterialInventory materialInventory = MaterialInventory.builder()
                    .materialIncomingQuantity(i)
                    .materialOutgoingQuantity(i)
                    .materialStock(i)
                    .materialSupplyPrice((long) (i * 10))
                    .materialTotalInventoryPayments((long) i * 20)
                    .build();

            MaterialInventory result = materialInventoryRepository.save(materialInventory);

            log.info("Material_NO : " + result.getMaterialInventoryNo());

        });

    }

    @Test
    public void testMaterialInventorySelect() {

        int materialInventoryNo = 50;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);

    }

    @Test
    public void testMaterialInventoryUpdate() {

        int materialInventoryNo = 50;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(1,2,3, 4L,5L);

        materialInventoryRepository.save(materialInventory);

    }

    @Test
    public void testMaterialInventoryDelete() {

        int materialInventoryNo = 1;

        materialInventoryRepository.deleteById(materialInventoryNo);

    }

    @Test
    public void testMaterialInventorypaging() {

        Pageable pageable = PageRequest.of(0,10, Sort.by("materialNo").descending());

        Page<Materials> result = materialsRepository.findAll(pageable);

        log.info("total count : " + result.getTotalElements());
        log.info("total pages : " + result.getTotalPages());
        log.info("page number : " + result.getNumber());
        log.info("page size : " + result.getSize());

        List<Materials> todoList = result.getContent();

        todoList.forEach(materials -> log.info(materials));

    }

    @Test
    public void testSearch1() {

        Pageable pageable = PageRequest.of(1,10,Sort.by("materials.materialNo").descending());

        materialInventoryRepository.search1(pageable);

    }

    @Test
    public void testSearchAll() {

        String[] types = {"t","c","w"};

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10,Sort.by("materials.materialNo"));

        Page<MaterialInventory> result = materialInventoryRepository.searchAll(types, keyword, pageable);

        log.info(result.getTotalPages());

        log.info(result.getSize());

        log.info(result.getNumber());

        log.info(result.hasPrevious() + " : " + result.hasNext());

        result.getContent().forEach(materialInventory -> log.info(materialInventory));

    }

}
