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

    public enum SettlementType { REFUND, OFFSET }

    @Enumerated(EnumType.STRING)
    private SettlementType settlementType;
    @Column(length = 250)
    private String settlementEvidence;
    private Instant settledAt;
    private String settledBy;

    public boolean isEffective() {
        return cancelledAt == null && settledAt == null;
    }

    public void settle(SettlementType type, String evidence, String user) {
        if (cancelledAt != null) throw new IllegalStateException("입력 취소된 지급입니다.");
        if (settledAt != null) {
            if (settlementType != type || !settlementEvidence.equals(evidence)) {
                throw new IllegalStateException("이미 다른 근거로 정산된 지급입니다.");
            }
            return;
        }
        settlementType = type;
        settlementEvidence = evidence;
        settledBy = user;
        settledAt = Instant.now();
    }

    public void cancel(String reason, String user) {
        if (settledAt != null) throw new IllegalStateException("환급·정산된 지급입니다.");
        if (cancelledAt != null) return;
        cancellationReason = reason;
        cancelledBy = user;
        cancelledAt = Instant.now();
    }
}
