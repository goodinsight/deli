package com.deligence.deli.repository;


import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.OrderDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class OrderRepositoryTests {

    @Autowired
    private OrderRepository orderRepository;


    @Test
    public void testInsert() {

        int employeeNo = 1;

        IntStream.rangeClosed(1, 10).forEach(i -> {

            Employee employee = Employee.builder().employeeNo(1).build();

            Order order = Order.builder()
                    .orderCode("tmpCode..." + i)
                    .orderQuantity(i*100)
                    .orderDeliveryDate(LocalDate.of(2023, 10, 15))
                    .orderDate(LocalDate.now())
                    .orderState("READY")
                    .orderEtc("etc"+i)
                    .employee(employee)
                    .employeeName("employee1")
                    .materialName("templates/material" +i)
                    .build();

            log.info(order);

            orderRepository.save(order);

        });


    }

    @Test
    public void testSelect() {

        int orderNo = 20;

        Optional<Order> result = orderRepository.findById(orderNo);

        Order order = result.orElseThrow();

        log.info(order);

    }

    @Test
    public void testUpdate() {

        int orderNo = 20;

        Optional<Order> result = orderRepository.findById(orderNo);

        Order order = result.orElseThrow();

        order.change(OrderDTO.builder()
                        .orderCode("modifyCode...")
                        .orderQuantity(125)
                        .orderDeliveryDate(LocalDate.of(2023, 9, 20))
                        .orderDate(LocalDate.now())
                        .orderState("COMP")
                        .orderEtc("modifyEtc")
                        .employeeNo(2)
                        .employeeName("employee2")
                        .materialName("material2")
                        .build());

        orderRepository.save(order);

    }


    @Test
    public void testDelete(){

        int orderNo = 22;

        orderRepository.deleteById(orderNo);

    }


    @Test
    public void testPaging() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("orderCode").descending());

        log.info(pageable);

        Page<Order> result = orderRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page  number: " + result.getNumber());
        log.info("page  size: " + result.getSize());

        List<Order> list = result.getContent();

        list.forEach(log::info);

    }

    @Test
    public void testSearch() {

        String[] types = {"c"};

        String keyword = "code";

        Pageable pageable = PageRequest.of(1, 10, Sort.by("orderNo").descending());

        log.info(pageable);

        Page<Order> result = orderRepository.search(types, keyword, pageable);

        //total pages
        log.info(result.getTotalPages());

        //page size
        log.info(result.getSize());

        //pageNumber
        log.info(result.getNumber());

        //prev next
        log.info(result.hasPrevious() + ": " + result.hasNext());

        result.getContent().forEach(log::info);

    }

    @Test
    public void testCodeCount() {

        String code = "tmp";

        int result = orderRepository.getCodeCount(code);

        log.info("num : " + result);

    }


}
