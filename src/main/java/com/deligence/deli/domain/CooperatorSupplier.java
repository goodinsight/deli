package com.deligence.deli.domain;

//자재협력회사정보테이블 -> 우선순위x entity만

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "documentFile")
public class CooperatorSupplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int supplierNo;    //자재협력회사 일련번호

    private int corporateRegistrationNo;  //사업자등록번호

    private String supplierCeo;    //자재협력회사 대표

    private String supplierEmail;  //자재협력회사 이메일

    private String supplierName;   //자재협력화사명

    private String supplierPhone;  //자재협력회사연락처

    private String supplierAddress;    //자재협력회사주소

    private String supplierStatus; //계약상태

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;    //문서파일 일련번호 (document_file_no)

    private String supplierEtc;    //비고

}
