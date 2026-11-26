package com.deligence.deli.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.Instant;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DepositUnmatch {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private BankDeposit deposit;
    @OneToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(unique = true, nullable = false)
    private ContractLedgerEntry receipt;
    @Column(nullable = false, length = 250)
    private String reason;
    private String recordedBy;
    private Instant recordedAt;

    public DepositUnmatch(BankDeposit deposit, String reason, String user) {
        this.deposit = deposit;
        this.receipt = deposit.getReceipt();
        this.reason = reason;
        recordedBy = user;
        recordedAt = Instant.now();
    }
}
