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

    private int materialNo; //자재일련번호

    private String materialCode; //자재코드

    private String materialName; //자재명

    private String materialType; //자재분류

    private String materialExplaination; //자재설명

    private Long materialSupplyPrice; //자재공급단가

    private LocalDateTime regDate; //등록일

    private LocalDateTime modDate; //수정일
}
