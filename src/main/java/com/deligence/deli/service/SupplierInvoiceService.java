package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.SupplierInvoice;
import com.deligence.deli.domain.SupplierPayment;
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

    private SupplierInvoice lockInvoice(int contractNo, long invoiceId) {
        var invoice = em.find(SupplierInvoice.class, invoiceId, LockModeType.PESSIMISTIC_WRITE);
        if (invoice == null || invoice.getContract().getMaterialProcurementContractNo() != contractNo) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return invoice;
    }

    @Transactional
    public void pay(int contractNo, long invoiceId, java.util.UUID requestId, BigDecimal amount, String user) {
        if (amount.signum() <= 0 || amount.scale() > 2 || amount.precision() - (long) amount.scale() > 24) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "지급액을 확인하세요.");
        }
        var invoice = lockInvoice(contractNo, invoiceId);
        for (var payment : invoice.getPayments()) {
            if (payment.getRequestKey().equals(requestId.toString())) {
                if (payment.getAmount().compareTo(amount) != 0) throw new ResponseStatusException(HttpStatus.CONFLICT, "기존 지급 요청과 금액이 다릅니다.");
                return;
            }
        }
        if (amount.compareTo(invoice.getOutstandingAmount()) > 0) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "청구 미지급액을 초과합니다.");
        }
        var payment = new com.deligence.deli.domain.SupplierPayment(invoice, requestId, amount, user);
        em.persist(payment);
        invoice.getPayments().add(payment);
    }

    @Transactional
    public void cancelInvoice(int contractNo, long invoiceId, String reason, String user) {
        var invoice = lockInvoice(contractNo, invoiceId);
        invoice.cancel(cancellationReason(reason), user);
    }

    @Transactional
    public void reconcileAndCancel(int contractNo, long invoiceId, String reason, boolean reconciled, String user) {
        if (!reconciled) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "실제 지급 내역을 대조하세요.");
        lockInvoice(contractNo, invoiceId).cancelAfterReconciliation(cancellationReason(reason), user);
    }

    @Transactional
    public void settlePayment(int contractNo, long invoiceId, long paymentId, SupplierPayment.SettlementType type,
                              String evidence, String user) {
        var payment = lockInvoice(contractNo, invoiceId).getPayments().stream().filter(p -> p.getId() == paymentId)
                .findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        String note = evidence.strip();
        if (note.isEmpty() || note.length() > 250) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "환급·정산 근거를 1~250자로 입력하세요.");
        payment.settle(type, note, user);
    }

    private String cancellationReason(String reason) {
        String explanation = reason.strip();
        if (explanation.isEmpty() || explanation.length() > 250) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "취소 사유를 1~250자로 입력하세요.");
        }
        return explanation;
    }

    @Transactional
    public void cancelPayment(int contractNo, long invoiceId, long paymentId, String reason, String user) {
        String explanation = cancellationReason(reason);
        var invoice = lockInvoice(contractNo, invoiceId);
        invoice.getPayments().stream().filter(p -> p.getId() == paymentId).findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)).cancel(explanation, user);
    }

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
