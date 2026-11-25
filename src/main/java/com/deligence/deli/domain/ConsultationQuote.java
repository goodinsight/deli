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
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"consultation_id", "revision"}))
public class ConsultationQuote {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "consultation_id")
    private ClientConsultation consultation;

    private int revision;
    private int productNo;
    private String productCode;
    private String productName;
    private int quantity;
    @Column(nullable = false, precision = 16, scale = 2)
    private BigDecimal unitPrice;
    private LocalDate deliveryDate;
    private String author;
    private String approver;
    private Instant approvedAt;

    public ConsultationQuote(ClientConsultation consultation, int revision, Products product,
                             int quantity, BigDecimal unitPrice, LocalDate deliveryDate, String author) {
        this.consultation = consultation;
        this.revision = revision;
        this.productNo = product.getProductNo();
        this.productCode = product.getProductCode();
        this.productName = product.getProductName();
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.deliveryDate = deliveryDate;
        this.author = author;
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_contract_no", unique = true)
    private ProductContract contract;

    public void linkContract(ProductContract contract) {
        this.contract = contract;
    }

    public BigDecimal getTotal() {
        return unitPrice.multiply(BigDecimal.valueOf(quantity));
    }

    public void approve(String username) {
        this.approver = username;
        this.approvedAt = Instant.now();
    }
}
