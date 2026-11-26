package com.deligence.deli.repository;

import com.deligence.deli.domain.DepositUnmatch;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DepositUnmatchRepository extends JpaRepository<DepositUnmatch, Long> {
    boolean existsByDeposit_ReferenceAndReceipt_Id(String reference, long receiptId);
    boolean existsByDeposit_Reference(String reference);
    List<DepositUnmatch> findByReceipt_Contract_ProductContractNo(int contractNo);
    List<DepositUnmatch> findAllByOrderByIdDesc();
    List<DepositUnmatch> findByDeposit_ReferenceOrderByIdDesc(String reference);
}
