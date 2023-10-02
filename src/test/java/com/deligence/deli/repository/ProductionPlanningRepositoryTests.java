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

        IntStream.rangeClosed(1,10).forEach(i -> {

            ProductionPlanning productionPlanning = ProductionPlanning.builder()
                    .productionPlanCode("PD-PLANNING-"+i)
                    .productionQuantity(i*100)
                    .productionRequirementsDate(i*10)
                    .productionRequirementsProcess("process..."+i)
                    .productionDeliveryDate(LocalDate.of(2023,10,27))
                    .detailExplaination("explaination..."+i)
                    .productionState("제품입고완료")
                    //-자재조달단계, 자재입고단계, 제품생산단계, 제품검수단계, 제품입고완료
                    .productContract(ProductContract.builder().productContractNo(10).build())
                    .productCode("PD-CONTRACT-20230928-50")
//                    .clientName(ProductContract.builder().productContractNo(50).build().getClientName())   //클라이언트회사명
                    .clientName("clientName...")   //클라이언트회사명
//                    .productDeliveryDate(ProductContract.builder().productContractNo(50).build().getProductContractDate())
                    .productDeliveryDate(LocalDate.of(2023,11,10))
//                    .clientStatus(ProductContract.builder().productContractNo(50).build().getClientStatus())
                    .clientStatus("계약중")
                    .materialRequirementsList(MaterialRequirementsList.builder().materialRequirementsListNo(1).build())
                    .employee(Employee.builder().employeeNo(28).build())
                    .employeeName("윈터")    //계약담당자
                    .employeeName2("카리나")    //생산계획담당자
                    .build();

            ProductionPlanning result = productionPlanningRepository.save(productionPlanning);

            log.info("productionPlanNo: " + result.getProductionPlanNo());
        });

    }

    @Test
    public void testSelect() {

        int productionPlanNo = 215;

        Optional<ProductionPlanning> result = productionPlanningRepository.findById(productionPlanNo);

        ProductionPlanning productionPlanning = result.orElseThrow();

        log.info(productionPlanning);

    }

    @Test
    public void testUpdate() {

        int productionPlanNo = 215;

        Optional<ProductionPlanning> result = productionPlanningRepository.findById(productionPlanNo);

        ProductionPlanning productionPlanning = result.orElseThrow();

        productionPlanning.change(ProductionPlanningDTO.builder()
                .productionPlanCode("PD-PLANNING-Mod")
                .productionQuantity(1000)
                .productionRequirementsDate(10)
                .productionRequirementsProcess("modifyProcess...")
                .productionDeliveryDate(LocalDate.of(2023,10,5))
                .detailExplaination("modifyExplaination...")
                .productionState("제품생산단계")
                .build());

        productionPlanningRepository.save(productionPlanning);

    }

    @Test
    public void testDelete(){

        int productionPlanNo = 18;

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
        //a:생산계획코드 b:제품코드 c:클라이언트 회사명 d:납기일 e:클라이언트계약상태 f:계약담당자
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

    //생산계획상세(연관조달계획목록)테스트 (-> 현재 3번만 사용함. 조달계획에서 다른 번호도 넣은 후 테스트 해 볼것.)
    @Test
    public void procurementPlanList() {

        Pageable pageable = PageRequest.of(0,10);

        List<MaterialProcurementPlanning> result = productionPlanningRepository.procurementPlanList(3);

        log.info(result);


    }
}
