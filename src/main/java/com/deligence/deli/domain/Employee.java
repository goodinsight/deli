package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "roleSet")
public class Employee extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employee_no;    //사원일련번호

    private String employee_id; // 아이디

    private String employee_pw; // 비밀번호

    private String employee_name; //사원명

    private String employee_phone;  //사원연락처

    private String employee_email; //사원이메일

    private LocalDate employee_entrance_date;   //사원 입사일


    @Embedded
    private Position position;


    private boolean del;

    private boolean social;

    @ElementCollection(fetch = FetchType.LAZY)
    @Builder.Default
    private Set<EmployeeRole> roleSet = new HashSet<>();

    public void changePassword(String employee_pw) {
        this.employee_pw = employee_pw;
    }

    public void changEmail(String employee_email) {
        this.employee_email = employee_email;
    }

    public void changeDel(boolean del) {
        this.del = del;
    }

    public void addRole(EmployeeRole employeeRole) {
        this.roleSet.add(employeeRole);
    }

    public void clearRoles(){
        this.roleSet.clear();
    }

    public void changeSocial(boolean social){
        this.social = social;
    }

}
