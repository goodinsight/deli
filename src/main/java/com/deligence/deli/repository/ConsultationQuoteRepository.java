package com.deligence.deli.repository;

import com.deligence.deli.domain.ConsultationQuote;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ConsultationQuoteRepository extends JpaRepository<ConsultationQuote, Long> {
    Optional<ConsultationQuote> findByConsultation_IdAndRevision(long id, int revision);
    Optional<ConsultationQuote> findByContract_ProductContractNo(int contractNo);
    List<ConsultationQuote> findByConsultation_IdOrderByRevisionDesc(long consultationId);
    Optional<ConsultationQuote> findFirstByConsultation_IdOrderByRevisionDesc(long consultationId);
}
