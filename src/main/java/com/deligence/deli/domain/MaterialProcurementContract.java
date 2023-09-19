package com.deligence.deli.domain;

//자재 조달 계약 Entity - ksy

import com.deligence.deli.dto.MaterialProcurementContractDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"materials","employee", "cooperatorSupplier", "documentFile"})
public class MaterialProcurementContract extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int materialProcurementContractNo;  //조달계약일련번호

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;    //자재일련번호 (material_no)

    private String materialProcurementContractCode;     //조달계약코드

    private LocalDate materialProcurementContractDate;  //조달계약일

    private String materialProcurementContractState;    //조달계약상태

    private String materialProcurementContractEtc;  //조건상세(기타사항)

    @ManyToOne(fetch = FetchType.LAZY)
    private CooperatorSupplier cooperatorSupplier;  //자재조달협력회사일련번호 supplier_no

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;  //사원일련번호 employee_no

    private String materialCode;   //자재코드 (검색용)

    private String materialName;   //자재명 (검색용)

    private Long materialSupplyPrice; //공급단가 (검색용)

    private String supplierName;   //자재협력회사명 (검색용)

    private String supplierStatus; //계약상태 (검색용)

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;   //문서파일일련번호 (document_file_no)


    //수정가능한 속성 지정 (계약일, 조건상세, 계약상태 지정)
    public void change(MaterialProcurementContractDTO materialProcurementContractDTO) {
        this.materialProcurementContractDate = materialProcurementContractDate;
        this.materialProcurementContractState = materialProcurementContractState;
        this.materialProcurementContractEtc = materialProcurementContractEtc;

        //자재코드
        //분류
        //자재이름
        //공급단가
        //협력회사
        //대표명, 연락처
    }
}
