package com.deligence.deli.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"supplier_no", "invoice_number"}))
public class SupplierInvoice {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private MaterialProcurementContract contract;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "supplier_no", nullable = false)
    private CooperatorSupplier supplier;
    @Column(name = "invoice_number", length = 100, nullable = false)
    private String number;
    @Column(nullable = false)
    private LocalDate invoiceDate;
    @Column(nullable = false)
    private LocalDate dueDate;
    @Column(nullable = false, precision = 26, scale = 2)
    private BigDecimal amount;
    @Column(nullable = false)
    private String confirmedBy;
    @Column(nullable = false)
    private Instant confirmedAt;

    @OneToMany(mappedBy = "invoice")
    @OrderBy("id ASC")
    private java.util.List<SupplierPayment> payments = new java.util.ArrayList<>();

    public BigDecimal getPaidAmount() {
        return payments.stream().filter(payment -> payment.getCancelledAt() == null)
                .map(SupplierPayment::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private Instant cancelledAt;
    private String cancelledBy;
    @Column(length = 250)
    private String cancellationReason;

    public void cancel(String reason, String user) {
        if (cancelledAt != null) return;
        if (!payments.isEmpty()) throw new IllegalStateException("지급 이력이 있는 청구는 취소할 수 없습니다.");
        cancellationReason = reason;
        cancelledBy = user;
        cancelledAt = Instant.now();
    }

    public BigDecimal getOutstandingAmount() {
        return cancelledAt == null ? amount.subtract(getPaidAmount()) : BigDecimal.ZERO;
    }

    public SupplierInvoice(MaterialProcurementContract contract, String number, LocalDate invoiceDate,
                           LocalDate dueDate, BigDecimal amount, String user) {
        this.contract = contract;
        this.supplier = contract.getCooperatorSupplier();
        this.number = number;
        this.invoiceDate = invoiceDate;
        this.dueDate = dueDate;
        this.amount = amount;
        this.confirmedBy = user;
        this.confirmedAt = Instant.now();
    }
}
