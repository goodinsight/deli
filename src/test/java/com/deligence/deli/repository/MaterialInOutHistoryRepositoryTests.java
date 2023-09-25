package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialInOutHistory;
import com.deligence.deli.domain.MaterialInventory;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.stream.IntStream;

@Transactional
@SpringBootTest
@Log4j2
public class MaterialInOutHistoryRepositoryTests {

    @Autowired
    private MaterialInOutHistoryRepository materialInOutHistoryRepository;

    @Test
    public void testInsert() {

        materialInOutHistoryRepository.findAll();

        IntStream.rangeClosed(2, 10).forEach(i -> {

            MaterialInOutHistory meterialInOutHistory = MaterialInOutHistory.builder()
                    .inOutSeparator("IN")
                    .quantity(99 + i)
                    .employee(Employee.builder().employeeNo(i).build())
                    .materialInventory(MaterialInventory.builder().materialInventoryNo(i).build())
                    .build();

            MaterialInOutHistory result = materialInOutHistoryRepository.save(meterialInOutHistory);

            log.info("MaterialHistoryNo : " + result.getMaterialHistoryNo());

        });

    }


    @Test
    public void testSelect() {
        int materialHistoryNo = 1;

        Optional<MaterialInOutHistory> result = materialInOutHistoryRepository.findById(materialHistoryNo);

        MaterialInOutHistory materialInOutHistory = result.orElseThrow();

        log.info(materialInOutHistory);
    }



}
