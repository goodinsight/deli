package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialProcurementPlanningRepositoryTests {

    @Autowired
    private MaterialProcurementPlanningRepository materialProcurementPlanningRepository;

    //insert기능 테스트
    @Test
    public void testInsert() {
        IntStream.rangeClosed(1,100).forEach(i -> {
            MaterialProcurementPlanning materialProcurementPlanning = MaterialProcurementPlanning.builder()
                    .procurement_delivery_date(LocalDate.of(2023, 11,15))
                    .material_requirements_count(i)
                    .material_procurement_state("procurement_state..."+i)
                    .build();

            MaterialProcurementPlanning result = materialProcurementPlanningRepository.save(materialProcurementPlanning);
            log.info("M_P_P_NO: " + result.getMaterial_procurement_plan_no());

        });
    }
}
