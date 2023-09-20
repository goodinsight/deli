package com.deligence.deli.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@ToString
public class EmployeeSecurityDTO extends User {

    private int employeeNo;

    private String employeeId;
    private String employeePw;

    private String employeeName;

    private String employeePhone;
    private String employeeEmail;

    private LocalDate employeeEntranceDate;
    private boolean del;
    private boolean social;

    public EmployeeSecurityDTO(int employeeNo, String username, String password, String employeeEmail, String employeeName, String employeePhone, LocalDate employeeEntranceDate, boolean del, boolean social,
                               Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);

        this.employeeNo = employeeNo;
        this.employeeId = username;
        this.employeePw = password;
        this.employeeEmail = employeeEmail;
        this.employeeName = employeeName;
        this.employeePhone = employeePhone;
        this.employeeEntranceDate = employeeEntranceDate;

        this.del = del;
        this.social = social;

    }

}
