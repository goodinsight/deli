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

import java.util.List;
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

        IntStream.rangeClosed(1, 10).forEach(i -> {

            Employee employee = Employee.builder()
                    .employeeId("employee" + i)
                    .employeePw(passwordEncoder.encode("1111"))
                    .employeeEmail("email" + i +"@aaa.bbb")
                    .build();

            employee.addRole(EmployeeRole.USER);

            if(i>= 9){
                employee.addRole(EmployeeRole.ADMIN);
            }
            employeeRepository.save(employee);

        });
    }

    @Test
    public void testRead() {

        Optional<Employee> result = employeeRepository.getWithRoles("employee1");

        Employee employee = result.orElseThrow();

        log.info(employee);
        log.info(employee.getRoleSet());

        employee.getRoleSet().forEach(employeeRole -> log.info(employeeRole.name()));

    }

    @Test
    public void testFindEmail() {
        Optional<Employee> result = employeeRepository.findByEmployeeEmail("email2@aaa.bbb");

        Employee employee = result.orElseThrow();

        log.info(employee);
    }

    @Test
    public void testUpdateEmployee() {
        int res = employeeRepository.updateEmployee("emailu@aaa.bbb", "이입고", "010-1234-5678", 8);
        Optional<Employee> result = employeeRepository.findByEmployeeNo(8);
        Employee employee = result.orElseThrow();

        log.info(employee);
    }

    @Test
    public void testJoinEmployee(){

        Employee employee = Employee.builder()
                .employeeId("employee" + 11)
                .employeePw(passwordEncoder.encode("1111"))
                .employeeEmail("email" + 11 +"@aaa.bbb")
                .build();

        employee.addRole(EmployeeRole.USER);

        employeeRepository.save(employee);

    }


}
