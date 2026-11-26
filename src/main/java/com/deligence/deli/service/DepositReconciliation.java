package com.deligence.deli.service;

import com.deligence.deli.domain.BankDeposit;
import com.deligence.deli.domain.ContractLedgerEntry;
import com.deligence.deli.repository.BankDepositRepository;
import com.deligence.deli.repository.ContractLedgerRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DepositReconciliation {
    private final BankDepositRepository deposits;
    private final ContractLedgerRepository ledger;

    @Getter
    @RequiredArgsConstructor
    public static class Allocation {
        private final long receiptId;
        private final int contractNo;
        private final BigDecimal amount;
        private final String status;
    }

    @Getter
    public static class Row {
        private final BankDeposit deposit;
        private final List<Allocation> allocations = new ArrayList<>();
        private BigDecimal received = BigDecimal.ZERO;
        private BigDecimal settled = BigDecimal.ZERO;
        private BigDecimal difference = BigDecimal.ZERO;
        private final BigDecimal remaining;

        Row(BankDeposit deposit, Map<Long, ContractLedgerEntry> offsets) {
            this.deposit = deposit;
            BigDecimal allocated = BigDecimal.ZERO;
            for (var receipt : deposit.getActiveReceipts()) {
                var offset = offsets.get(receipt.getId());
                BigDecimal amount = receipt.getAmount();
                allocated = allocated.add(amount);
                String status;
                if (offset == null) {
                    received = received.add(amount);
                    status = "수금 일치";
                } else if (offset.isSettlement()) {
                    settled = settled.add(amount);
                    status = "환불·정산 완료";
                } else {
                    difference = difference.add(amount);
                    status = "확인 필요 · 수금 취소 후 연결 유지";
                }
                allocations.add(new Allocation(receipt.getId(), receipt.getContract().getProductContractNo(), amount, status));
            }
            remaining = deposit.getAmount().subtract(allocated);
        }
    }

    @Transactional(readOnly = true)
    public List<Row> rows(boolean onlyDifferences) {
        var offsets = ledger.receiptOffsets().stream().collect(Collectors.toMap(
                entry -> entry.getReversedReceipt().getId(), Function.identity()));
        return deposits.forReconciliation().stream().map(d -> new Row(d, offsets))
                .filter(row -> !onlyDifferences || row.getDifference().signum() != 0)
                .collect(Collectors.toList());
    }
}
