package com.deligence.deli.repository;

import ch.qos.logback.core.net.server.Client;
import com.deligence.deli.domain.*;
import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.ProductContractDTO;
import com.deligence.deli.dto.ProductContractDetailDTO;
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
public class ProductContractRepositoryTests {

    @Autowired
    private ProductContractRepository productContractRepository;

    @Test
    public void testInsert() {

        int employeeNo = 28;

        IntStream.rangeClosed(1,5).forEach(i -> {

//            Employee employee = Employee.builder().employeeNo(28).build();
//            Products products = Products.builder().productNo(1).build();
//            CooperatorClient cooperatorClient = CooperatorClient.builder().clientNo(1).build();
//            DocumentFile documentFile = DocumentFile.builder().documentFileNo(1).build();

            ProductContract productContract = ProductContract.builder()
                    .productContractCode("tmpCode..."+i)
                    .products(Products.builder().productNo(1).build())
                    .productCode("productCode"+i)
                    .productQuantity(i)
                    .productContractDate(LocalDate.now())
                    .productDeliveryDate(LocalDate.of(2023,10,12))
                    .productQuotation("quotation"+i)
                    .productContractState("제품입고완료")
                    //'자재검토중', '자재조달중', '제품생산중', 제품입고완료'
                    .cooperatorClient(CooperatorClient.builder().clientNo(1).build())
                    .clientName("clientName1")
                    .clientStatus("계약중")
                    .employee(Employee.builder().employeeNo(28).build())
                    .employeeName("윈터")
                    .documentFile(DocumentFile.builder().documentFileNo(1).build())
                    .build();

            log.info(productContract);

            productContractRepository.save(productContract);

        });

    }

    @Test
    public void testSelect() {

        int productContractNo = 2;

        Optional<ProductContract> result = productContractRepository.findById(productContractNo);

        ProductContract productContract = result.orElseThrow();

        log.info(productContract);
    }

    @Test
    public void testUpdate() {

        int productContractNo = 2;

        Optional<ProductContract> result = productContractRepository.findById(productContractNo);

        ProductContract productContract = result.orElseThrow();

        productContract.change(ProductContractDTO.builder()
                .productContractCode("modifyCode...")
                .productQuantity(100)
                .productDeliveryDate(LocalDate.of(2023, 10, 19))
                .productQuotation("modifyQuotation")
                .productContractState("자재조달중")
                .build());

        productContractRepository.save(productContract);

    }

    @Test
    public void testDelete(){

        int productContractNo = 18;

        productContractRepository.deleteById(productContractNo);

    }

    @Test
    public void testPaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("productContractNo").descending());

        log.info(pageable);

        Page<ProductContract> result = productContractRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page  number: " + result.getNumber());
        log.info("page  size: " + result.getSize());

        List<ProductContract> list = result.getContent();

        list.forEach(log::info);

    }

    @Test
    public void testSearch() {

        String[] types = {"a"}; //a:제품계약코드 b:제품코드 c:회사명 d:계약일 e:클라이언트계약상태 +계약진행상태별도

        String keyword = "code";

        Pageable pageable = PageRequest.of(1, 10, Sort.by("productContractNo").descending());

        log.info(pageable);

        Page<ProductContract> result = productContractRepository.search(types, keyword, pageable);

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

        String code = "PC-20230928-";

        int result = productContractRepository.getCodeCount(code);

        log.info("num : " + result);

    }

}
