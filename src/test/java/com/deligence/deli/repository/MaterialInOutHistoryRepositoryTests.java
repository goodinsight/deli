package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialInOutHistory;
import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.dto.MaterialInOutHistoryDetailDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.stream.IntStream;


@SpringBootTest
@Log4j2
public class MaterialInOutHistoryRepositoryTests {

    @Autowired
    private MaterialInOutHistoryRepository materialInOutHistoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Test
    public void testInsert() {

        materialInOutHistoryRepository.findAll();

        IntStream.rangeClosed(1, 10).forEach(i -> {

            MaterialInOutHistory materialInOutHistory = MaterialInOutHistory.builder()
                    .inOutSeparator("IN")
                    .quantity(99 + i)
                    .employee(Employee.builder().employeeNo(i).build())
                    .materialInventory(MaterialInventory.builder().materialInventoryNo(i).build())
                    .build();

            MaterialInOutHistory result = materialInOutHistoryRepository.save(materialInOutHistory);

            log.info("MaterialHistoryNo : " + result.getMaterialHistoryNo());

        });

    }



    @Test
    @Transactional
    public void testSelect() {

        int materialHistoryNo = 5;


        Optional<MaterialInOutHistory> result = materialInOutHistoryRepository.findById(materialHistoryNo);

        log.info(result);

        MaterialInOutHistory materialInOutHistory = result.orElseThrow();

        log.info(materialInOutHistory);
    }


    @Test
    @Transactional
    public void testSelectOne() {

        int materialHistoryNo = 10;


        Optional<MaterialInOutHistory> result = materialInOutHistoryRepository.findById(materialHistoryNo);

        log.info(result);

        MaterialInOutHistory materialInOutHistory = result.orElseThrow();

        log.info(materialInOutHistory);

        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = modelMapper.map(materialInOutHistory, MaterialInOutHistoryDetailDTO.class);

        log.info(materialInOutHistoryDetailDTO);
    }


}
