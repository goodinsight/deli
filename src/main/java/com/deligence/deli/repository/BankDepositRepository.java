package com.deligence.deli.repository;

import com.deligence.deli.domain.BankDeposit;
import org.springframework.data.jpa.repository.*;
import javax.persistence.LockModeType;
import java.util.Optional;

public interface BankDepositRepository extends JpaRepository<BankDeposit, String> {
    @Query("select distinct d from BankDeposit d left join d.receipt legacy left join d.allocations a where legacy.contract.productContractNo = :id or a.contract.productContractNo = :id")
    java.util.List<BankDeposit> findByContract(int id);

    @Query("select distinct d from BankDeposit d left join fetch d.receipt left join fetch d.allocations order by d.depositDate desc, d.reference")
    java.util.List<BankDeposit> forReconciliation();

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select d from BankDeposit d where d.reference = :reference")
    Optional<BankDeposit> lockDeposit(String reference);
}
