package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.domain.Products;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ProductionPlanningRepositoryTests {

    @Autowired
    private ProductionPlanningRepository productionPlanningRepository;

    @Test
    public void testInsert() {

        int productNo = 1;
        int clientNo = 1;

        IntStream.rangeClosed(1,100).forEach(i -> {

            Products products = Products.builder().productNo(1).build();
            Employee employee = Employee.builder().employeeNo(1).build();

            ProductionPlanning productionPlanning = ProductionPlanning.builder()
                    .productionPlanCode("planCode..")
                    .productionQuantity(1)
                    .productionRequirementsDate(10)
                    .productionRequirementsProcess("process...")
                    .productionDeliveryDate(LocalDate.of(2023,9,22))
                    .detailExplaination("explaination...")
                    .productCode("productCode"+i)
                    .clientName("clientName")
                    .clientStatus("READY")
                    .build();

            ProductionPlanning result = productionPlanningRepository.save(productionPlanning);

            log.info("productionPlanNo: " + result.getProductionPlanNo());
        });


    }
}
