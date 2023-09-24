package com.deligence.deli.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class MaterialImageDTO {

    private int materialImgNo; //이미지일련번호

    private String materialImgName; //자재이미지명

    private String materialUuid; //범용식별자

    private int materialNo; //자재일련번호

}
