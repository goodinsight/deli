package com.deligence.deli.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.Instant;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PartnerLink {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    @JoinColumn(name = "client_no", nullable = false, unique = true)
    private CooperatorClient client;

    @OneToOne(optional = false)
    @JoinColumn(name = "supplier_no", nullable = false, unique = true)
    private CooperatorSupplier supplier;

    @Column(nullable = false)
    private String confirmedBy;

    @Column(nullable = false)
    private Instant confirmedAt;

    public PartnerLink(CooperatorClient client, CooperatorSupplier supplier, String confirmedBy) {
        this.client = client;
        this.supplier = supplier;
        this.confirmedBy = confirmedBy;
        this.confirmedAt = Instant.now();
    }
}
