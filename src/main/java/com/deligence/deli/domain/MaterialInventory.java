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

    public void change(int material_incoming_quantity, int material_outgoing_quantity, int material_stock, Long material_supply_price, Long material_total_inventory_payments) {

        this.material_incoming_quantity = material_incoming_quantity;
        this.material_outgoing_quantity = material_outgoing_quantity;
        this.material_stock = material_stock;
        this.material_supply_price = material_supply_price;
        this.material_total_inventory_payments = material_total_inventory_payments;

    }


}
