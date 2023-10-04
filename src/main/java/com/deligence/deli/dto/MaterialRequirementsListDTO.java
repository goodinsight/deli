package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialRequirementsListDTO {

    private int materialRequirementsListNo; //필요항목일련번호

    private int productNo;                  //제품 일련번호

    private int materialNo;                 //자재 일련번호

    private int quantity;                   //수량


    //목록에 필요한 항목 (검색용)

    private String productCode;             //제품 코드

    private String productName;             //제품 이름

    private String productType;             //제품 타입

    private String materialCode;            //자재 코드

    private String materialName;            //자재 이름

    private String materialType;            //자재 타입
}
