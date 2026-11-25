package com.deligence.deli.service;

import com.deligence.deli.domain.ContractLedgerEntry;
import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.repository.ContractLedgerRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.time.*;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReceivablesReport {
    private final ContractLedgerRepository ledger;

    @Getter
    @RequiredArgsConstructor
    public static class OpenInvoice {
        private final ProductContract contract;
        private final LocalDate due;
        private final BigDecimal balance;
        private final String status;
    }

    @Getter
    @RequiredArgsConstructor
    public static class Customer {
        private final String name;
        private final List<OpenInvoice> invoices = new ArrayList<>();
        private BigDecimal total = BigDecimal.ZERO;
        private BigDecimal overdue = BigDecimal.ZERO;
    }

    @Transactional(readOnly = true)
    public Collection<Customer> customers() {
        LocalDate today = LocalDate.now(ZoneId.of("Asia/Seoul"));
        Map<Integer, Customer> customers = new LinkedHashMap<>();
        var byContract = ledger.reportEntries().stream().collect(Collectors.groupingBy(
                e -> e.getContract().getProductContractNo(), LinkedHashMap::new, Collectors.toList()));
        for (List<ContractLedgerEntry> entries : byContract.values()) {
            BigDecimal balance = ContractBillingService.balance(entries);
            if (balance.signum() <= 0) continue;
            var invoice = entries.get(0);
            var contract = invoice.getContract();
            var client = contract.getCooperatorClient();
            var customer = customers.computeIfAbsent(client == null ? null : client.getClientNo(),
                    key -> new Customer(client == null ? "고객사 미지정" : client.getClientName()));
            LocalDate due = invoice.getCollectionDueDate();
            boolean late = due != null && due.isBefore(today);
            String status = due == null ? "미지정" : late ? "연체" : due.equals(today) ? "오늘" : "예정";
            customer.invoices.add(new OpenInvoice(contract, due, balance, status));
            customer.total = customer.total.add(balance);
            if (late) customer.overdue = customer.overdue.add(balance);
        }
        return customers.values();
    }
}
