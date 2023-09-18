package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Materials extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private int material_no; //자재일련번호

    @Column(length = 100, nullable = true)
    private String material_code; // 자재코드

    @Column(length = 50, nullable = true)
    private String material_name; //자재명

    @Column(length = 50, nullable = true)
    private String material_type; //자재분류

    @Column(length = 1000, nullable = true)
    private String material_explaination; //자재설명

    @Column(length = 50, nullable = true)
    private Long material_supply_price; //자재공급단가
}
