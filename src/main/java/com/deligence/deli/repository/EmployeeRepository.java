package com.deligence.deli.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.deligence.deli.domain.Employee;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, String> {

    @EntityGraph(attributePaths = "roleSet")
    @Query("select e from Employee e where e.employee_id = :employee_id and e.social = false")
    Optional<Employee> getWithRoles(String employee_id);

}
