package com.deligence.deli.domain;

import com.deligence.deli.dto.OrderDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Orders")
@ToString(exclude = {"employee", "materialProcurementPlanning", "materialProcurementContract"})
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderNo;//발주 일련번호

    private String orderCode;//발주 코드

    private int orderQuantity;//발주 수량

    private LocalDate orderDeliveryDate;//납기일

    private LocalDate orderDate;//발주일

    private String orderState;//발주 상태

    private String orderEtc; //비고

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementPlanning materialProcurementPlanning; // 조달계획 (일련번호)

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementContract materialProcurementContract; // 조달계획 (일련번호)

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee; //사원 (일련번호)

    private String materialName; //자재 이름

    private String employeeName; //사원명

    @OneToMany(mappedBy = "order",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    @Builder.Default
    private List<ProgressInspection> piList = new ArrayList<>();

    public void change(OrderDTO orderDTO){

        this.orderCode = orderDTO.getOrderCode();
        this.orderQuantity = orderDTO.getOrderQuantity();
        this.orderDeliveryDate = orderDTO.getOrderDeliveryDate();
        this.orderDate = orderDTO.getOrderDate();
        this.orderState = orderDTO.getOrderState();
        this.orderEtc = orderDTO.getOrderEtc();

    }

    public void changeState(String orderState){

        this.orderState = orderState;

    }

}
