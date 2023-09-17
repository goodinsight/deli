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
                    .material_incoming_quantity(i)
                    .material_outgoing_quantity(i)
                    .material_stock(i)
                    .material_supply_price((long) (i * 10))
                    .material_total_inventory_payments((long) i * 20)
                    .build();

            MaterialInventory result = materialInventoryRepository.save(materialInventory);

            log.info("Material_NO : " + result.getMaterial_no());

        });

    }

    @Test
    public void testMaterialInventorySelect() {

        Long material_no = 50L;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(material_no);

        MaterialInventory materialInventory = result.orElseThrow();

        log.info(materialInventory);

    }

    @Test
    public void testMaterialInventoryUpdate() {

        Long material_no = 50L;

        Optional<MaterialInventory> result = materialInventoryRepository.findById(material_no);

        MaterialInventory materialInventory = result.orElseThrow();

        materialInventory.change(1,2,3, 4L,5L);

        materialInventoryRepository.save(materialInventory);

    }

    @Test
    public void testMaterialInventoryDelete() {

        Long material_no = 1L;

        materialInventoryRepository.deleteById(material_no);

    }

}
