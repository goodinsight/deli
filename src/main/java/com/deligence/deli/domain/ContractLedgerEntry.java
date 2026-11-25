package com.deligence.deli.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"contract_no", "entry_key"}))
public class ContractLedgerEntry {
    private static final String INVOICE_KEY = "invoice";
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "contract_no", nullable = false)
    private ProductContract contract;
    @Column(name = "entry_key", nullable = false, length = 36)
    private String entryKey;
    @Column(nullable = false, precision = 26, scale = 2)
    private BigDecimal amount;
    @Column(nullable = false)
    private String recordedBy;
    @Column(nullable = false)
    private Instant recordedAt;

    private ContractLedgerEntry(ProductContract contract, String key, BigDecimal amount, String user) {
        this.contract = contract;
        this.entryKey = key;
        this.amount = amount;
        this.recordedBy = user;
        this.recordedAt = Instant.now();
    }

    public static ContractLedgerEntry invoice(ProductContract contract, BigDecimal amount, String user) {
        return new ContractLedgerEntry(contract, INVOICE_KEY, amount, user);
    }

    public static ContractLedgerEntry receipt(ProductContract contract, java.util.UUID requestId, BigDecimal amount, String user) {
        return new ContractLedgerEntry(contract, requestId.toString(), amount, user);
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reversed_receipt_id", unique = true)
    private ContractLedgerEntry reversedReceipt;

    @Column(length = 250)
    private String reversalReason;

    public static ContractLedgerEntry reversal(ContractLedgerEntry receipt, String reason, String user) {
        var reversal = new ContractLedgerEntry(receipt.getContract(), "reversal-" + receipt.getId(), receipt.getAmount(), user);
        reversal.reversedReceipt = receipt;
        reversal.reversalReason = reason;
        return reversal;
    }

    public boolean isInvoiceCancellation() {
        return "invoice-cancel".equals(entryKey);
    }

    public boolean isSettlement() {
        return entryKey.startsWith("settled-");
    }

    public static ContractLedgerEntry settlement(ContractLedgerEntry receipt, String reason, String user) {
        var entry = reversal(receipt, reason, user);
        entry.entryKey = "settled-" + receipt.getId();
        return entry;
    }

    public static ContractLedgerEntry cancelInvoice(ContractLedgerEntry invoice, String reason, String user) {
        var entry = new ContractLedgerEntry(invoice.contract, "invoice-cancel", invoice.amount, user);
        entry.reversalReason = reason;
        return entry;
    }

    public boolean isReversal() {
        return reversedReceipt != null;
    }

    public boolean isInvoice() {
        return INVOICE_KEY.equals(entryKey);
    }
}
