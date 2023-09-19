package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.MeterialInOutHistory;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialInOutHistoryRepositoryTests {

    @Autowired
    private MaterialInOutHistoryRepository materialInOutHistoryRepository;

    @Test
    public void testInsert() {

        materialInOutHistoryRepository.findAll();

        IntStream.rangeClosed(1, 50).forEach(i -> {

            MeterialInOutHistory meterialInOutHistory = MeterialInOutHistory.builder()
                    .inOutSeparator("kwon")
                    .quantity(100 + i)
                    .employee(Employee.builder().employeeNo(i).build())
                    .build();

            MeterialInOutHistory result = materialInOutHistoryRepository.save(meterialInOutHistory);

            log.info("MaterialHistoryNo : " + result.getMaterialHistoryNo());

        });

    }

}
