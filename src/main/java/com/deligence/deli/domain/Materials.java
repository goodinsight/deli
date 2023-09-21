package com.deligence.deli.domain;

import lombok.*;
import org.hibernate.annotations.BatchSize;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "imageSet")

public class Materials extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private int materialNo; //자재일련번호

    @Column(length = 100, nullable = true)
    private String materialCode; // 자재코드

    @Column(length = 50, nullable = true)
    private String materialName; //자재명

    @Column(length = 50, nullable = true)
    private String materialType; //자재분류

    @Column(length = 1000, nullable = true)
    private String materialExplaination; //자재설명

    @Column(length = 50, nullable = true)
    private Long materialSupplyPrice; //자재공급단가

    @OneToMany(mappedBy = "materials",
            cascade = {CascadeType.ALL},
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<MaterialImage> imageSet = new HashSet<>(); //이미지 첨부

    public void change(String materialName, String materialType, String materialExplaination, Long materialSupplyPrice, LocalDateTime regDate, LocalDateTime modDate){
        this.materialName = materialName;
        this.materialType = materialType;
        this.materialExplaination = materialExplaination;
        this.materialSupplyPrice = materialSupplyPrice;
    }

    public void addImage(String materialUuid, String materialImgName) {

        MaterialImage materialImage = MaterialImage.builder()
                .materialUuid(materialUuid)
                .materialImgName(materialImgName)
                .materials(this)
                .materialImgNo(imageSet.size())
                .build();
        imageSet.add(materialImage);
    }

    public void clearImages(){

        imageSet.forEach(materialImage -> materialImage.changeMaterial(null));

        this.imageSet.clear();
    }

}
