package com.deligence.deli.domain;

//제품계약사항 Entity

import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.ProductContractDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"products", "cooperatorClient", "employee", "documentFile"})
public class ProductContract extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productContractNo;              //계약일련번호(-> 목록에 사용)

    private String productContractCode;         //제품계약코드(-> 목록 / 상세 / 등록)

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;                  //제품일련번호 (FK) ---------------------------------------------

    private String productCode;                 //제품코드 (-> 목록 - 검색용 / 상세 - 모달창으로 검색-제품명,제품타입)

    private int productQuantity;                //제품수량 (-> 목록 / 상세 / 등록 / 수정)

    private LocalDate productContractDate;      //계약일 (-> 상세 / 등록)

    private LocalDate productDeliveryDate;      //제품 납기일 (-> 목록 / 상세 / 등록 / 수정)

    private String productQuotation;            //견적내용(상세내용) (-> 상세)

    private String productContractState;        //계약진행상태 (-> 상세 / 등록 / 수정) - '제품생산중', '자재조달중', '계약파기', '계약완료'
    //-> 이렇게까지 복잡할 필요가 있는지 모르겠지만 일단 추가함.

    @ManyToOne(fetch = FetchType.LAZY)
    private CooperatorClient cooperatorClient;  //구매협력회사일련번호 (FK) (목록 - 회사명, 계약상태 / 상세 - 모달창으로 검색 - 대표명, 연락처)

    private String clientName;                  //구매협력회사명 (-> 목록 - 검색용)

    private String clientStatus;                //계약상태 (-> 목록 - 검색용) - '계약전', '계약중', '계약종료', '계약파기'

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;                  //사원일련번호-담당자 (FK) (-> 상세 - 계약담당자)

    private String  employeeName;               //담당자

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;          //문서파일일련번호(FK)


    public void change(ProductContractDTO productContractDTO){
        //계약코드, 제품수량, 납기일, 견적(상세)내용, 제품계약진행상태

        this.productContractCode = productContractDTO.getProductContractCode();
        this.productQuantity = productContractDTO.getProductQuantity();
        this.productDeliveryDate = productContractDTO.getProductDeliveryDate();
        this.productQuotation = productContractDTO.getProductQuotation();
        this.productContractState = productContractDTO.getProductContractState();

        //사원명

    }

    public void changeState(String productContractState){

        this.productContractState = productContractState;

    }

}
