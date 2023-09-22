package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.OrderRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@SpringBootTest
@Log4j2
@Transactional
public class MaterialInventoryServiceTests {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    public void testMaterialsServicelistOne() {

        int materialInventoryNo = 30;

        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.materialStockListOne(materialInventoryNo);

        log.info(materialInventoryDTO);

    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("tcw")
                .keyword("cpu")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);

        log.info(responseDTO);

    }

    @Test
    public void test() {

        List<Order> list = orderRepository.findAll();

        for (int i = 0; i < list.size(); i++) {

            MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                    .materialInventoryNo(i)
                    .order(Order.builder().orderNo(i).build())
                    .build();

            int[] result = materialInventoryService.materialStockRegister(materialInventoryDTO);

            log.info("result : " + result.length);

        }


    }

}
