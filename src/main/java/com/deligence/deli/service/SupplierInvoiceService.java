package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.SupplierInvoice;
import com.deligence.deli.repository.SupplierInvoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import javax.persistence.EntityManager;
import javax.persistence.LockModeType;
import java.math.BigDecimal;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class SupplierInvoiceService {
    private final SupplierInvoiceRepository invoices;
    private final EntityManager em;

    @Transactional
    public void confirm(int contractNo, String invoiceNumber, LocalDate invoiceDate, LocalDate dueDate,
                        BigDecimal amount, String user) {
        String number = invoiceNumber.strip();
        if (number.isEmpty() || number.length() > 100 || dueDate.isBefore(invoiceDate) || amount.signum() <= 0
                || amount.scale() > 2 || amount.precision() - (long) amount.scale() > 24) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "청구번호, 날짜 및 금액을 확인하세요.");
        }
        var contract = em.find(MaterialProcurementContract.class, contractNo, LockModeType.PESSIMISTIC_WRITE);
        if (contract == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        var supplier = contract.getCooperatorSupplier();
        if (supplier == null) throw new ResponseStatusException(HttpStatus.CONFLICT, "공급사를 확인하세요.");
        em.lock(supplier, LockModeType.PESSIMISTIC_WRITE);
        var previous = invoices.findBySupplierAndNumber(supplier, number);
        if (previous.isPresent()) {
            var saved = previous.get();
            if (saved.getContract().getMaterialProcurementContractNo() == contractNo && saved.getInvoiceDate().equals(invoiceDate)
                    && saved.getDueDate().equals(dueDate) && saved.getAmount().compareTo(amount) == 0) return;
            throw new ResponseStatusException(HttpStatus.CONFLICT, "이 공급사의 청구번호가 이미 다른 내용으로 확정되었습니다.");
        }
        if ("계약파기".equals(contract.getMaterialProcurementContractState())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "파기한 계약입니다.");
        }
        invoices.save(new SupplierInvoice(contract, number, invoiceDate, dueDate, amount, user));
    }
}
