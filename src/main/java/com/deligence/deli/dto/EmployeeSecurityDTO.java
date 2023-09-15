package com.deligence.deli.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.util.Collection;

@Getter
@Setter
@ToString
public class EmployeeSecurityDTO extends User {

    private String employee_id;
    private String employee_pw;

    private String employee_name;

    private String employee_phone;
    private String employee_email;

    private LocalDate employee_entrance_date;
    private boolean del;
    private boolean social;

    public EmployeeSecurityDTO(String username, String password, String email, boolean del, boolean social,
                               Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);

        this.employee_id = username;
        this.employee_pw = password;
        this.employee_email = email;
        this.del = del;
        this.social = social;

    }
}
