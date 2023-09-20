package com.deligence.deli.dto;

import com.deligence.deli.domain.Position;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Embedded;
import java.time.LocalDate;

@Data
public class EmployeeJoinDTO {

    private int employeeNo;
    private String employeeId;
    private String employeePw;
    private String employeeName;
    private String employeePhone;
    private String employeeEmail;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate employeeEntranceDate;

    private Position position;
    private boolean del;
    private boolean social;

}
