package com.deligence.deli.dto;

//자재조달계약 DTO

import com.deligence.deli.domain.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialProcurementContractDetailDTO {

    private int materialProcurementContractNo;              //조달계약일련번호

    private String materialProcurementContractCode;         //자재조달계약코드

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate materialProcurementContractDate;      //계약일

    private String materialProcurementContractState;        //계약상태 -> 조달 계약 협상중, 발주 진행중(계약 진행), 조달 완료(계약 완료), 계약 파기

    private String materialProcurementContractEtc;          //조건상세(기타사항)

    private int procurementQuantity;                        //자재 조달 수량

    //--------------------------------------------------------------------------------------

    private int materialProcurementPlanNo;          //자재조달계획 일련번호 FK

    private String materialProcurementPlanCode;     //자재조달코드

    private int materialRequirementsCount;          //자재 소요량

    private String materialCode;                    //자재코드(검색용)

    private String materialType;                    //자재분류

    private String materialName;                    //자재이름(검색용)

    private Long materialSupplyPrice;               //자재 공급단가 (검색용)

    //--------------------------------------------------------------------------------------

    private int supplierNo;                     //자재협력회사 일련번호 (FK)

    private String supplierName;                //자재협력회사명(검색용)

    private String supplierCeo;                 //자재협력회사 대표명

    private String supplierPhone;               //자재협력회사 연락처

    private String supplierStatus;              //계약이력여부 (검색용) -> 계약중, 계약파기, 계약만료

    //--------------------------------------------------------------------------------------

    private int employeeNo;                     //사원 일련번호 (FK)

    private String employeeName;                //사원명 (담당자 이름)

    private int documentFileNo;                 //문서파일 일련번호 (FK)

    private LocalDateTime regDate;              //등록일

    private LocalDateTime modDate;              //수정일
}
