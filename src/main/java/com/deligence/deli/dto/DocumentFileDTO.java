package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DocumentFileDTO {

    private int documentFileNo; // 문서 파일 일련번호

    private String documentFileName; // 문서명

    private String documentFileType; // 문서 종류

    private String documentFilePath; // 경로

    private String documentFileUuid; // 범용식별자

}
