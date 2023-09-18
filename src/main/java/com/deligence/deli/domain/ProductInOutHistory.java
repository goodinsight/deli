package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductInOutHistory extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productHistoryNo;   // 제품기록번호

    private String inOutSeparator;  //입 출고 구분자

    private int quantity;   //(입 출고) 수량

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;  // 사원 (일련번호)

    @OneToOne
    private ProductInventroy productInventroy;  // 제품 재고

}
