package com.deligence.deli.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

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

    // Older deposits keep their original receipt in receipt_id.
    @OneToMany
    @JoinTable(name = "deposit_allocation",
            joinColumns = @JoinColumn(name = "deposit_reference"),
            inverseJoinColumns = @JoinColumn(name = "receipt_id", unique = true))
    private Set<ContractLedgerEntry> allocations = new LinkedHashSet<>();

    public List<ContractLedgerEntry> getActiveReceipts() {
        var active = new ArrayList<>(allocations);
        if (receipt != null) active.add(receipt);
        active.sort(Comparator.comparing(ContractLedgerEntry::getId));
        return active;
    }

    public BigDecimal getAllocatedAmount() {
        return getActiveReceipts().stream().map(ContractLedgerEntry::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public BigDecimal getRemainingAmount() {
        return amount.subtract(getAllocatedAmount());
    }

    public boolean canAllocateTo(ProductContract contract) {
        var active = getActiveReceipts();
        if (active.isEmpty()) return true;
        var first = active.get(0).getContract();
        if (first.getProductContractNo() == contract.getProductContractNo()) return true;
        var customer = contract.getCooperatorClient();
        return customer != null && first.getCooperatorClient() != null
                && first.getCooperatorClient().getClientNo() == customer.getClientNo();
    }

    public Integer getContractNo() {
        var active = getActiveReceipts();
        return active.size() == 1 ? active.get(0).getContract().getProductContractNo() : null;
    }
    private String receiptKey;

    public BankDeposit(String reference, LocalDate date, BigDecimal amount, String payer) {
        this.reference = reference;
        this.depositDate = date;
        this.amount = amount;
        this.payer = payer;
        receiptKey = UUID.randomUUID().toString();
    }

    public void unmatch(ContractLedgerEntry target) {
        if (receipt != null && receipt.getId().equals(target.getId())) receipt = null;
        else allocations.remove(target);
        receiptKey = UUID.randomUUID().toString();
    }

    public void match(ContractLedgerEntry receipt) {
        allocations.add(receipt);
        receiptKey = UUID.randomUUID().toString();
    }
}
