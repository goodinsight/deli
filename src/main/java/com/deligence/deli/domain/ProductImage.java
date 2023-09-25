package com.deligence.deli.domain;

//제품이미지 Entity

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
@ToString(exclude = "products")
public class ProductImage implements Comparable<ProductImage>{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = true)
    private int productImgNo;   //제품이미지일련번호

    @Column(length = 100, nullable = false)
    private String productImgName;  //제품 이미지명

    private String productImgPath;  //제품 이미지 경로

    @Column(length = 100, nullable = false)
    private String productImgUuid;  //범용식별자

    @ManyToOne(fetch = FetchType.LAZY)
    private Products products;  //제품번호(FK)

    @Override
    public int compareTo(ProductImage other) {
        return this.productImgNo - other.productImgNo;
    }
    public void changeProduct(Products products){
        this.products = products;
    }

}
