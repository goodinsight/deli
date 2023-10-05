package com.deligence.deli.dto;

import com.deligence.deli.domain.DocumentFile;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CooperatorClientDTO {

    private int clientNo;   //구매협력회사 일련번호

    private int corporateRegistrationNo;    //사업자등록번호

    private String clientCeo;   //구매협력회사대표

    private String clientEmail; //구매협력회사이메일

    private String clientName;  //구매협력회사명

    private String clientPhone; //구매협력회사연락처

    private String clientAddress;   //구매협력회사주소

    private String clientStatus;    //계약상태

    private String clientEtc;   //비고

}
