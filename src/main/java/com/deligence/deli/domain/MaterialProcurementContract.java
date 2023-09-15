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
@ToString(exclude = {"employee"})
public class MaterialProcurementContract extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int material_procurement_contract_no;

//    @ManyToOne
//    private Material material;    //자재일련번호 (material_no)

    private String material_procurement_contract_code;

    private LocalDate material_procurement_contract_date;

    private String material_procurement_contract_state;

//    @ManyToOne
//    private DocumentFile document_file;   //문서파일일련번호 (document_file_no)

//    @ManyToOne
//    private CooperatorSupplier supplier;  //자재조달협력회사일련번호 supplier_no

    @ManyToOne
    private Employee employee;  //사원일련번호 employee_no

    private String material_code;   //자재코드 (검색용)

    private String material_name;   //자재명 (검색용)

    private Long material_supply_price; //공급단가 (검색용)

    private String supplier_name;   //자재협력회사명 (검색용)

    private String supplier_status; //계약상태 (검색용)

}
