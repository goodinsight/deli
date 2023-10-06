package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CooperatorSupplierDTO {

    private int supplierNo;                 //자재협력회사 일련번호

    private int corporateRegistrationNo;    //사업자 등록번호

    private String supplierCeo;             //자재협력회사 대표명

    private String supplierEmail;           //자재협력회사 이메일

    private String supplierName;            //자재협력회사명

    private String supplierPhone;           //자재협력회사 연락처

    private String supplierAddress;         //자재협력회사 주소

    private String supplierStatus;          //자재협력회사 계약 이력 -> 계약중, 계약종료, 계약전, 계약파기

    private String supplierEtc;             //비고

    private int documentFileNo;             //문서파일일련번호 FK

}
