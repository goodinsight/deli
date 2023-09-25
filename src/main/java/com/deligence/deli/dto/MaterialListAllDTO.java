package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialListAllDTO {

    private int materialNo; //자재일련번호

    private String materialCode; // 자재코드

    private String materialName; //자재명

    private String materialType; //자재분류

    private String materialExplaination; //자재설명

    private Long materialSupplyPrice; //자재공급단가

    private Long materialCount;

    private List<MaterialImageDTO> materialImages;
}
