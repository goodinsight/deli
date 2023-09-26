package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Products;
import com.deligence.deli.domain.QProducts;
import com.deligence.deli.dto.ProductsDTO;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.stream.Collectors;

public class ProductSearchImpl extends QuerydslRepositorySupport implements ProductSearch {

    public ProductSearchImpl(){
        super(Products.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<Products> search1(Pageable pageable) {

        QProducts products = QProducts.products; //Q도메인 객체

        JPQLQuery<Products> query = from(products); // select..from products

        query.where(products.productNo.stringValue().contains("1")); //where productContent like.....

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Products> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<Products> searchAll(String[] types, String keyword, Pageable pageable) { //검색

        QProducts products = QProducts.products;
        JPQLQuery<Products> query = new JPAQueryFactory(em)
                .selectFrom(products);

        if ((types != null && types.length > 0) && keyword != null) { //검색조건 + 키워드가 있으면

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for (String type : types){

                switch (type){
                    case "t": //자재코드
                        booleanBuilder.or(products.productCode.contains(keyword));
                        break;
                    case "c": //자재명
                        booleanBuilder.or(products.productName.contains(keyword));
                        break;
                    case "w": //자재분류(카테고리)
                        booleanBuilder.or(products.productType.contains(keyword));
                        break;
                }
            } //end for
            query.where(booleanBuilder);
        }//end if

        //productNo > 0
        query.where(products.productNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Products> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }

    @Override
    public int getCodeCount(String code) { //자재코드생성

        QProducts products = QProducts.products;

        JPQLQuery<Products> query = new JPAQueryFactory(em)
                .selectFrom(products)
                .where(products.productCode.contains(code));

        return (int) query.fetchCount();

    }

    @Override

    public Page<ProductsDTO> searchWithAll(String[] types, String keyword, Pageable pageable) {

//    public Page<ProductListAllDTO> searchWithAll(String[] types, String keyword, Pageable pageable) {


        QProducts products = QProducts.products;

        JPQLQuery<Products> productsJPQLQuery = from(products);

        if( (types != null && types.length > 0) && keyword != null) {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for(String type: types) {

                switch (type) {

                    case "t": //자재코드
                        booleanBuilder.or(products.productCode.contains(keyword));
                        break;
                    case "c": //자재명
                        booleanBuilder.or(products.productName.contains(keyword));
                        break;
                    case "w": //자재분류(카테고리)
                        booleanBuilder.or(products.productType.contains(keyword));
                        break;
                }

            } // end for
            productsJPQLQuery.where(booleanBuilder);
        }

        productsJPQLQuery.groupBy(products);

        List<Products> productsList = productsJPQLQuery.fetch();

        List<ProductsDTO> dtoList = (List<ProductsDTO>) productsList.stream().map(product -> {

            ProductsDTO dto = ProductsDTO.builder()
                    .productNo(product.getProductNo())
                    .productCode(product.getProductCode())
                    .productContent(product.getProductContent())
                    .productName(product.getProductName())
                    .productType(product.getProductType())
                    //.regDate(product.getRegDate())
                    .build();

//            List<ProductImageDTO> imageDTOS = product.getImageSet().stream().sorted()
//                    .map(productImage -> ProductImageDTO.builder()
//                            .productNo(productImage.getProductImgNo())
//                            .productImgName(productImage.getProductImgName())
//                            .productImgUuid(productImage.getProductImgUuid())
//                            .build()
//                    ).collect(Collectors.toList());

            //dto.setProductImage(imageDTOS); //처리된 BoardImageDTO들을 추가

            return dto;
        }).collect(Collectors.toList());

        long totalCount = productsJPQLQuery.fetchCount();

//        getQuerydsl().applyPagination(pageable, productsJPQLQuery); // pageing
//
//
//        JPQLQuery<Tuple> tupleJPQLQuery = productsJPQLQuery.select(products, products.countDistinct());
//
//        List<Tuple> tupleList = tupleJPQLQuery.fetch();
//
//        List<ProductListAllDTO> dtoList = tupleList.stream().map(tuple -> {
//
//            Products products1 = (Products) tuple.get(products);
//            long productCount = tuple.get(1, Long.class);
//
//            ProductListAllDTO dto = ProductListAllDTO.builder()
//                    .productNo(products1.getProductNo())
//                    .productCode(products1.getProductCode())
//                    .productName(products1.getProductName())
//                    .productType(products1.getProductType())
//                    .productContent(products1.getProductContent())
//                    .productCount(productCount)
//                    .build();
//
//            //productImage를 productImageDTO 처리할 부분
//            List<ProductImageDTO> imageDTOS = products1.getImageSet().stream().sorted()
//                .map(productImage -> ProductImageDTO.builder()
//                        .productNo(productImage.getProductImgNo())
//                        .productImgName(productImage.getProductImgName())
//                        .productImgUuid(productImage.getProductImgUuid())
//                        .productNo(productImage.getProducts().getProductNo())
//                        .build()
//                ).collect(Collectors.toList());
//
//            dto.setProductImages(imageDTOS); //처리된 ProductImageDTO들을 추가
//
//            return dto;
//        }).collect(Collectors.toList());
//
//        long totalCount = productsJPQLQuery.fetchCount();

        return new PageImpl<>(dtoList, pageable, totalCount);
    }


}
//        List<Products> productsList = productsJPQLQuery.fetch();
//
//        productsList.forEach(products1 -> {
//            System.out.println(products1.getProductNo());
//            System.out.println(products1.getImageSet());
//            System.out.println("--------------------");
//        });

//        List<ProductImageDTO> imageDTOS = products1.getImageSet().stream().sorted()
//                .map(productImage -> ProductImageDTO.builder()
//                        .productNo(productImage.getProductImgNo())
//                        .productImgName(productImage.getProductImgName())
//                        .productImgUuid(productImage.getProductImgUuid())
//                        .build()
//                ).collect(Collectors.toList());
//
//
//
//
//        return new PageImpl<>(imageDTOS);

        //productImageDTO.setProductImages(imageDTOS);

