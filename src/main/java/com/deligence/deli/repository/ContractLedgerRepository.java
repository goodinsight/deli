package com.deligence.deli.repository;

import com.deligence.deli.domain.ContractLedgerEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ContractLedgerRepository extends JpaRepository<ContractLedgerEntry, Long> {
    @org.springframework.data.jpa.repository.Query("select e from ContractLedgerEntry e join fetch e.contract c left join fetch c.cooperatorClient order by c.productContractNo, e.id")
    List<ContractLedgerEntry> reportEntries();

    @org.springframework.data.jpa.repository.Lock(javax.persistence.LockModeType.PESSIMISTIC_WRITE)
    @org.springframework.data.jpa.repository.Query("select e from ContractLedgerEntry e where e.contract.productContractNo = :id order by e.id")
    List<ContractLedgerEntry> lockContractEntries(int id);

    List<ContractLedgerEntry> findByContract_ProductContractNoOrderByIdAsc(int contractNo);
}
