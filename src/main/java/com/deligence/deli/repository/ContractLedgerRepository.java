package com.deligence.deli.repository;

import com.deligence.deli.domain.ContractLedgerEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ContractLedgerRepository extends JpaRepository<ContractLedgerEntry, Long> {
    List<ContractLedgerEntry> findByContract_ProductContractNoOrderByIdAsc(int contractNo);
}
