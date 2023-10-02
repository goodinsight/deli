package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.dto.CooperatorClientDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.parameters.P;

import javax.persistence.Table;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class CooperatorClientRepositoryTests {

    @Autowired
    private CooperatorClientRepository cooperatorClientRepository;

    @Test
    public void testInsert(){ //추가
        IntStream.rangeClosed(1,10).forEach(i -> {
            CooperatorClient cooperatorClient = CooperatorClient.builder()
                    .corporateRegistrationNo(1234567891)
                    .clientCeo("대표명")
                    .clientEmail("test.com")
                    .clientName("testName")
                    .clientPhone("010-1111-1111")
                    .clientAddress("서울시")
                    .clientStatus("계약중")
                    .build();

            CooperatorClient result = cooperatorClientRepository.save(cooperatorClient);
            log.info("clientNo: " + result.getClientNo());
        });

    }

    @Test
    public void testSelect(){ //단일조회
        int clientNo = 3;

        Optional<CooperatorClient> result = cooperatorClientRepository.findById(clientNo);

        CooperatorClient cooperatorClient = result.orElseThrow();

        log.info(cooperatorClient);
    }

    @Test
    public void testUpdate() { //수정

        int clientNo = 2;

        Optional<CooperatorClient> result = cooperatorClientRepository.findById(clientNo);

        CooperatorClient cooperatorClient = result.orElseThrow();

        cooperatorClient.change(CooperatorClientDTO.builder()
                        .corporateRegistrationNo(987654321)
                        .clientCeo("대표자명")
                        .clientEmail(".com")
                        .clientName("test")
                        .clientPhone("010-2222-2222")
                        .clientAddress("서울")
                        .clientEtc("clientEtc")
                .build());

        cooperatorClientRepository.save(cooperatorClient);
    }

    @Test
    public void testDelete(){ //삭제
        int clientNo = 11;

        cooperatorClientRepository.deleteById(clientNo);
    }

    @Test
    public void testPaging() { //페이징

        Pageable pageable = PageRequest.of(0,10, Sort.by("clientNo").descending());

        Page<CooperatorClient> result = cooperatorClientRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number: " + result.getNumber());
        log.info("page size: " + result.getSize());

        List<CooperatorClient> todoList = result.getContent();

        todoList.forEach(cooperatorClient -> log.info(cooperatorClient));
    }


    @Test
    public void testSearchAll() { //검색 + 페이징

        String[] types = {"n", "s"};

        String keyword = "대표자명";

        Pageable pageable = PageRequest.of(0,10,Sort.by("clientNo").descending());

        Page<CooperatorClient> result = cooperatorClientRepository.searchAll(types, keyword, pageable);

        //total pages
        log.info(result.getTotalPages());

        //pag size
        log.info(result.getSize());

        //pageNumber
        log.info(result.getNumber());

        //prev next
        log.info(result.hasPrevious() +": " + result.hasNext());

        result.getContent().forEach(cooperatorClient -> log.info(cooperatorClient));
    }
}
