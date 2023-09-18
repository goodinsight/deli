package com.deligence.deli.repository;


import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Order;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class OrderRepositoryTests {

    @Autowired
    private OrderRepository orderRepository;


    @Test
    public void testInsert() {

        String employee_id = "employee1";

        IntStream.rangeClosed(1, 10).forEach(i -> {

            Employee employee = Employee.builder().employeeNo(i).build();

            Order order = Order.builder()
                    .orderCode("tmpCode..." + i)
                    .orderQuantity(i*100)
                    .orderDeliveryDate(LocalDate.of(2023, 10, 15))
                    .orderDate(LocalDate.now())
                    .orderState("READY")
                    .orderEtc("etc"+i)
                    .employee(employee)
                    .employeeName("employee1")
                    .materialName("material"+i)
                    .build();

            orderRepository.save(order);

        });


    }


}
