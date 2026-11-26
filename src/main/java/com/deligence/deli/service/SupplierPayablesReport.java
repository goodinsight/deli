package com.deligence.deli.service;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.SupplierInvoice;
import com.deligence.deli.repository.SupplierInvoiceRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

@Service
@RequiredArgsConstructor
public class SupplierPayablesReport {
    private final SupplierInvoiceRepository invoices;

    @Getter
    @RequiredArgsConstructor
    public static class SupplierSummary {
        private final CooperatorSupplier supplier;
        private final List<SupplierInvoice> openInvoices = new ArrayList<>();
        private BigDecimal total = BigDecimal.ZERO;
        private BigDecimal overdue = BigDecimal.ZERO;
    }

    @Transactional(readOnly = true)
    public Collection<SupplierSummary> summaries(LocalDate today) {
        Map<Integer, SupplierSummary> groups = new LinkedHashMap<>();
        for (SupplierInvoice invoice : invoices.forPayablesReport()) {
            BigDecimal balance = invoice.getOutstandingAmount();
            if (balance.signum() <= 0) continue;
            var supplier = invoice.getSupplier();
            var group = groups.computeIfAbsent(supplier.getSupplierNo(), id -> new SupplierSummary(supplier));
            group.openInvoices.add(invoice);
            group.total = group.total.add(balance);
            if (invoice.getDueDate().isBefore(today)) group.overdue = group.overdue.add(balance);
        }
        return groups.values();
    }
}
