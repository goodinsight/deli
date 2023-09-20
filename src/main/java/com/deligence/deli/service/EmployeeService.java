package com.deligence.deli.service;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.dto.*;

public interface EmployeeService {


    static class MidExistException extends Exception {

    }

    EmployeeJoinDTO readOne(int employeeNo);

    void modify(EmployeeJoinDTO employeeJoinDTO);

    void remove(int employeeNo);

    void join(EmployeeJoinDTO employeeJoinDTO) throws MidExistException;

    PageResponseDTO<EmployeeJoinDTO> list(PageRequestDTO pageRequestDTO);

    EmployeeJoinDTO findEmployee(String employeeId);
}
