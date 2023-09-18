package com.deligence.deli.domain;

//자재 조달 계약 Entity - ksy

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"materials","employee", "cooperatorSupplier"})
public class MaterialProcurementContract extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int materialProcurementContractNo;

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;    //자재일련번호 (material_no)

    private String materialProcurementContractCode;

    private LocalDate materialProcurementContractDate;

    private String materialProcurementContractState;

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;   //문서파일일련번호 (document_file_no)

    @ManyToOne(fetch = FetchType.LAZY)
    private CooperatorSupplier cooperatorSupplier;  //자재조달협력회사일련번호 supplier_no

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;  //사원일련번호 employee_no

    private String materialCode;   //자재코드 (검색용)

    private String materialName;   //자재명 (검색용)

    private Long materialSupplyPrice; //공급단가 (검색용)

    private String supplierName;   //자재협력회사명 (검색용)

    private String supplierStatus; //계약상태 (검색용)

}
