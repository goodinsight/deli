package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "materials")
public class MaterialImage implements Comparable<MaterialImage>{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = true)
    private int materialImgNo; //이미지일련번호

    @Column(length = 100, nullable = false)
    private String materialImgName; //자재이미지명

    @Column(length = 100, nullable = false)
    private String materialUuid; //범용식별자

    @ManyToOne(fetch = FetchType.LAZY)
    private Materials materials; //자재일련번호

    @Override
    public int compareTo(MaterialImage other) {
        return this.materialImgNo - other.materialImgNo;
    }
    public void changeMaterial(Materials materials){
        this.materials = materials;
    }

}
