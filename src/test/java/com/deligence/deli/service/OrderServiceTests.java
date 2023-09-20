package com.deligence.deli.service;

import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class OrderServiceTests {

    @Autowired
    private OrderService orderService;

    @Test
    public void testRegister() {

        OrderDTO orderDTO = OrderDTO.builder()
                .orderCode("registerTestCode...")
                .orderQuantity(200)
                .orderDeliveryDate(LocalDate.of(2023, 10, 10))
                .orderDate(LocalDate.now())
                .orderState("READY")
                .orderEtc("RegisterTest")
                .employeeNo(3)
                .employeeName("employee3")
                .materialName("material3")
                .build();

        orderService.register(orderDTO);

        log.info("success");

    }

    @Test
    public void testRead() {

        int orderNo = 23;

        OrderDTO orderDTO = orderService.read(orderNo);

        log.info(orderDTO);

    }

    @Test
    public void testModify() {

        OrderDTO orderDTO = OrderDTO.builder()
                .orderNo(23)
                .orderCode("ModifyTestCode...")
                .orderQuantity(200)
                .orderDeliveryDate(LocalDate.of(2023, 10, 10))
                .orderDate(LocalDate.now())
                .orderState("COMP")
                .orderEtc("ModifyTest")
                .employeeNo(3)
                .employeeName("employee3")
                .materialName("material3")
                .build();

        orderService.modify(orderDTO);

    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("c")
                .keyword("code")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<OrderDTO> responseDTO = orderService.list(pageRequestDTO);

        log.info(responseDTO);

    }

    @Test
    public void testCC() {

        int num = orderService.getCodeCount("ORDER-20230920-");

        log.info( "cc :" + num);
    }


}
