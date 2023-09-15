package com.deligence.deli.domain;

//자재협력회사정보테이블 -> 우선순위x entity만

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CooperatorSupplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int supplier_no;    //자재협력회사 일련번호

    private int corporate_registration_no;  //사업자등록번호

    private String supplier_ceo;    //자재협력회사 대표

    private String supplier_email;  //자재협력회사 이메일

    private String supplier_name;   //자재협력화사명

    private String supplier_phone;  //자재협력회사연락처

    private String supplier_address;    //자재협력회사주소

    private String supplier_status; //계약상태

//    @ManyToOne
//    private DocumentFile documentFile;    //문서파일 일련번호 (document_file_no)

    private String supplier_etc;    //비고

}
