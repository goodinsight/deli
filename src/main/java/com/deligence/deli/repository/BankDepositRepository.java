package com.deligence.deli.repository;

import com.deligence.deli.domain.BankDeposit;
import org.springframework.data.jpa.repository.*;
import javax.persistence.LockModeType;
import java.util.Optional;

public interface BankDepositRepository extends JpaRepository<BankDeposit, String> {
    @Query("select d from BankDeposit d join fetch d.receipt r where r.contract.productContractNo = :id")
    java.util.List<BankDeposit> findByContract(int id);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select d from BankDeposit d where d.reference = :reference")
    Optional<BankDeposit> lockDeposit(String reference);
}
