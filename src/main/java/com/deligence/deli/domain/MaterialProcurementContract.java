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
    private int materialProcurementContractNo;                  //조달계약 일련번호

    private String materialProcurementContractCode;             //조달계약코드

    private LocalDate materialProcurementContractDate;          //조달계약일

    private String materialProcurementContractState;            //계약상태 -> 조달 계약 협상중, 발주 진행중(계약 진행), 조달 완료(계약 완료), 계약 파기

    private String materialProcurementContractEtc;              //조건상세(기타사항)

    private int procurementQuantity;                            //자재 조달 수량 (한 협력회사에서 실직적으로 조달할 양)

    //-----------------------------------------------------------------------------------------------------

    @ManyToOne(cascade = CascadeType.ALL)
    private MaterialProcurementPlanning materialProcurementPlanning;    //조달계획(일련번호)

    private String materialProcurementPlanCode;                         //조달계획코드(검색용)

    private String materialCode;                                        //자재코드 (검색용)

    private String materialName;                                        //자재이름 (검색용)

    private Long materialSupplyPrice;                                   //공급단가 (검색용)

    //entity, dto에서 삭제예정 (오류때문에 일시적 삭제 불가)
    private int materialRequirementsCount;

    //--------------------------------------------------------------------------------------------------------

    @ManyToOne(cascade = CascadeType.ALL)
    private CooperatorSupplier cooperatorSupplier;              //자재조달협력회사 일련번호 FK

    private String supplierName;                                //자재협력회사명 (검색용)

    private String supplierStatus;                              //계약이력여부 (검색용) -> 계약중, 계약파기, 계약만료

    //---------------------------------------------------------------------------------------------------------

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;                                  //사원일련번호 FK

    private String employeeName;                                //사원명

    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;                          //문서파일일련번호 FK


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
