package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MeterialInOutHistory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialHistoryNo; // 자재기록번호

    @Column(length = 500, nullable = false)
    private String inOutSeparator;

    @Column(length = 500, nullable = false)
    private int quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialInventory materialInventory;

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;


}
