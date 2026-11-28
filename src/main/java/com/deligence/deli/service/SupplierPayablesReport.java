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
import java.time.temporal.ChronoUnit;
import java.util.*;

@Service
@RequiredArgsConstructor
public class SupplierPayablesReport {
    private final SupplierInvoiceRepository invoices;

    public enum DueWindow { ALL, TODAY, NEXT_SEVEN }

    @Getter
    @RequiredArgsConstructor
    public static class UpcomingPayments {
        private final List<SupplierInvoice> invoices;
        private final Collection<SupplierSummary> suppliers;

        public BigDecimal getTotal() {
            return suppliers.stream().map(SupplierSummary::getTotal).reduce(BigDecimal.ZERO, BigDecimal::add);
        }
    }

    @Transactional(readOnly = true)
    public UpcomingPayments upcoming(LocalDate start, LocalDate end) {
        List<SupplierInvoice> outstanding = new ArrayList<>();
        Map<Integer, SupplierSummary> groups = new LinkedHashMap<>();
        for (SupplierInvoice invoice : invoices.dueBetween(start, end)) {
            BigDecimal balance = invoice.getOutstandingAmount();
            if (balance.signum() <= 0) continue;
            outstanding.add(invoice);
            addToSupplier(groups, invoice, balance);
        }
        return new UpcomingPayments(outstanding, groups.values());
    }

    @Getter
    @RequiredArgsConstructor
    public enum OverduePeriod {
        FIRST_MONTH(30, "1~30일"),
        SECOND_MONTH(60, "31~60일"),
        THIRD_MONTH(90, "61~90일"),
        OLDER(Long.MAX_VALUE, "91일 이상");

        private final long maximumDays;
        private final String label;
    }

    @Getter
    @RequiredArgsConstructor
    public static class SupplierSummary {
        private final CooperatorSupplier supplier;
        private final List<SupplierInvoice> openInvoices = new ArrayList<>();
        private BigDecimal total = BigDecimal.ZERO;
        private final Map<OverduePeriod, BigDecimal> aging = new EnumMap<>(OverduePeriod.class);

        public BigDecimal getOverdue() {
            return aging.values().stream().reduce(BigDecimal.ZERO, BigDecimal::add);
        }

        private void recordOverdue(long days, BigDecimal balance) {
            for (OverduePeriod period : OverduePeriod.values()) {
                if (days <= period.maximumDays) {
                    aging.merge(period, balance, BigDecimal::add);
                    return;
                }
            }
        }
    }

    @Transactional(readOnly = true)
    public Collection<SupplierSummary> summaries(LocalDate today) {
        Map<Integer, SupplierSummary> groups = new LinkedHashMap<>();
        for (SupplierInvoice invoice : invoices.forPayablesReport()) {
            BigDecimal balance = invoice.getOutstandingAmount();
            if (balance.signum() <= 0) continue;
            var group = addToSupplier(groups, invoice, balance);
            long daysOverdue = ChronoUnit.DAYS.between(invoice.getDueDate(), today);
            if (daysOverdue > 0) group.recordOverdue(daysOverdue, balance);
        }
        return groups.values();
    }

    private SupplierSummary addToSupplier(Map<Integer, SupplierSummary> groups, SupplierInvoice invoice, BigDecimal balance) {
        var supplier = invoice.getSupplier();
        var group = groups.computeIfAbsent(supplier.getSupplierNo(), id -> new SupplierSummary(supplier));
        group.openInvoices.add(invoice);
        group.total = group.total.add(balance);
        return group;
    }
}
