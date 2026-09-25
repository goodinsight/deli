package com.deligence.deli;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.EmployeeRole;
import com.deligence.deli.dto.EmployeeAuthorityDTO;
import com.deligence.deli.repository.EmployeeRepository;
import com.deligence.deli.service.EmployeeServiceImpl;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class EmployeeRoleCompatibilityTests {
    @Test
    void existingDatabaseRoleNumbersRemainStable() {
        assertThat(EmployeeRole.USER.ordinal()).isEqualTo(0);
        assertThat(EmployeeRole.ADMIN.ordinal()).isEqualTo(1);
        assertThat(EmployeeRole.CLIENT.ordinal()).isEqualTo(6);
        assertThat(EmployeeRole.SUPPLIER.ordinal()).isEqualTo(7);
        assertThat(EmployeeRole.PRODUCTION.ordinal()).isEqualTo(8);
        assertThat(EmployeeRole.COOPERATOR.ordinal()).isEqualTo(9);
        assertThat(EmployeeRole.PARTNER.ordinal()).isEqualTo(10);
    }

    @Test
    void authorityFormCanAssignBothReservedRoles() {
        EmployeeRepository repository = mock(EmployeeRepository.class);
        Employee employee = Employee.builder().employeeId("partner-user").build();
        when(repository.findByEmployeeId("partner-user")).thenReturn(Optional.of(employee));
        EmployeeServiceImpl service = new EmployeeServiceImpl(
                mock(ModelMapper.class), repository, mock(PasswordEncoder.class));

        EmployeeAuthorityDTO request = new EmployeeAuthorityDTO();
        request.setEmployeeId("partner-user");
        request.setRole("[COOPERATOR]");
        service.modify(request);
        assertThat(employee.getRoleSet()).containsExactly(EmployeeRole.COOPERATOR);

        request.setRole("[PARTNER]");
        service.modify(request);
        assertThat(employee.getRoleSet()).containsExactly(EmployeeRole.PARTNER);
        verify(repository, org.mockito.Mockito.times(2)).save(any(Employee.class));
    }
}
