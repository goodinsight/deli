package com.deligence.deli.repository;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialProcurementContractDTO;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import javax.persistence.Lob;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialProcurementContractRepositoryTests {

    @Autowired
    private MaterialProcurementContractRepository materialProcurementContractRepository;

    @Test
    public void testInsert() {

        int materialProcurementPlanNo = 10;
        int supplierNo = 1;
        int employeeNo = 2;

        IntStream.rangeClosed(1,10).forEach(i -> {

            CooperatorSupplier cooperatorSupplier = CooperatorSupplier.builder().supplierNo(1).build();
            Employee employee = Employee.builder().employeeNo(2).build();

            MaterialProcurementContract materialProcurementContract = MaterialProcurementContract.builder()
                    .materialProcurementContractCode("contractCode..."+i)
                    .materialProcurementContractDate(LocalDate.of(2023, 9,27))
                    .materialProcurementContractState("조달진행중")        //조달진행중, 계약파기, 조달완료
                    .materialProcurementContractEtc("Etc"+i)
//                    .materialProcurementPlanning(MaterialProcurementPlanning.builder().materialProcurementPlanNo(10).build())
                    .materialProcurementPlanCode("MP-PLANNING-20230927-"+i)
                    .materialCode("MATERIAL-20231002-"+i)
                    .materialName("materialName"+i)
                    .materialSupplyPrice(10000L)
                    .procurementQuantity(i*10)
//                    .cooperatorSupplier(CooperatorSupplier.builder().corporateRegistrationNo(2).build())
                    .supplierName("supplierName"+i)
                    .supplierStatus("계약중")  //계약중, 계약파기, 계약완료
//                    .employee(Employee.builder().employeeNo(2).build()) //자재조달계약담당 : 2번, 혜인
                    .employeeName("혜인")
                    .documentFile(DocumentFile.builder().documentFileNo(2).build())
                    .build();

            log.info(materialProcurementContract);

            MaterialProcurementContract result =
                    materialProcurementContractRepository.save(materialProcurementContract);

            log.info("M_P_C_NO : " + result.getMaterialProcurementContractNo());
        });
    }

    @Test
    public void testSelect() {

        int materialProcurementContractNo = 100;

        Optional<MaterialProcurementContract> result =
                materialProcurementContractRepository.findById(materialProcurementContractNo);

        MaterialProcurementContract materialProcurementContract = result.orElseThrow();

        log.info(materialProcurementContract);

    }

    @Test
    public void testUpdate() {

        int materialProcurementContractNo = 10;

        Optional<MaterialProcurementContract> result =
                materialProcurementContractRepository.findById(materialProcurementContractNo);

        MaterialProcurementContract materialProcurementContract = result.orElseThrow();

        materialProcurementContract.change(MaterialProcurementContractDTO.builder()
                .materialProcurementContractCode("MP-CONTRACT-20231002-update")
                .materialProcurementContractDate(LocalDate.of(2023, 9,22))
                .materialProcurementContractState("NOTYET")
                .materialProcurementContractEtc("Etc2")
                .procurementQuantity(100)
                .build());

        materialProcurementContractRepository.save(materialProcurementContract);

    }

    //delete test
    @Test
    public void testDelete() {

        int materialProcurementContractNo = 1;

        materialProcurementContractRepository.deleteById(materialProcurementContractNo);

    }

    //paging test
    @Test
    public void testPaging() {

        Pageable pageable = PageRequest.of(0,10,
                Sort.by("materialProcurementContractNo").descending());

        log.info(pageable);

        Page<MaterialProcurementContract> result =
                materialProcurementContractRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number: " + result.getNumber());
        log.info("page size: " + result.getSize());

//        List<MaterialProcurementContract> todoList = result.getContent();
        List<MaterialProcurementContract> list = result.getContent();

//        todoList.forEach(materialProcurementContract -> log.info(materialProcurementContract));
        list.forEach(log::info);
    }

    //search test
    @Test
    public void testSearch1() {

        Pageable pageable = PageRequest.of(1,10,
                Sort.by("materialProcurementContractNo").descending());

        materialProcurementContractRepository.search1(pageable);

    }

    //searchAll test
    @Test
    public void testSearchAll() {

        String[] types = {"a", "b", "c", "d", "e", "f"};
        //a: 계획코드, b:자재코드, c:자재이름, d:공급단가, e:납품업체명, f:자재조달계약상태

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10,
                Sort.by("materialProcurementContractNo").descending());

        Page<MaterialProcurementContract> result =
                materialProcurementContractRepository.searchAll(types, keyword, pageable);

        //total pages
        log.info(result.getTotalPages());

        //page size
        log.info(result.getSize());

        //page Number
        log.info(result.getNumber());

        //prev next
        log.info(result.hasPrevious() + ": " + result.hasNext());

//        result.getContent().forEach(materialProcurementContract -> log.info(materialProcurementContract));
        result.getContent().forEach(log::info);

    }

    @Test
    public void testCodeCount() {

        String code = "MP-CONTRACT-20230922-";

        int result = materialProcurementContractRepository.getCodeCount(code);

        log.info("num : " + result);

    }

}
