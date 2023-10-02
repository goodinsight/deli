package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductContractDetailDTO {

    private int productContractNo;              //계약일련번호(-> 목록에 사용)

    private String productContractCode;         //제품계약코드(-> 목록 / 상세 / 등록)

    private int productNo;                      //제품일련번호 (FK) (-> 상세 - 모달창)

    private String productCode;                 //제품코드 (-> 목록 - 검색용 / 상세 - 모달창으로 검색-제품명,제품타입)

    private String productName;                 //제품명 (-> 상세 - 모달창)

    private String productType;                 //제품타입(-> 상세 - 모달창)

    private int productQuantity;                //제품수량 (-> 목록 / 상세 / 등록 / 수정)

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productContractDate;      //계약일 (-> 상세 / 등록)

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate productDeliveryDate;      //납기일 (-> 목록 / 상세 / 등록 / 수정)

    private String productQuotation;            //견적내용(상세내용) (-> 상세 / 등록 / 수정)

    private String productContractState;        //계약진행상태 (-> 상세 / 등록 / 수정) - '자재검토중', '자재조달중', '제품생산중', 제품입고완료'
    //-> 이렇게까지 복잡할 필요가 있는지 모르겠지만 일단 추가함. - 등록시 기본값은 '자재검토중'

    private int clientNo;                       //구매협력회사일련번호(FK) (목록 - 회사명, 계약상태 / 상세 - 모달창으로 검색 - 대표명, 연락처)

    private String clientName;                  //구매협력회사명 (-> 목록 - 검색용)

    private String clientStatus;                //계약상태 (-> 목록 - 검색용)

    private String clientCeo;                   //구매협력회사 대표명 (-> 상세 - 모달창)

    private String clientPhone;                 //구매협력회사 연락처 (-> 상세 - 모달창)

    private String clientAddress;               //구매협력회사 주소 (-> 목록)

    private int employeeNo;                     //사원일련번호(FK)-담당자 (FK) (-> 상세 - 계약담당자)

    private String employeeName;                //사원명(담당자) (-> 상세)

    private int documentFileNo;                 //문서파일일련번호(FK)

    private LocalDateTime regDate;              //등록일

    private LocalDateTime modDate;              //수정일

}
