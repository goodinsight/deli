package com.deligence.deli.domain;

import com.deligence.deli.dto.MaterialsDTO;
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
@ToString(exclude = {"imageSet", "materialInventory", "employee"})

public class Materials extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialNo; //자재일련번호

    private String materialCode; // 자재코드

    private String materialName; //자재명

    private String materialType; //자재분류

    private String materialExplaination; //자재설명

    private Long materialSupplyPrice; //자재공급단가

    @ManyToOne(fetch = FetchType.LAZY)
    private MaterialInventory materialInventory;

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;

    public void change(MaterialsDTO materialsDTO){
        this.materialName = materialsDTO.getMaterialName();
        this.materialType = materialsDTO.getMaterialType();;
        this.materialExplaination = materialsDTO.getMaterialExplaination();
        this.materialSupplyPrice = materialsDTO.getMaterialSupplyPrice();
    }
//    public void change(String materialName, String materialType, String materialExplaination, Long materialSupplyPrice){
//        this.materialName = materialName;
//        this.materialType = materialType;
//        this.materialExplaination = materialExplaination;
//        this.materialSupplyPrice = materialSupplyPrice;
//    }

    public void changeCode(String materialCode){
        this.materialCode = materialCode;
    }

    @OneToMany(mappedBy = "materials",
            cascade = {CascadeType.ALL},
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<MaterialImage> imageSet = new HashSet<>(); //이미지 첨부



    public void addImage(String materialUuid, String materialImgName) {

        MaterialImage materialImage = MaterialImage.builder()
                //.materialImgNo(materialNo)   ----> 이거때문에 이미지 안들어 갔었음
                .materialUuid(materialUuid)
                .materialImgName(materialImgName)
                .materials(this)
                .build();
        imageSet.add(materialImage);
    }

    public void clearImages(){

        imageSet.forEach(materialImage -> materialImage.changeMaterial(null));

        this.imageSet.clear();
    }

}
