package com.deligence.deli.service;

import com.deligence.deli.domain.Board;
import com.deligence.deli.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.EmployeeRole;
import com.deligence.deli.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final ModelMapper modelMapper;

    private final EmployeeRepository employeeRepository;

    private final PasswordEncoder passwordEncoder;


    @Override
    public EmployeeJoinDTO readOne(int employeeNo) {
        Optional<Employee> result = employeeRepository.findByEmployeeNo(employeeNo);

        Employee employee = result.orElseThrow();

        EmployeeJoinDTO employeeJoinDTO = modelMapper.map(employee, EmployeeJoinDTO.class);

        return employeeJoinDTO;
    }

    @Override
    public void modify(EmployeeJoinDTO employeeJoinDTO) {
        Optional<Employee> result = employeeRepository.findByEmployeeId(employeeJoinDTO.getEmployeeId());

        Employee employee = result.orElseThrow();

        employee.changeEmail(employeeJoinDTO.getEmployeeEmail());
        employee.changeName(employeeJoinDTO.getEmployeeName());
        employee.changePosition(employeeJoinDTO.getPosition());

        employeeRepository.save(employee);
    }

    @Override
    public void remove(int employeeNo) {
        employeeRepository.deleteByEmployeeNo(employeeNo);
    }

    @Override
    public void join(EmployeeJoinDTO employeeJoinDTO) throws MidExistException {

        String employeeId = employeeJoinDTO.getEmployeeId();

        boolean exist = employeeRepository.existsByEmployeeId(employeeId);

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

    @Override
    public PageResponseDTO<EmployeeJoinDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("employeeNo");

        Page<Employee> result = employeeRepository.searchAll(types, keyword, pageable);

        List<EmployeeJoinDTO> dtoList = result.getContent().stream()
                .map(employee -> modelMapper.map(employee, EmployeeJoinDTO.class))
                .collect(Collectors.toList());


        return PageResponseDTO.<EmployeeJoinDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();

    }

    @Override
    public EmployeeJoinDTO findEmployee(String employeeId) {
        Optional<Employee> result = employeeRepository.findByEmployeeId(employeeId);

        Employee employee = result.orElseThrow();

        EmployeeJoinDTO employeeJoinDTO = modelMapper.map(employee, EmployeeJoinDTO.class);

        return employeeJoinDTO;
    }
}
