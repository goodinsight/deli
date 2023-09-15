package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialProcurementContract;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialProcurementContractRepositoryTests {

    @Autowired
    private MaterialProcurementContractRepository materialProcurementContractRepository;

    //insert기능 test
    @Test
    public void testInsert() {
        IntStream.rangeClosed(1,100).forEach(i -> {

            MaterialProcurementContract materialProcurementContract = MaterialProcurementContract.builder()
                    .material_procurement_contract_code("contract_code..."+i)
                    .material_procurement_contract_date(LocalDate.of(2023, 9,15))
                    .material_procurement_contract_state("ready..."+i)
                    .build();

            MaterialProcurementContract result = materialProcurementContractRepository.save(materialProcurementContract);
            log.info("M_P_C_NO : " + result.getMaterial_procurement_contract_no());
        });
    }
}
