package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"products", "documentFile"})
public class ProductInventroy extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productInventoryNo; //제품재고일련번호

    private int productIncomingQuantity;    //입고수량

    private int productOutcomingQuantity;   //출고수량

    private int productStock;   //재고수량

    private int productSupplyPrice;     //공급단가

    private long productTotalInventoryPayments;     //재고금액

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;  // 제품들 (일련번호)

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;  //문서파일 (일련번호)

    @OneToOne
    private ProductInOutHistory productInOutHistory;    //제품 입출고 기록정보


}
