package com.deligence.deli.domain;

//제품별 필요 자재 항목 테이블

import com.deligence.deli.dto.MaterialRequirementsListDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"products", "materials"})
public class MaterialRequirementsList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialRequirementsListNo; //필요항목일련번호

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;  //제품일련번호(FK)

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials;    //자재일련번호(FK)

    private int quantity;   //수량


    //목록에 필요한 항목 (검색용)

    private String productCode;             //제품 코드

    private String productName;             //제품 이름

    private String materialCode;            //자재 코드

    private String materialName;            //자재 이름

    private String materialType;            //자재 타입


    public void change(MaterialRequirementsListDTO materialRequirementsListDTO) {

        this.quantity = materialRequirementsListDTO.getQuantity();

    }

}
