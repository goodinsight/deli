package com.deligence.deli.repository;

import java.time.LocalDate;
import java.util.Optional;
import javax.persistence.LockModeType;
import org.springframework.data.jpa.repository.Lock;
import com.deligence.deli.domain.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.EntityGraph;
import com.deligence.deli.domain.ClientConsultation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ClientConsultationRepository extends JpaRepository<ClientConsultation, Long> {
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select c from ClientConsultation c where c.id = :id")
    Optional<ClientConsultation> lockForQuote(long id);

    List<ClientConsultation> findByClient_ClientNoOrderByConsultedAtDescIdDesc(int clientNo);
    @EntityGraph(attributePaths = "client")
    List<ClientConsultation> findByAssignee_EmployeeIdAndFollowUpResultIsNullOrderByDueDateAscIdAsc(String employeeId);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update ClientConsultation c set c.assignee = :employee, c.dueDate = :dueDate where c.id = :id and c.assignee is null")
    int schedule(long id, Employee employee, LocalDate dueDate);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update ClientConsultation c set c.followUpResult = :result where c.id = :id and c.assignee in (select e from Employee e where e.employeeId = :username) and c.followUpResult is null")
    int complete(long id, String username, String result);

    boolean existsByClient_ClientNo(int clientNo);
}
