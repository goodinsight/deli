package com.deligence.deli.domain;

//제품계약사항 Entity

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"products", "cooperatorClient", "employee", "documentFile"})
public class ProductContract extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productContractNo;              //계약일련번호

    private String productContractCode;         //제품계약코드

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;                  //제품일련번호 (FK)

    private String productCode;                 //제품코드 (클라이언트 주문 목록 -> 검색용)

    private int productQuantity;                //제품수량 (클라이언트 주문 목록)

    private LocalDate productDeliveryDate;      //납기일 (클라이언트 주문 목록)

    private String productQuotation;            //견적내용

    @ManyToOne(fetch = FetchType.LAZY)
    private CooperatorClient cooperatorClient;  //구매협력회사일련번호 (FK)

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;  //사원일련번호-담당자 (FK)


    private String clientName;  //구매협력회사명

    private String clientStatus;    //계약상태

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;    //문서파일일련번호(FK)
}
