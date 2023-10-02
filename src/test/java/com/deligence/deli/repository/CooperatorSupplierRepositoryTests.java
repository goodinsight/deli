package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.dto.CooperatorSupplierDTO;
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
public class CooperatorSupplierRepositoryTests {

    @Autowired
    private CooperatorSupplierRepository cooperatorSupplierRepository;

    @Test
    public void testInsert() {
        IntStream.rangeClosed(1, 10).forEach(i -> {
            CooperatorSupplier cooperatorSupplier = CooperatorSupplier.builder()
                    .corporateRegistrationNo(i)
                    .supplierCeo("ceo.."+i)
                    .supplierEmail("email.."+i)
                    .supplierName("name.."+i)
                    .supplierPhone("phone.."+i)
                    .supplierAddress("address.."+i)
                    .supplierStatus("계약완료")  //계약중, 계약파기, 계약완료
                    .supplierEtc("테스트중")
                    .build();

            CooperatorSupplier result = cooperatorSupplierRepository.save(cooperatorSupplier);
            log.info("C_S_NO : " + result.getSupplierNo());
        });
    }

    @Test
    public void testSelect() {

        int supplierNo = 1;

        Optional<CooperatorSupplier> result = cooperatorSupplierRepository.findById(supplierNo);

        CooperatorSupplier cooperatorSupplier = result.orElseThrow();

        log.info(cooperatorSupplier);

    }

    @Test
    public void testUpdate() {

        int supplierNo = 1;

        Optional<CooperatorSupplier> result = cooperatorSupplierRepository.findById(supplierNo);

        CooperatorSupplier cooperatorSupplier = result.orElseThrow();

        cooperatorSupplier.change(CooperatorSupplierDTO.builder()
                .supplierEtc("updateEtc")
                .build());

        cooperatorSupplierRepository.save(cooperatorSupplier);

    }

    @Test
    public void testPaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("supplierNo").descending());

        log.info(pageable);

        Page<CooperatorSupplier> result = cooperatorSupplierRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page  number: " + result.getNumber());
        log.info("page  size: " + result.getSize());

        List<CooperatorSupplier> list = result.getContent();

        list.forEach(log::info);

    }

    @Test
    public void testSearch() {

        //a:회사명 b:대표명 c:주소명 +계약상태별도
        String[] types = {"c"};

        String keyword = "경기도";

        Pageable pageable = PageRequest.of(1, 10, Sort.by("supplierNo").descending());

        log.info(pageable);

        Page<CooperatorSupplier> result = cooperatorSupplierRepository.search(types, keyword, pageable);

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


}
