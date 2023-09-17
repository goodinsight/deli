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
            MaterialProcurementPlanning materialProcurementPlanning = MaterialProcurementPlanning.builder()
                    .procurement_delivery_date(LocalDate.of(2023, 11,15))
                    .material_requirements_count(i)
                    .material_procurement_state("procurement_state..."+i)
                    .build();

            MaterialProcurementPlanning result =
                    materialProcurementPlanningRepository.save(materialProcurementPlanning);
            log.info("M_P_P_NO: " + result.getMaterial_procurement_plan_no());

        });
    }

    @Test //select 테스트 -> localhostDB로 테스트. 학원가서 다시 할 것
    public void testSelect() {
        int material_procurement_plan_no = 100;

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(material_procurement_plan_no);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        log.info(materialProcurementPlanning);

    }

    @Test //update 테스트 ->  localhostDB로 테스트. 학원가서 다시 할 것
    public void testUpdate() {

        int material_procurement_plan_no = 100;

        Optional<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findById(material_procurement_plan_no);

        MaterialProcurementPlanning materialProcurementPlanning = result.orElseThrow();

        materialProcurementPlanning.change(LocalDate.of(2023,10,19),
                200, "ing");

        materialProcurementPlanningRepository.save(materialProcurementPlanning);

    }

    @Test   //delete 테스트 -> localhostDB로 테스트. 학원가서 다시할 것
    public void testDelete() {
        int material_procurement_plan_no = 1;

        materialProcurementPlanningRepository.deleteById(material_procurement_plan_no);
    }

    @Test   //paging 테스트 실패 (속성 없음)-> localhostDB로 테스트. 학원가서 다시 할 것
    //No property 'procurement' found for type 'Materials'; Traversed path: MaterialProcurementPlanning.material
    public void testPaging() {

        //1 page order by m_p_p_no desc
        Pageable pageable = PageRequest.of(1,10);
//                Sort.by("material_procurement_plan_no").descending());
        //오류 원인 : material_procurement_plan_no를 매핑할 때 material로 인식,,

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.findAll(pageable);    //오류 발생

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number: " + result.getNumber());
        log.info("page size: " + result.getSize());

        List<MaterialProcurementPlanning> todoList = result.getContent();

        todoList.forEach(materialProcurementPlanning -> log.info(materialProcurementPlanning));

    }

    //Q도메인을 이용한 쿼리 작성 테스트 ->  localhostDB로 테스트. 학원가서 다시 할 것
    //SearchImpl에서 paging처리 코드 추가하면 오류 뜸.
    @Test
    public void testSearch1() {

        //2 page order by m_p_p_no desc
        Pageable pageable = PageRequest.of(1,10);
//                Sort.by("material_procurement_plan_no").descending());

        materialProcurementPlanningRepository.search1(pageable);
    }

    @Test
    public void testSearchAll() {

        //키워드 m:자재코드 n:자재이름 d:납기일 c:자재소요량 s:조달계약상태
        String[] types = {"m", "n", "d", "c", "s"};

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10);
//                Sort.by("material_procurement_plan_no").descending();

        Page<MaterialProcurementPlanning> result =
                materialProcurementPlanningRepository.searchAll(types, keyword, pageable);

    }

    //page 관련 정보 추출
    @Test
    public void testSearchAll2() {

        //키워드 m:자재코드 n:자재이름 d:납기일 c:자재소요량 s:조달계약상태
        String[] types = {"m", "n", "d", "c", "s"};

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10);
//                Sort.by("material_procurement_plan_no").descending();

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
