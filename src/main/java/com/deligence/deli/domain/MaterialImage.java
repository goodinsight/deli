package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MaterialImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private int materialImgNo; //이미지일련번호

    @Column(length = 100, nullable = false)
    private String materialImgName; //자재이미지명

    @Column(length = 100, nullable = false)
    private String materialImgPath; //경로

    @Column(length = 100, nullable = false)
    private String materialUuid; //범용식별자

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials Materials; //자재일련번호

}
