package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.SupplierInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import javax.persistence.LockModeType;
import java.util.List;
import java.util.Optional;

public interface SupplierInvoiceRepository extends JpaRepository<SupplierInvoice, Long> {
    @org.springframework.data.jpa.repository.Query("select distinct i from SupplierInvoice i join fetch i.supplier s " +
            "join fetch i.contract left join fetch i.payments order by s.supplierName, s.supplierNo, i.dueDate, i.id")
    List<SupplierInvoice> forPayablesReport();

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<SupplierInvoice> findBySupplierAndNumber(CooperatorSupplier supplier, String number);
    @org.springframework.data.jpa.repository.Query("select distinct i from SupplierInvoice i left join fetch i.payments " +
            "where i.contract.materialProcurementContractNo = :contractNo order by i.dueDate, i.id")
    List<SupplierInvoice> findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(int contractNo);
}
