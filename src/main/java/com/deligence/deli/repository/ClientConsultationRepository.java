package com.deligence.deli.repository;

import com.deligence.deli.domain.ClientConsultation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ClientConsultationRepository extends JpaRepository<ClientConsultation, Long> {
    List<ClientConsultation> findByClient_ClientNoOrderByConsultedAtDescIdDesc(int clientNo);
    boolean existsByClient_ClientNo(int clientNo);
}
