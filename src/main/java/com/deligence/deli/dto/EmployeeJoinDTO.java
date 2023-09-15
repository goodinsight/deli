package com.deligence.deli.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class EmployeeJoinDTO {

    private String employee_id;
    private String employee_pw;
    private String employee_name;
    private String employee_phone;
    private String employee_email;
    private LocalDate employee_entrance_date;
    private boolean del;
    private boolean social;

}
