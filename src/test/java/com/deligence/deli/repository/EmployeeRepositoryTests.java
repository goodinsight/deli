package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.EmployeeRole;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.EmployeeRole;

import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class EmployeeRepositoryTests {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Test
    public void insertEmployees(){

        IntStream.rangeClosed(1, 100).forEach(i -> {

            Employee employee = Employee.builder()
                    .employee_id("employee" + i)
                    .employee_pw(passwordEncoder.encode("1111"))
                    .employee_email("email" + i +"@aaa.bbb")
                    .build();

            employee.addRole(EmployeeRole.USER);

            if(i>= 90){
                employee.addRole(EmployeeRole.ADMIN);
            }
            employeeRepository.save(employee);

        });

    }

    @Test
    public void testRead() {

        Optional<Employee> result = employeeRepository.getWithRoles("employee100");

        Employee employee = result.orElseThrow();

        log.info(employee);
        log.info(employee.getRoleSet());

        employee.getRoleSet().forEach(employeeRole -> log.info(employeeRole.name()));

    }


}
