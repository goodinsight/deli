package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2

public class MaterialInventoryRepositoryTests {

    @Autowired
    private MaterialInventoryRepository materialInventoryRepository;


    @Test
    public void testMaterialInventoryInsert() {

        IntStream.rangeClosed(1, 50).forEach(i -> {

            MaterialInventory materialInventory = MaterialInventory.builder()
                    .materialIncomingQuantity(i)
                    .materialOutgoingQuantity(i)
                    .materialStock(i)
                    .materialSupplyPrice((long) (i * 10))
                    .materialTotalInventoryPayments((long) i * 20)
                    .materials(Materials.builder().materialNo(i).build())
                    .order(Order.builder().orderNo(21).build())
                    .build();

            MaterialInventory result = materialInventoryRepository.save(materialInventory);

            log.info("MaterialInventoryNo : " + result.getMaterialInventoryNo());

        });

    }

    @Test
    @Transactional
    public void testMaterialInventorySelect() {

        int materialInventoryNo = 10;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);

    }

    @Test
    @Transactional
    public void testMaterialInventoryUpdate() {

        int materialInventoryNo = 20;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(1,2,3, 4L,5L);

        materialInventoryRepository.save(materialInventory);

    }

    @Test
    public void testMaterialInventoryDelete() {

        int materialInventoryNo = 20;

        materialInventoryRepository.deleteById(materialInventoryNo);

    }

    @Test
    public void testMaterialInventorypaging() {

        Pageable pageable = PageRequest.of(0,10, Sort.by("materialInventoryNo").descending());

        Page<MaterialInventory> result = materialInventoryRepository.findAll(pageable);

        log.info("total count : " + result.getTotalElements());
        log.info("total pages : " + result.getTotalPages());
        log.info("page number : " + result.getNumber());
        log.info("page size : " + result.getSize());

        List<MaterialInventory> todoList = result.getContent();

        todoList.forEach(materialInventory -> log.info(materialInventory));

    }

    @Test
    public void testSearch1() {

        Pageable pageable = PageRequest.of(1,10,Sort.by("materialInventoryNo").descending());

        materialInventoryRepository.materialStockListOne(pageable);

    }

    @Test
    public void testSearchAll() {

        String[] types = {"t","c","w"};

        String keyword = "cpu";

        Pageable pageable = PageRequest.of(0,10,Sort.by("materialInventoryNo").descending());

        Page<MaterialInventory> result = materialInventoryRepository.materialStockList(types, keyword, pageable);

        log.info("페이지 : "+result.getTotalPages());

        log.info("사이즈 : "+result.getSize());

        log.info("넘버 : "+result.getNumber());

        log.info(result.hasPrevious() + " : " + result.hasNext());

        result.getContent().forEach(materialInventory -> log.info(materialInventory));

    }

}
