package com.deligence.deli.repository;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialInventoryDTO;
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
public class MaterialInventoryRepositoryTests {

    @Autowired
    private MaterialInventoryRepository materialInventoryRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private MaterialProcurementPlanningRepository materialProcurementPlanningRepository;
    @Autowired
    private MaterialsRepository materialsRepository;

    @Test   //자재재고는 목록/상세만 존재. 등록이 없음.
    public void testInventoryInsert() {

        int materialNo = 1;
        int materialImageNo = 1;
        int orderNo = 1;
        int materialHistoryNo = 1;
        int documentFileNo = 1;

        IntStream.rangeClosed(1, 10).forEach(i -> {

            Materials materials = Materials.builder().materialNo(1).build();
            MaterialImage materialImage = MaterialImage.builder().materialImgNo(1).build();
            Order order = Order.builder().orderNo(1).build();
            MaterialInOutHistory materialInOutHistory = MaterialInOutHistory.builder().materialHistoryNo(1).build();
            DocumentFile documentFile = DocumentFile.builder().documentFileNo(1).build();

            MaterialInventory materialInventory = MaterialInventory.builder()
                    .materialIncomingQuantity(10)
                    .materialOutgoingQuantity(0)
                    .materialStock(10)
                    .materialSupplyPrice(10000L)
                    .materialTotalInventoryPayments(100000L)
                    .build();

            log.info(materialInventory);

            materialInventoryRepository.save(materialInventory);
        });

    }

    @Test
    public void testInventorySelect() {

        int materialInventoryNo = 10;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);

    }

    @Test
    public void testInOutSelect() {

        int orderNo = 10;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(orderNo);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);
    }

    @Test
    public void testInventoryUpdate() {
        int materialInventoryNo = 5;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(MaterialInventoryDTO.builder()
                .materialIncomingQuantity(200)
                .materialOutgoingQuantity(100)
                .materialStock(100)
                .materialSupplyPrice(10000L)
                .materialTotalInventoryPayments((1000000L))
                .build());

        materialInventoryRepository.save(materialInventory);
    }

    @Test
    public void testInventoryDelete() {

        int materialInventoryNo = 6;

        materialInventoryRepository.deleteById(materialInventoryNo);

    }

    //자재재고목록 페이징
    @Test
    public void testInventorypaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("materialInventoryNo").descending());

        Page<MaterialInventory> result = materialInventoryRepository.findAll(pageable);

        log.info("total count : " + result.getTotalElements());
        log.info("total pages : " + result.getTotalPages());
        log.info("page number : " + result.getNumber());
        log.info("page size : " + result.getSize());

        List<MaterialInventory> list = result.getContent();

        list.forEach(materialInventory -> log.info(materialInventory));

    }

    //재고 > 입고관리 목록 페이징
    @Test
    public void testInOutPaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("orderCode").descending());

        Page<MaterialInventory> result = materialInventoryRepository.findAll(pageable);

        log.info("total count : " + result.getTotalElements());
        log.info("total pages : " + result.getTotalPages());
        log.info("page number : " + result.getNumber());
        log.info("page size : " + result.getSize());

        List<MaterialInventory> list = result.getContent();

        list.forEach(materialInventory -> log.info(materialInventory));

    }
//------------------------------------------------------------

    //자재 재고 목록 search
    @Test
    public void testSearchInventory() {

        String[] types = {"c"};   // a:자재분류 b:자재코드 c:자재이름

        String keyword = "라이젠";

        Pageable pageable = PageRequest.of(0, 10, Sort.by("materialInventoryNo").descending());

        log.info(pageable);

        Page<MaterialInventory> result = materialInventoryRepository.searchInventory(types, keyword, pageable);

        //total pages
        log.info("pages : " + result.getTotalPages());

        //page size
        log.info("size : " + result.getSize());

        //pageNumber
        log.info("number : " + result.getNumber());

        //prev next
        log.info(result.hasPrevious() + " : " + result.hasNext());

        result.getContent().forEach(materialInventory -> log.info(materialInventory));

    }

    //재고 > 입고관리 목록 search
    @Test
    public void testSearchInOut() {

        String[] types = {"a"};   // a:발주코드 b:자재이름 c:담당자

        String keyword = "code";

        Pageable pageable = PageRequest.of(0, 10, Sort.by("materialInventoryNo").descending());

        log.info(pageable);

        Page<MaterialInventory> result = materialInventoryRepository.searchInventory(types, keyword, pageable);

        //total pages
        log.info("pages : " + result.getTotalPages());

        //page size
        log.info("size : " + result.getSize());

        //pageNumber
        log.info("number : " + result.getNumber());

        //prev next
        log.info(result.hasPrevious() + " : " + result.hasNext());

        result.getContent().forEach(materialInventory -> log.info(materialInventory));

    }


}



