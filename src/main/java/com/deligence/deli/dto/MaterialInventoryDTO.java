package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDTO {

    private Long material_no; // 자제일련번호

    private int material_incoming_quantity; // 입고 수량

    private int material_outgoing_quantity; // 출고 수량

    private int material_stock; // 재고 수량

    private Long material_supply_price; // 공급 단가

    private Long material_total_inventory_payments; // 재고 금액

}
