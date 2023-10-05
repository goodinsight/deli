package com.deligence.deli.security;

import com.deligence.deli.domain.Employee;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.deligence.deli.dto.EmployeeSecurityDTO;
import com.deligence.deli.repository.EmployeeRepository;

import java.util.Optional;
import java.util.stream.Collectors;

@Log4j2
@Service
@RequiredArgsConstructor // 추가
public class CustomUserDetailsService implements UserDetailsService {

    private final EmployeeRepository employeeRepository;

    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.info("loadUserByUsername: " + username);

        Optional<Employee> result = employeeRepository.getWithRoles(username);

        if(result.isEmpty()) {  //해당 아이디를 가진 사용자가 없다면
            throw new UsernameNotFoundException("username not found.....");
        }

        Employee employee = result.get();

        EmployeeSecurityDTO employeeSecurityDTO = new EmployeeSecurityDTO(
                employee.getEmployeeNo(),
                employee.getEmployeeId(),
                employee.getEmployeePw(),
                employee.getEmployeeEmail(),
                employee.getEmployeeName(),
                employee.getEmployeePhone(),
                employee.getEmployeeEntranceDate(),
                employee.isDel(),
                false,
                employee.getRoleSet().stream().map(employeeRole -> new SimpleGrantedAuthority("ROLE_"+employeeRole.name())).collect(Collectors.toList())
        );

        log.info("employeeSecurityDTO");
        log.info(employeeSecurityDTO);

        return employeeSecurityDTO;
    }
}
