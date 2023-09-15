package com.deligence.deli.domain;


import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class MaterialInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long material_no; // 자제일련번호

    @Column(length = 500, nullable = true)
    private int material_incoming_quantity; // 입고 수량

    @Column(length = 500, nullable = true)
    private int material_outgoing_quantity; // 출고 수량

    @Column(length = 500, nullable = true)
    private int material_stock; // 재고 수량

    @Column(length = 500, nullable = true)
    private Long material_supply_price; // 공급 단가

    @Column(length = 500, nullable = true)
    private Long material_total_inventory_payments; // 재고 금액


}
