package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Products;
import com.deligence.deli.domain.QMaterials;
import com.deligence.deli.domain.QProducts;
import com.deligence.deli.dto.MaterialImageDTO;
import com.deligence.deli.dto.MaterialsDTO;
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
        super(Materials.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<Products> search1(Pageable pageable) {

        QProducts products = QProducts.products; //Q도메인 객체

        JPQLQuery<Products> query = from(products); // select..from materials

        query.where(products.productNo.stringValue().contains("1")); //where materialExplaination like.....

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

        //materialNo > 0
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

//    public Page<MaterialListAllDTO> searchWithAll(String[] types, String keyword, Pageable pageable) {


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

//            List<MaterialImageDTO> imageDTOS = material.getImageSet().stream().sorted()
//                    .map(materialImage -> MaterialImageDTO.builder()
//                            .materialNo(materialImage.getMaterialImgNo())
//                            .materialImgName(materialImage.getMaterialImgName())
//                            .materialUuid(materialImage.getMaterialUuid())
//                            .build()
//                    ).collect(Collectors.toList());

            //dto.setMaterialImage(imageDTOS); //처리된 BoardImageDTO들을 추가

            return dto;
        }).collect(Collectors.toList());

        long totalCount = productsJPQLQuery.fetchCount();

//        getQuerydsl().applyPagination(pageable, materialsJPQLQuery); // pageing
//
//
//        JPQLQuery<Tuple> tupleJPQLQuery = materialsJPQLQuery.select(materials, materials.countDistinct());
//
//        List<Tuple> tupleList = tupleJPQLQuery.fetch();
//
//        List<MaterialListAllDTO> dtoList = tupleList.stream().map(tuple -> {
//
//            Materials materials1 = (Materials) tuple.get(materials);
//            long materialCount = tuple.get(1, Long.class);
//
//            MaterialListAllDTO dto = MaterialListAllDTO.builder()
//                    .materialNo(materials1.getMaterialNo())
//                    .materialCode(materials1.getMaterialCode())
//                    .materialName(materials1.getMaterialName())
//                    .materialType(materials1.getMaterialType())
//                    .materialExplaination(materials1.getMaterialExplaination())
//                    .materialSupplyPrice(materials1.getMaterialSupplyPrice())
//                    .materialCount(materialCount)
//                    .build();
//
//            //materialImage를 materialImageDTO 처리할 부분
//            List<MaterialImageDTO> imageDTOS = materials1.getImageSet().stream().sorted()
//                .map(materialImage -> MaterialImageDTO.builder()
//                        .materialNo(materialImage.getMaterialImgNo())
//                        .materialImgName(materialImage.getMaterialImgName())
//                        .materialUuid(materialImage.getMaterialUuid())
//                        .materialNo(materialImage.getMaterials().getMaterialNo())
//                        .build()
//                ).collect(Collectors.toList());
//
//            dto.setMaterialImages(imageDTOS); //처리된 MaterialImageDTO들을 추가
//
//            return dto;
//        }).collect(Collectors.toList());
//
//        long totalCount = materialsJPQLQuery.fetchCount();

        return new PageImpl<>(dtoList, pageable, totalCount);
    }


}
//        List<Materials> materialsList = materialsJPQLQuery.fetch();
//
//        materialsList.forEach(materials1 -> {
//            System.out.println(materials1.getMaterialNo());
//            System.out.println(materials1.getImageSet());
//            System.out.println("--------------------");
//        });

//        List<MaterialImageDTO> imageDTOS = materials1.getImageSet().stream().sorted()
//                .map(materialImage -> MaterialImageDTO.builder()
//                        .materialNo(materialImage.getMaterialImgNo())
//                        .materialImgName(materialImage.getMaterialImgName())
//                        .materialUuid(materialImage.getMaterialUuid())
//                        .build()
//                ).collect(Collectors.toList());
//
//
//
//
//        return new PageImpl<>(imageDTOS);

        //materialImageDTO.setMaterialImages(imageDTOS);

