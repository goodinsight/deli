package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorSupplier;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class CooperatorSupplierRepositoryTests {

    @Autowired
    private CooperatorSupplierRepository cooperatorSupplierRepository;

    //insert테스트 -> //localhost로 테스트 -> 학원가서 다시 테스트 할 것
    @Test
    public void testInsert() {
        IntStream.rangeClosed(1, 100).forEach(i -> {
            CooperatorSupplier cooperatorSupplier = CooperatorSupplier.builder()
                    .corporateRegistrationNo(i)
                    .supplierCeo("ceo.."+i)
                    .supplierEmail("email.."+i)
                    .supplierName("name.."+i)
                    .supplierPhone("phone.."+i)
                    .supplierAddress("address.."+i)
                    .supplierStatus("ready")
                    .build();

            CooperatorSupplier result = cooperatorSupplierRepository.save(cooperatorSupplier);
            log.info("C_S_NO : " + result.getSupplierNo());
        });
    }


}
