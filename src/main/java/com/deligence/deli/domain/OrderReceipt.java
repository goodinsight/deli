package com.deligence.deli.domain;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

/** 발주당 한 건의 입고 증빙. 취소해도 삭제하지 않는다. */
@Entity
@Getter
@NoArgsConstructor
public class OrderReceipt {
    @Id
    private Integer orderNo;
    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_no")
    private Order order;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private MaterialInventory inventory;
    private int quantity;
    private long amount;
    private boolean reversed;
    private LocalDateTime receivedAt;
    private LocalDateTime reversedAt;

    public OrderReceipt(Order order, MaterialInventory inventory, int quantity, long amount) {
        this.orderNo = order.getOrderNo();
        this.order = order;
        this.inventory = inventory;
        this.quantity = quantity;
        this.amount = amount;
        this.receivedAt = LocalDateTime.now();
    }

    public void reverse() {
        reversed = true;
        reversedAt = LocalDateTime.now();
    }
}
