package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialInventoryRepositoryTests {

    @Autowired
    private MaterialInventoryRepository materialInventoryRepository;

    @Test
    public void testMaterialInventoryInsert() {

        IntStream.rangeClosed(1, 50).forEach(i -> {

            MaterialInventory materialInventory = MaterialInventory.builder()
                    .materialIncomingQuantity(i)
                    .materialOutgoingQuantity(i)
                    .materialStock(i)
                    .materialSupplyPrice((long) (i * 10))
                    .materialTotalInventoryPayments((long) i * 20)
                    .build();

            MaterialInventory result = materialInventoryRepository.save(materialInventory);

            log.info("Material_NO : " + result.getMaterialInventoryNo());

        });

    }

    @Test
    public void testMaterialInventorySelect() {

        int materialInventoryNo = 50;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);

    }

    @Test
    public void testMaterialInventoryUpdate() {

        int materialInventoryNo = 50;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(materialInventoryNo);

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(1,2,3, 4L,5L);

        materialInventoryRepository.save(materialInventory);

    }

    @Test
    public void testMaterialInventoryDelete() {

        int materialInventoryNo = 1;

        materialInventoryRepository.deleteById(materialInventoryNo);

    }

}
