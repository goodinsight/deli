package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.dto.EmployeeSecurityDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmployeeSearch {

    Page<Employee> search1(Pageable pageable);

    Page<Employee> searchAll(String[] types, String keyword, Pageable pageable);

}
