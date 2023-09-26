package com.deligence.deli.dto;

//자재조달계약 DTO

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialProcurementContract;
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
public class MaterialProcurementContractDTO {

    private int MaterialProcurementContractNo;  //조달계약일련번호

    private String materialProcurementContractCode; //자재조달계약코드

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate materialProcurementContractDate;  //계약일

    private String materialProcurementContractState;    //계약상태

    private String materialProcurementContractEtc;  //조건상세(기타사항)

    //실질적으로 필요 없을 부분(9.25 수정)
//    private int materialNo; //자재일련번호 (Materials material)

    //9.25 추가사항 (자재정보, 소요량 가져옴)
    private int materialProcurementPlanNo;  //조달계획일련번호 FK

    private String materialProcurementPlanCode; //조달계획코드(검색용)

    private String materialCode;    //자재코드(검색용)

    private String materialName;    //자재이름(검색용)

    private Long materialSupplyPrice;   //자재 공급단가 (검색용)

    private int procurementQuantity;  //자재 조달 수량 (실질적으로 한 회사에 조달할 양)

    private int materialRequirementsCount;  //삭제예정 (오류때문에 일시적 삭제 불가)

    private int supplierNo; //자재협력회사 일련번호 (FK)

    private String supplierName;    //자재협력회사명(검색용)

    private String supplierStatus;  //자재협력회사계약상태 (검색용)

    private int employeeNo; //사원 일련번호 (FK)

    private String employeeName;    //사원명(사원일련번호를 통해서 가져오면 필요 없음)

    private int documentFileNo; //문서파일 일련번호 (FK)

    private LocalDateTime regDate;  //등록일

    private LocalDateTime modDate;  //수정일
}
