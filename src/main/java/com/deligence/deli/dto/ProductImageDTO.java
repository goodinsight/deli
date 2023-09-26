package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class ProductImageDTO {

    private int productImgNo; //이미지일련번호

    private String productImgName; //자재이미지명

    private String productImgUuid; //범용식별자

    private int productNo; //자재일련번호

}
