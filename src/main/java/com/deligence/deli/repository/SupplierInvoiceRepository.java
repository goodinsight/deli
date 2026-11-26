package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.SupplierInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import javax.persistence.LockModeType;
import java.util.List;
import java.util.Optional;

public interface SupplierInvoiceRepository extends JpaRepository<SupplierInvoice, Long> {
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<SupplierInvoice> findBySupplierAndNumber(CooperatorSupplier supplier, String number);
    List<SupplierInvoice> findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(int contractNo);
}
