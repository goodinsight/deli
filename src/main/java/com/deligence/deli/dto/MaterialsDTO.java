package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialsDTO {

    private int materialNo; //자재일련번호

    @NotEmpty
    private String materialCode; //자재코드

    @NotEmpty
    private String materialName; //자재명

    @NotEmpty
    private String materialType; //자재분류

    private String materialExplaination; //자재설명

    private Long materialSupplyPrice; //자재공급단가 -> 자재는 회사별로 가격이 다르기 때문에 필요한건지 모르겠음.

    private LocalDateTime regDate; //등록일

    private LocalDateTime modDate; //수정일
    
    //private List<MaterialImageDTO> materialImage;   //자재 이미지MaterialsDTO

    private List<String> fileNames; //첨부파일 이름들

    private int materialInventoryNo;    //자재정보 FK 추가

    private int employeeNo; //담당자 FK 추가가



//    public MaterialsDTO(String materialName, String materialType, String materialExplaination, long materialSupplyPrice){
//        LocalDate date = LocalDate.now();
//        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//        this.materialName = materialName;
//        this.materialType = materialType;
//        this.materialExplaination = materialExplaination;
//        this.materialSupplyPrice = materialSupplyPrice;
//
//        this.materialCode = "Material" + materialType + date.format(dateTimeFormatter); // 생성시 등록순서 증가하게 추가해야됨
//    }

}
