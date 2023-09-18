package com.deligence.deli.domain;

//제품 Entity

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
@ToString
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productNo;  //제품일련번호

    private String productCode; //제품코드

    private String productName; //제품이름

    private String productType; //제품분류

    private String productContent;  //제품내용

    @OneToMany(mappedBy = "products", //ProductImage의 products변수
            cascade = {CascadeType.ALL},
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<ProductImage> imageSet = new HashSet<>();
}
