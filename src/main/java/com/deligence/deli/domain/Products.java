package com.deligence.deli.domain;

//제품 Entity

import com.deligence.deli.dto.MaterialsDTO;
import lombok.*;
import org.hibernate.annotations.BatchSize;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "imageSet")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private int productNo;  //제품일련번호

    @Column(length = 100, nullable = true)
    private String productCode; //제품코드

    @Column(length = 50, nullable = true)
    private String productName; //제품이름

    @Column(length = 50, nullable = true)
    private String productType; //제품분류

    @Column(length = 1000, nullable = true)
    private String productContent;  //제품내용

//    public void change(ProductsDTO productsDTO){
//        this.productName = productName;
//        this.productType = productType;
//        this.productContent = productContent;
//
//    }

    @OneToMany(mappedBy = "products", //ProductImage의 products변수
            cascade = {CascadeType.ALL},
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<ProductImage> imageSet = new HashSet<>();

    public void addImage(String productImgUuid, String productImgName) {

        ProductImage productImage = ProductImage.builder()
                .productImgUuid(productImgUuid)
                .productImgName(productImgName)
                .products(this)
                .build();
        imageSet.add(productImage);
    }

//    public void clearImages(){
//
//        imageSet.forEach(productImage -> productImage.changeProduct(null));
//
//        this.imageSet.clear();
//    }


}
