package com.deligence.deli.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class EmployeeJoinDTO {

    private String employeeId;
    private String employeePw;
    private String employeeName;
    private String employeePhone;
    private String employeeEmail;
    private LocalDate employeeEntranceDate;
    private boolean del;
    private boolean social;

}
