package com.deligence.deli.service;

import com.deligence.deli.domain.ContractLedgerEntry;
import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.repository.ContractLedgerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class ContractBillingService {
    private final BusinessRecordService records;
    private final ContractLedgerRepository ledger;

    public static BigDecimal balance(List<ContractLedgerEntry> entries) {
        return entries.stream().map(e -> (e.isInvoice() || e.isReversal()) ? e.getAmount() : e.getAmount().negate())
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public static BigDecimal netReceipts(List<ContractLedgerEntry> entries) {
        return entries.stream().filter(e -> !e.isInvoice() && !e.isInvoiceCancellation())
                .map(e -> e.isReversal() ? e.getAmount().negate() : e.getAmount())
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public void cancelInvoice(int id, String reason, boolean reconciled, String user) {
        String explanation = checkedReason(reason);
        records.lock(ProductContract.class, id);
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        if (entries.stream().anyMatch(ContractLedgerEntry::isInvoiceCancellation)) return;
        if (entries.isEmpty() || netReceipts(entries).signum() != 0) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "청구 및 미정산 수금액을 확인하세요.");
        }
        if (entries.size() > 1 && !reconciled) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "실제 입금과 환불·정산 내역을 확인하세요.");
        }
        ledger.save(ContractLedgerEntry.cancelInvoice(entries.get(0), explanation, user));
    }

    public void invoice(int id, BigDecimal amount, String user) {
        validate(amount);
        var contract = records.lock(ProductContract.class, id);
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        if (!entries.isEmpty()) {
            if (entries.get(0).getAmount().compareTo(amount) != 0) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "기존 청구액을 확인하세요.");
            }
            return;
        }
        if ("계약파기".equals(contract.getProductContractState())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "파기한 계약은 청구할 수 없습니다.");
        }
        ledger.save(ContractLedgerEntry.invoice(contract, amount, user));
    }

    public void receive(int id, UUID requestId, BigDecimal amount, String user) {
        validate(amount);
        var contract = records.lock(ProductContract.class, id);
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        for (var entry : entries) {
            if (entry.getEntryKey().equals(requestId.toString())) {
                if (entry.getAmount().compareTo(amount) != 0) {
                    throw new ResponseStatusException(HttpStatus.CONFLICT, "이전 수금 요청과 금액이 다릅니다.");
                }
                return;
            }
        }
        if (balance(entries).compareTo(amount) < 0) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "미수잔액을 확인하세요.");
        }
        ledger.save(ContractLedgerEntry.receipt(contract, requestId, amount, user));
    }

    public void reverseReceipt(int id, long receiptId, String reason, String user) {
        offsetReceipt(id, receiptId, reason, user, false);
    }

    public void confirmSettlement(int id, long receiptId, String reason, String user) {
        offsetReceipt(id, receiptId, reason, user, true);
    }

    private String checkedReason(String reason) {
        String explanation = reason.strip();
        if (explanation.isEmpty() || explanation.length() > 250) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "취소 사유를 1~250자로 입력하세요.");
        }
        return explanation;
    }

    private void offsetReceipt(int id, long receiptId, String reason, String user, boolean settlement) {
        String explanation = checkedReason(reason);
        records.lock(ProductContract.class, id);
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        var receipt = entries.stream().filter(e -> e.getId() == receiptId).findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (receipt.isInvoice() || receipt.isInvoiceCancellation() || receipt.isReversal()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "원수금만 취소할 수 있습니다.");
        }
        var existing = entries.stream().filter(e -> e.isReversal() && e.getReversedReceipt().getId().equals(receiptId)).findFirst();
        if (existing.isPresent()) {
            if (existing.get().isSettlement() != settlement) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "이미 다른 방식으로 처리한 수금입니다.");
            }
            return;
        }
        ledger.save(settlement ? ContractLedgerEntry.settlement(receipt, explanation, user)
                : ContractLedgerEntry.reversal(receipt, explanation, user));
    }

    private void validate(BigDecimal amount) {
        if (amount.signum() <= 0 || amount.scale() > 2 || amount.precision() - (long) amount.scale() > 24) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "양수 금액을 소수점 두 자리까지 입력하세요.");
        }
    }
}
