package com.deligence.deli.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(indexes = @Index(name = "idx_consultation_client_time", columnList = "client_no,consulted_at"))
public class ClientConsultation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_no", nullable = false)
    private CooperatorClient client;

    @Column(name = "consulted_at", nullable = false)
    private LocalDateTime consultedAt;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private String channel;

    @Column(nullable = false, length = 2000)
    private String notes;

    public ClientConsultation(CooperatorClient client, LocalDateTime consultedAt,
                              String author, String channel, String notes) {
        this.client = client;
        this.consultedAt = consultedAt;
        this.author = author;
        this.channel = channel;
        this.notes = notes;
    }
}
