package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialProcurementPlanning;
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
        IntStream.rangeClosed(1,100).forEach(i -> {
            MaterialProcurementPlanning materialProcurementPlanning =
                    MaterialProcurementPlanning.builder()
                    .procurementDeliveryDate(LocalDate.of(2023, 11,15))
                    .materialRequirementsCount(i)
                    .materialProcurementState("procurementState..."+i)
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

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        log.info(materialProcurementPlanning);

    }

    @Test //update 테스트
    public void testUpdate() {

        int materialProcurementPlanNo = 100;

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(materialProcurementPlanNo);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        materialProcurementPlanning.change("123", LocalDate.of(2023,10,19),
                200, "ing");

        materialProcurementPlanningRepository.save(materialProcurementPlanning);

    }

    @Test   //delete 테스트
    public void testDelete() {
        int materialProcurementPlanNo = 1;

        materialProcurementPlanningRepository.deleteById(materialProcurementPlanNo);
    }

    @Test   //paging 테스트 실패 (속성 없음)-> localhostDB로 테스트. 학원가서 다시 할 것
    public void testPaging() {

        //1 page order by m_p_p_no desc
        Pageable pageable = PageRequest.of(1,10,
                Sort.by("materialProcurementPlanNo").descending()); //오류 발생

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number: " + result.getNumber());
        log.info("page size: " + result.getSize());

        List<MaterialProcurementPlanning> todoList = result.getContent();

        todoList.forEach(materialProcurementPlanning -> log.info(materialProcurementPlanning));

    }

    //Q도메인을 이용한 쿼리 작성 테스트
    //SearchImpl에서 paging처리 코드 추가하면 오류 뜸. -> Entity 속성명 캐멀방식으로 변경 후 오류처리완료.
    @Test
    public void testSearch1() {

        //2 page order by m_p_p_no desc
        Pageable pageable = PageRequest.of(1,10,
                Sort.by("materialProcurementPlanNo").descending());

        materialProcurementPlanningRepository.search1(pageable);
    }

    @Test   //검색 키워드 테스트  -> localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testSearchAll() {

        //키워드 m:자재코드 n:자재이름 d:납기일 c:자재소요량 s:조달계약상태
        String[] types = {"m", "n", "d", "c", "s"};

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10,
                Sort.by("materialProcurementPlanNo").descending());

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.searchAll(types, keyword, pageable);

    }

    //page 관련 정보 추출
    @Test  //localhost로 테스트 -> 학원가서 다시 테스트 할 것
    public void testSearchAll2() {

        //키워드 m:자재코드 n:자재이름 d:납기일 c:자재소요량 s:조달계약상태
        String[] types = {"m", "n", "d", "c", "s"};

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

        result.getContent().forEach(materialProcurementPlanning -> log.info(materialProcurementPlanning));

    }


}
