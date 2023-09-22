package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialsDTO;
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
import java.util.Random;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2

public class MaterialInventoryRepositoryTests {

    @Autowired
    private MaterialInventoryRepository materialInventoryRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MaterialsRepository materialsRepository;

    @Test
    public void testMaterialInventoryInsert() {

        IntStream.rangeClosed(1, 100).forEach(i -> {

            MaterialInventory materialInventory = MaterialInventory.builder()
                    .materialIncomingQuantity(i)
                    .materialOutgoingQuantity(i)
                    .materialStock(i)
                    .materialSupplyPrice((long) (i * 10))
                    .materialTotalInventoryPayments((long) i * 20)
                    .materials(Materials.builder().materialNo(i).build())
                    .order(Order.builder().orderNo(14).build())
                    .materialName("name" + i)
                    .materialType("type" + i)
                    .materialCode("code" + i)
                    .build();

            MaterialInventory result = materialInventoryRepository.save(materialInventory);

            log.info("MaterialInventoryNo : " + result.getMaterialInventoryNo());

        });

    }

    @Test
    public void testMaterialInventorySelect() {

        int materialInventoryNo = 10;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);

    }

    @Test
    @Transactional
    public void testMaterialInventoryUpdate() {

        int materialInventoryNo = 10;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(1, 2, 3, 4L, 5L, "123", "123", "123");

        materialInventoryRepository.save(materialInventory);

    }

    @Test
    @Transactional
    public void testMaterialInventoryDelete() {

        int materialInventoryNo = 20;

        materialInventoryRepository.deleteById(materialInventoryNo);

    }

    @Test
    public void testMaterialInventorypaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("materialInventoryNo").descending());

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

        Pageable pageable = PageRequest.of(1, 10, Sort.by("materialInventoryNo").descending());

        materialInventoryRepository.materialStockListOne(pageable);

    }

    @Test
    public void testSearchAll() {

        String[] types = {"t", "c", "w"};

        String keyword = "cpu";

        Pageable pageable = PageRequest.of(0, 10, Sort.by("materialInventoryNo").descending());

        Page<MaterialInventory> result = materialInventoryRepository.materialStockList(types, keyword, pageable);

        log.info("페이지 : " + result.getTotalPages());

        log.info("사이즈 : " + result.getSize());

        log.info("넘버 : " + result.getNumber());

        log.info(result.hasPrevious() + " : " + result.hasNext());

        result.getContent().forEach(materialInventory -> log.info(materialInventory));

    }

    @Test
    public void testrequest() {

        List<Materials> list = materialsRepository.findAll();
        List<Order> list2 = orderRepository.findAll();
//        log.info(list);
//        log.info(list2);

        for (int i = 0; i < list2.size(); i++) {

            log.info(list.get(i).getMaterialNo());
            log.info(list.get(i).getMaterialName());
            log.info(list2.get(i).getOrderNo());
            log.info(list2.get(i).getMaterialName());

            Optional<Materials> result2 = materialsRepository.findById(list.get(i).getMaterialNo());
            log.info("result2 : " + result2);
            Optional<Order> result = materialInventoryRepository.findFristByOrderNo(list2.get(list2.size() - 1).getOrderNo());
            log.info("result : " + result);

            Materials materials = result2.orElseThrow();
            Order order = result.orElseThrow();

            log.info("materials : " + materials);

            log.info("oredr : " + order);

            MaterialInventory materialInventory = MaterialInventory.builder()
                    .materialIncomingQuantity(order.getOrderQuantity())
                    .materialOutgoingQuantity(100)
                    .materialStock(100)
                    .materialSupplyPrice(materials.getMaterialSupplyPrice())
                    .materialTotalInventoryPayments(100000L)
                    .materials(Materials.builder().materialNo(materials.getMaterialNo()).build())
                    .order(Order.builder().orderNo(order.getOrderNo()).build())
                    .materialCode(materials.getMaterialCode())
                    .materialName(materials.getMaterialName())
                    .materialType(materials.getMaterialType())
                    .build();

            materialInventoryRepository.save(materialInventory);

        }
    }
}



