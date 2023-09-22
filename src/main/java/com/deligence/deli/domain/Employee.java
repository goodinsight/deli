package com.deligence.deli.domain;

import lombok.*;
import org.springframework.format.datetime.DateFormatter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
    private int employeeNo;    //사원일련번호-

    private String employeeId; // 아이디

    private String employeePw; // 비밀번호

    private String employeeName; //사원명

    private String employeePhone;  //사원연락처

    private String employeeEmail; //사원이메일

    private LocalDate employeeEntranceDate;   //사원 입사일


    @Embedded
    private Position position;   // 직책


    private boolean del;

    private boolean social;

    @ElementCollection(fetch = FetchType.LAZY)
    @Builder.Default
    private Set<EmployeeRole> roleSet = new HashSet<>();

    public void changePassword(String employeePw) {
        this.employeePw = employeePw;
    }

    public void changeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }

    public void changePhone(String employeePhone) {
        this.employeePhone = employeePhone;
    }
    public void changeName(String employeeName) {
        this.employeeName = employeeName;
    }
    public void changePosition(Position position) {
        this.position = position;
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
