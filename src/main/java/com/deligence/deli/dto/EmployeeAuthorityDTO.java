package com.deligence.deli.dto;

import com.deligence.deli.domain.Position;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

@Data
public class EmployeeAuthorityDTO{

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

    private String role;

    public EmployeeAuthorityDTO() {}

    public EmployeeAuthorityDTO(int employeeNo, String employeeId, String employeePw, String employeeEmail, String employeeName, String employeePhone, LocalDate employeeEntranceDate, boolean del, boolean social, String role) {
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();

        for(String role : role.split(",")){
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }


}
