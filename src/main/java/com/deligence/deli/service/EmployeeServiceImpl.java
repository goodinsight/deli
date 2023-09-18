package com.deligence.deli.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.EmployeeRole;
import com.deligence.deli.dto.EmployeeJoinDTO;
import com.deligence.deli.repository.EmployeeRepository;

@Service
@Log4j2
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final ModelMapper modelMapper;

    private final EmployeeRepository employeeRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void join(EmployeeJoinDTO employeeJoinDTO) throws MidExistException {

        String employeeId = employeeJoinDTO.getEmployeeId();

        boolean exist = employeeRepository.existsById(employeeId);

        if(exist) {
            throw new MidExistException();
        }

        Employee employee = modelMapper.map(employeeJoinDTO, Employee.class);
        employee.changePassword(passwordEncoder.encode(employeeJoinDTO.getEmployeePw()));
        employee.addRole(EmployeeRole.USER);

        log.info("========================");
        log.info(employee);
        log.info(employee.getRoleSet());

        employeeRepository.save(employee);

    }
}
