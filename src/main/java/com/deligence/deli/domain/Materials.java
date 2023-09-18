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
    private int materialNo; //자재일련번호

    @Column(length = 100, nullable = true)
    private String materialCode; // 자재코드

    @Column(length = 50, nullable = true)
    private String materialName; //자재명

    @Column(length = 50, nullable = true)
    private String materialType; //자재분류

    @Column(length = 1000, nullable = true)
    private String materialExplaination; //자재설명

    @Column(length = 50, nullable = true)
    private Long materialSupplyPrice; //자재공급단가

    public void change(String materialName, String materialType, String materialExplaination, Long materialSupplyPrice){
        this.materialName = materialName;
        this.materialType = materialType;
        this.materialExplaination = materialExplaination;
        this.materialSupplyPrice = materialSupplyPrice;
    }
}
