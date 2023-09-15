package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialsDTO {

    private int material_no; //자재일련번호

    private String material_code; //자재코드

    private String material_name; //자재명

    private String material_type; //자재분류

    private String material_explaination; //자재설명

    private Long material_supply_price; //자재공급단가

    private LocalDateTime regDate; //등록일

    private LocalDateTime modDate; //수정일
}
