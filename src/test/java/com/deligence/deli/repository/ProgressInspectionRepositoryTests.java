package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProgressInspection;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ProgressInspectionRepositoryTests {

    @Autowired
    private ProgressInspectionRepository progressInspectionRepository;

    @Test
    public void insert() {

        String employee_id = "employee1";


        IntStream.rangeClosed(1, 10).forEach(i -> {

            ProgressInspection progressInspection = ProgressInspection.builder()
                    .progress_inspection_times(1)
                    .progress_inspection_state("READY")
                    .progress_inspection_date(LocalDate.now())
                    .progress_inspection_etc("비고 ")
                    .rate_of_progress(10.0F)
                    .order(Order.builder().order_no(1L).build())
                    .employee(Employee.builder().employee_id("employee"+i).build())
                    .build();


            progressInspectionRepository.save(progressInspection);


        });


    }


}
