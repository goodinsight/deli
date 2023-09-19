package com.deligence.deli.dto;

import com.deligence.deli.domain.DocumentFile;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDTO {

    private int materialInventoryNo; // 자재 재고 일련번호

    private Materials materials; // 자제 일련번호

    private int materialIncomingQuantity; // 입고 수량

    private int materialOutgoingQuantity; // 출고 수량

    private int materialStock; // 재고 수량

    private Long materialSupplyPrice; // 공급 단가

    private Long materialTotalInventoryPayments; // 재고 금액

    private DocumentFile documentFile; // 문서 파일 일련번호

    private Order order; // 발주 일련번호

}
