package com.deligence.deli.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
public class BankDeposit {
    @Id
    private String reference;
    private LocalDate depositDate;
    @Column(nullable = false, precision = 26, scale = 2)
    private BigDecimal amount;
    private String payer;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receipt_id", unique = true)
    private ContractLedgerEntry receipt;

    public Integer getContractNo() {
        return receipt == null ? null : receipt.getContract().getProductContractNo();
    }
    private String receiptKey;

    public BankDeposit(String reference, LocalDate date, BigDecimal amount, String payer) {
        this.reference = reference;
        this.depositDate = date;
        this.amount = amount;
        this.payer = payer;
        receiptKey = UUID.randomUUID().toString();
    }

    public void unmatch() {
        receipt = null;
        receiptKey = UUID.randomUUID().toString();
    }

    public void match(ContractLedgerEntry receipt) {
        this.receipt = receipt;
    }
}
