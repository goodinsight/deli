package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DocumentFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int documentFileNo; // 문서 파일 일련번호

    @Column(length = 500, nullable = false)
    private String documentFileName; // 문서명

    @Column(length = 500, nullable = false)
    private String documentFileType; // 문서 종류

    @Column(length = 500, nullable = false)
    private String documentFilePath; // 경로

    @Column(length = 500, nullable = false)
    private String documentFileUuid; // 범용식별자



}
