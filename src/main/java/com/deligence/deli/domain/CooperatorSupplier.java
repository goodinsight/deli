package com.deligence.deli.domain;

import com.deligence.deli.dto.CooperatorSupplierDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@Table(name = "CooperatorSupplier")
@ToString(exclude = "documentFile")
public class CooperatorSupplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer supplierNo;                 //자재협력회사 일련번호

    private int corporateRegistrationNo;        //사업자등록번호

    private String supplierName;                //자재협력화사명

    private String supplierCeo;                 //자재협력회사 대표

    private String supplierAddress;             //자재협력회사 주소

    private String supplierEmail;               //자재협력회사 이메일

    private String supplierPhone;               //자재협력회사 연락처

    private String supplierStatus;              //자재협력회사 계약 이력 -> 계약중, 계약종료, 계약전, 계약파기

    private String supplierEtc;                 //비고

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;    //문서파일 일련번호 FK

    public void change(CooperatorSupplierDTO cooperatorSupplierDTO) {

        this.supplierCeo = cooperatorSupplierDTO.getSupplierCeo();
        this.supplierEmail = cooperatorSupplierDTO.getSupplierEmail();
        this.supplierName = cooperatorSupplierDTO.getSupplierName();
        this.supplierPhone = cooperatorSupplierDTO.getSupplierPhone();
        this.supplierAddress = cooperatorSupplierDTO.getSupplierAddress();
        this.supplierStatus = cooperatorSupplierDTO.getSupplierStatus();
        this.supplierEtc = cooperatorSupplierDTO.getSupplierEtc();

    }

    //이력 상태 변경
    public void changeState(String supplierStatus){

        this.supplierStatus = supplierStatus;

    }

}
