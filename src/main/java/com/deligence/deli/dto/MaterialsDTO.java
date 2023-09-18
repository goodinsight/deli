package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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

    public MaterialsDTO(String materialName, String materialType, String materialExplaination, long materialSupplyPrice){
        LocalDate date = LocalDate.now();
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        this.materialName = materialName;
        this.materialType = materialType;
        this.materialExplaination = materialExplaination;
        this.materialSupplyPrice = materialSupplyPrice;

        this.materialCode = "Material" + materialType + date.format(dateTimeFormatter); // 생성시 등록순서 증가하게 추가해야됨
    }

}
