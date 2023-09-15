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

            Employee employee = Employee.builder().employee_id(employee_id).build();

            Order order = Order.builder()
                    .order_code("tmpCode..." + i)
                    .order_quantity(i*100)
                    .order_delivery_date(LocalDate.of(2023, 10, 15))
                    .order_date(LocalDate.now())
                    .order_state("READY")
                    .order_etc("etc"+i)
                    .employee(employee)
                    .employee_name("employee1")
                    .material_name("material"+i)
                    .build();

            orderRepository.save(order);

        });


    }


}
