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
        return entries.stream().map(e -> e.isInvoice() ? e.getAmount() : e.getAmount().negate())
                .reduce(BigDecimal.ZERO, BigDecimal::add);
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

    private void validate(BigDecimal amount) {
        if (amount.signum() <= 0 || amount.scale() > 2 || amount.precision() - (long) amount.scale() > 24) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "양수 금액을 소수점 두 자리까지 입력하세요.");
        }
    }
}
