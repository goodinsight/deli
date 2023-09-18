package com.deligence.deli.domain;

//구매협력회사(클라이언트) Entity

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
//@ToString(exclude = "documentFile")
public class CooperatorClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int clientNo;   //구매협력회사 일련번호

    private int corporateRegistrationNo;    //사업자등록번호

    private String clientCeo;   //구매협력회사대표

    private String clientEmail; //구매협력회사이메일

    private String clientName;  //구매협력회사명

    private String clientPhone; //구매협력회사연락처

    private String clientAddress;   //구매협력회사주소

    private String clientStatus;    //계약상태

//    @ManyToOne()
//    private DocumentFile documentFile;  //문서파일일련번호(FK)

    private String clientEtc;   //비고

}
