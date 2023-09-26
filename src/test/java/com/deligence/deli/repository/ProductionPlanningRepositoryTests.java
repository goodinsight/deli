package com.deligence.deli.repository;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
import lombok.AllArgsConstructor;
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
public class ProductionPlanningRepositoryTests {

    @Autowired
    private ProductionPlanningRepository productionPlanningRepository;

    @Test
    public void testInsert() {

        int productContractNo = 1;

        IntStream.rangeClosed(1,10).forEach(i -> {

            ProductContract productContract = ProductContract.builder().productContractNo(1).build();

            ProductionPlanning productionPlanning = ProductionPlanning.builder()
                    .productionPlanCode("PD-PLANNING")
                    .productionQuantity(10)
                    .productionRequirementsDate(10)
                    .productionRequirementsProcess("process...")
                    .productionDeliveryDate(LocalDate.of(2023,9,27))
                    .detailExplaination("explaination...")
                    .productCode("productCode"+i)
                    .productDeliveryDate(LocalDate.of(2023,11,15))
                    .clientName("client"+i)
                    .clientStatus("계약중")
                    .build();

            ProductionPlanning result = productionPlanningRepository.save(productionPlanning);

            log.info("productionPlanNo: " + result.getProductionPlanNo());
        });

    }

    @Test
    public void testSelect() {

        int productionPlanNo = 20;

        Optional<ProductionPlanning> result = productionPlanningRepository.findById(productionPlanNo);

        ProductionPlanning productionPlanning = result.orElseThrow();

        log.info(productionPlanning);

    }

    @Test
    public void testUpdate() {

        int productionPlanNo = 20;

        Optional<ProductionPlanning> result = productionPlanningRepository.findById(productionPlanNo);

        ProductionPlanning productionPlanning = result.orElseThrow();

        productionPlanning.change(ProductionPlanningDTO.builder()
                .productionPlanCode("PD-PLANNING")
                .productionQuantity(123)
                .productionRequirementsDate(7)
                .productionRequirementsProcess("modifyProcess...")
                .productionDeliveryDate(LocalDate.of(2023,9,26))
                .detailExplaination("modifyExplaination...")
                .productContractNo(3)
                .productCode("modifyProductCode")
                .productDeliveryDate(LocalDate.of(2023,11,1))
                .clientName("modifyClient")
                .clientStatus("계약중")
                .build());

        productionPlanningRepository.save(productionPlanning);

    }

    @Test
    public void testDelete(){

        int productionPlanNo = 43;

        productionPlanningRepository.deleteById(productionPlanNo);

    }

    @Test
    public void testPaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("productionPlanCode").descending());

        log.info(pageable);

        Page<ProductionPlanning> result = productionPlanningRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page  number: " + result.getNumber());
        log.info("page  size: " + result.getSize());

        List<ProductionPlanning> list = result.getContent();

        list.forEach(log::info);

    }

    @Test
    public void testSearch() {
        //a:생산계획코드 b:제품코드 c:클라이언트 회사명 d:납기일 e:계약상태
        String[] types = {"a"};

        String keyword = "code";

        Pageable pageable = PageRequest.of(1, 10, Sort.by("productionPlanNo").descending());

        log.info(pageable);

        Page<ProductionPlanning> result = productionPlanningRepository.search(types, keyword, pageable);

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

    @Test
    public void testCodeCount() {

        String code = "PD-PLANNING-20230926-";

        int result = productionPlanningRepository.getCodeCount(code);

        log.info("num : " + result);

    }
}
