package com.deligence.deli.domain;

//자재 조달 계약 Entity - ksy

import com.deligence.deli.dto.MaterialProcurementContractDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MaterialProcurementContract")
@ToString(exclude = {"materialProcurementPlanning","cooperatorSupplier", "employee", "documentFile"})
public class MaterialProcurementContract extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialProcurementContractNo;  //조달계약 일련번호

    private String materialProcurementContractCode;     //조달계약코드

    private LocalDate materialProcurementContractDate;  //조달계약일

    private String materialProcurementContractState;    //조달계약상태

    private String materialProcurementContractEtc;  //조건상세(기타사항)

    //9.25 추가사항 (자재정보, 소요량 가져옴)
    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialProcurementPlanning materialProcurementPlanning;    //조달계획(일련번호

    private String materialProcurementPlanCode;   //조달계획코드(검색용)

    //실질적으로 필요 없을 부분(9.25 수정) -> 조달계획에서 자재 정보 가져옴.
//    @ManyToOne(fetch = FetchType.LAZY)
//    private Materials materials;    //자재일련번호 FK

    private String materialCode;   //자재코드 (검색용)

    private String materialName;   //자재명 (검색용)

    private Long materialSupplyPrice; //공급단가 (검색용)

    private int procurementQuantity;  //자재 조달 수량 (한 협력회사에서 실직적으로 조달할 양)

    private int materialRequirementsCount;  //삭제예정 (오류때문에 일시적 삭제 불가)


    //    @ManyToOne(fetch = FetchType.LAZY)
    @ManyToOne(cascade = CascadeType.ALL)
    private CooperatorSupplier cooperatorSupplier;  //자재조달협력회사 일련번호 FK

    private String supplierName;   //자재협력회사명 (검색용)

    private String supplierStatus; //계약상태 (검색용)
    //검색에 자재조달 계약상태가 필요하면 해당 컬럼은 불필요.

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;  //사원일련번호 FK

    private String employeeName;    //사원명 (사원일련번호를 통해서 가져오면 필요 없음)

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;   //문서파일일련번호 FK


    //수정가능한 속성 지정 (계약일, 조건상세, 계약상태 지정)
    public void change(MaterialProcurementContractDTO materialProcurementContractDTO) {

        this.materialProcurementContractCode = materialProcurementContractDTO.getMaterialProcurementContractCode();
        this.materialProcurementContractDate = materialProcurementContractDTO.getMaterialProcurementContractDate();
        this.materialProcurementContractState = materialProcurementContractDTO.getMaterialProcurementContractState();
        this.materialProcurementContractEtc = materialProcurementContractDTO.getMaterialProcurementContractEtc();
        this.procurementQuantity = materialProcurementContractDTO.getProcurementQuantity();

    }

    public void changeState(String materialProcurementContractState) {

        this.materialProcurementContractState = materialProcurementContractState;
    }
}
