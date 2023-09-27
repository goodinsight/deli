package com.deligence.deli.repository;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import jdk.swing.interop.LightweightContentWrapper;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialProcurementPlanningRepositoryTests {

    @Autowired
    private MaterialProcurementPlanningRepository materialProcurementPlanningRepository;


    @Test //insert 테스트
    public void testInsert() {

        int productionPlanNo = 1;
        int materialNo = 1;
        int employeeNo = 2;

        IntStream.rangeClosed(1,10).forEach(i -> {

            ProductionPlanning productionPlanning = ProductionPlanning.builder().productionPlanNo(1).build();
            Materials materials = Materials.builder().materialNo(1).build();
            Employee employee = Employee.builder().employeeNo(1).build();

            MaterialProcurementPlanning materialProcurementPlanning =
                    MaterialProcurementPlanning.builder()
                    .procurementDeliveryDate(LocalDate.of(2023, 11,15))
                    .materialRequirementsCount(i)
                    .materialProcurementState("procurementState..."+i)
                    .materialCode("materialCode.."+i)
                    .materialName("materialName.."+i)
                    .build();

            MaterialProcurementPlanning result =
                    materialProcurementPlanningRepository.save(materialProcurementPlanning);

            log.info("M_P_P_NO: " + result.getMaterialProcurementPlanNo());

        });
    }

    @Test //select 테스트
    public void testSelect() {
        int materialProcurementPlanNo = 100;

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(materialProcurementPlanNo);

        MaterialProcurementPlanning materialProcurementPlanning =
                result.orElseThrow();

        log.info(materialProcurementPlanning);

    }

    @Test //update 테스트
    public void testUpdate() {

        int materialProcurementPlanNo = 1;

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(materialProcurementPlanNo);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        //수정내역: 납기일,자재소요랑,자재조달상태
        materialProcurementPlanning.change(MaterialProcurementPlanningDTO.builder()
                .procurementDeliveryDate(LocalDate.of(2023, 9,22))
                .materialRequirementsCount(2)
                .materialProcurementState("procurementState2")
                .materialCode("materialCode2")
                .materialName("materialName2")
                .build());

        materialProcurementPlanningRepository.save(materialProcurementPlanning);

    }

    @Test   //delete 테스트
    public void testDelete() {
        int materialProcurementPlanNo = 1;

        materialProcurementPlanningRepository.deleteById(materialProcurementPlanNo);
    }

    @Test   //paging 테스트
    public void testPaging() {

        //1 page order by m_p_p_no desc
        Pageable pageable = PageRequest.of(1,10,
                Sort.by("materialProcurementPlanNo").descending());

        log.info(pageable);

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number: " + result.getNumber());
        log.info("page size: " + result.getSize());

        List<MaterialProcurementPlanning> todoList = result.getContent();

        todoList.forEach(materialProcurementPlanning -> log.info(materialProcurementPlanning));

    }

    @Test
    public void testSearch1() {

        //2 page order by m_p_p_no desc
        Pageable pageable = PageRequest.of(1,10,
                Sort.by("materialProcurementPlanNo").descending());

        materialProcurementPlanningRepository.search1(pageable);
    }

    @Test   //검색 키워드 테스트  -> localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testSearchAll() {

        //키워드 a:조달계획일련번호 b:자재코드 c:자재이름 d:납기일 e:자재소요량 f:조달계약상태
        String[] types = {"a", "b", "c", "d", "e", "f"};

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10,
                Sort.by("materialProcurementPlanNo").descending());

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.searchAll(types, keyword, pageable);

        //total pages
        log.info(result.getTotalPages());

        //page size
        log.info(result.getSize());

        //page number
        log.info(result.getNumber());

        //prev next
        log.info(result.hasPrevious() + ": " + result.hasNext());

        result.getContent().forEach(materialProcurementPlanning ->
                log.info(materialProcurementPlanning));

    }

    @Test
    public void testCodeCount() {

        String code = "MP-PLANNING-20230922-";

        int result = materialProcurementPlanningRepository.getCodeCount(code);

        log.info("num : " + result);

    }

    //조달계획상세(연관발주목록)테스트
    @Test
    public void orderList() {

        Pageable pageable = PageRequest.of(0,10);

        List<Order> result = materialProcurementPlanningRepository.orderList(10);

        log.info(result);


    }


}
