package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProgressInspection;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ProgressInspectionRepositoryTests {

    @Autowired
    private ProgressInspectionRepository progressInspectionRepository;

    @Test
    public void insert() {

        IntStream.rangeClosed(1, 3).forEach(i -> {

            ProgressInspection progressInspection = ProgressInspection.builder()
                    .progressInspectionDate(LocalDate.now())
                    .progressInspectionTimes(i)
                    .progressInspectionEtc("비고 ")
                    .rateOfProgress(10.0F)
                    .progressInspectionState("READY")
                    .order(Order.builder().orderNo(45).build())
                    .employee(Employee.builder().employeeNo(3).build())
                    .employeeName("김발주")
                    .build();


            progressInspectionRepository.save(progressInspection);


        });


    }

    @Test
    public void testSelect(){

        int progressInspectionNo = 3;

        Optional<ProgressInspection> result = progressInspectionRepository.findById(progressInspectionNo);

        ProgressInspection progressInspection = result.orElseThrow();

        log.info(progressInspection);

    }

    @Test
    public void testCountByOrder(){

        int orderNo = 45;

        long result = progressInspectionRepository.countByOrder_OrderNo(orderNo);

        log.info(result);

    }

    @Test
    public void testOrderPIs(){

        int orderNo = 45;

        Pageable pageable = PageRequest.of(0, 10, Sort.by("progressInspectionTimes").ascending());

        Page<ProgressInspection> result = progressInspectionRepository.listOfOrder(orderNo, pageable);

        result.getContent().forEach(log::info);

    }


}
