package com.deligence.deli.domain;

//구매협력회사(클라이언트) Entity

import com.deligence.deli.dto.CooperatorClientDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString(exclude = "documentFile")
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

    private String clientEtc;   //비고


    public void change(CooperatorClientDTO cooperatorClientDTO){
        this.corporateRegistrationNo = cooperatorClientDTO.getCorporateRegistrationNo(); //사업자 등록번호
        this.clientCeo = cooperatorClientDTO.getClientCeo();                             // 구매협력회사대표
        this.clientEmail = cooperatorClientDTO.getClientEmail();                         //구매협력회사이메일
        this.clientName = cooperatorClientDTO.getClientName();                           //구매협력회사명
        this.clientPhone = cooperatorClientDTO.getClientPhone();                         //구매협력회사연락처
        this.clientAddress = cooperatorClientDTO.getClientAddress();                     //구매협력회사주소
        this.clientEtc = cooperatorClientDTO.getClientEtc();                             //비고
    }

}
