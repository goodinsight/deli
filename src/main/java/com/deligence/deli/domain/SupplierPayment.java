package com.deligence.deli.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"invoice_id", "request_key"}))
public class SupplierPayment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "invoice_id", nullable = false)
    private SupplierInvoice invoice;
    @Column(name = "request_key", nullable = false, length = 36)
    private String requestKey;
    @Column(nullable = false, precision = 26, scale = 2)
    private BigDecimal amount;
    @Column(nullable = false)
    private String recordedBy;
    @Column(nullable = false)
    private Instant recordedAt;
    private String cancelledBy;
    private Instant cancelledAt;
    @Column(length = 250)
    private String cancellationReason;

    public SupplierPayment(SupplierInvoice invoice, UUID requestId, BigDecimal amount, String user) {
        this.invoice = invoice;
        requestKey = requestId.toString();
        this.amount = amount;
        recordedBy = user;
        recordedAt = Instant.now();
    }

    public void cancel(String reason, String user) {
        if (cancelledAt != null) return;
        cancellationReason = reason;
        cancelledBy = user;
        cancelledAt = Instant.now();
    }
}
