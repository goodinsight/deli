package com.deligence.deli.repository;

import com.deligence.deli.repository.search.EmployeeSearch;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import com.deligence.deli.domain.Employee;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.NamedQuery;
import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, String>, EmployeeSearch {

    @EntityGraph(attributePaths = "roleSet")    // 유저 로그인시 해당 username(employeeId) 가 존재하는지 검색하여 로그인함
    @Query("select e from Employee e where e.employeeId = :employeeId and e.social = false")
    Optional<Employee> getWithRoles(String employeeId);


    Boolean existsByEmployeeId(String employeeId);

    Optional<Employee> findByEmployeeNo(int employeeNo);    //employeeNo로 직원 조회
    Optional<Employee> findByEmployeeId(String employeeId);    //employeeId로 직원 조회

    Optional<Employee> findByEmployeeEmail(String employeeEmail);   //이메일로 직원들 조회

    @Transactional  //update or delete 시에 Executing an update/delete query 오류 해결
    @Modifying
    @Query("UPDATE Employee e SET e.employeeEmail = :employeeEmail, e.employeeName = :employeeName, e.employeePhone = :employeePhone where e.employeeNo = :employeeNo")
    int updateEmployee(String employeeEmail, String employeeName, String employeePhone, int employeeNo);

    @Transactional
    void deleteByEmployeeNo(int employeeNo);
}
