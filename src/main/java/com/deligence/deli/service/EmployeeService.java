package com.deligence.deli.service;

import com.deligence.deli.dto.EmployeeJoinDTO;

public interface EmployeeService {

    static class MidExistException extends Exception {

    }

    void join(EmployeeJoinDTO employeeJoinDTO) throws MidExistException;

}
