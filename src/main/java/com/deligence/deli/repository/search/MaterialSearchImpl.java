package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialImageDTO;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.MaterialListAllDTO;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
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

public class MaterialSearchImpl extends QuerydslRepositorySupport implements MaterialSearch {

    public MaterialSearchImpl(){
        super(Materials.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<Materials> search1(Pageable pageable) {

        QMaterials materials = QMaterials.materials; //Q도메인 객체

        JPQLQuery<Materials> query = from(materials); // select..from materials

        query.where(materials.materialNo.stringValue().contains("1")); //where materialExplaination like.....

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Materials> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<Materials> searchAll(String[] types, String keyword, Pageable pageable) { //검색

        QMaterials materials = QMaterials.materials;
        JPQLQuery<Materials> query = new JPAQueryFactory(em)
                .selectFrom(materials);

        if ((types != null && types.length > 0) && keyword != null) { //검색조건 + 키워드가 있으면

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for (String type : types){

                switch (type){
                    case "t": //자재코드
                        booleanBuilder.or(materials.materialCode.contains(keyword));
                        break;
                    case "c": //자재명
                        booleanBuilder.or(materials.materialName.contains(keyword));
                        break;
                    case "w": //자재분류(카테고리)
                        booleanBuilder.or(materials.materialType.contains(keyword));
                        break;
                }
            } //end for
            query.where(booleanBuilder);
        }//end if

        //materialNo > 0
        query.where(materials.materialNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Materials> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }

    @Override
    public int getCodeCount(String code) { //자재코드생성

        QMaterials materials = QMaterials.materials;

        JPQLQuery<Materials> query = new JPAQueryFactory(em)
                .selectFrom(materials)
                .where(materials.materialCode.contains(code));

        return (int) query.fetchCount();

    }

    @Override

    public Page<MaterialsDTO> searchWithAll(String[] types, String keyword, Pageable pageable) {

//    public Page<MaterialListAllDTO> searchWithAll(String[] types, String keyword, Pageable pageable) {


        QMaterials materials = QMaterials.materials;

        JPQLQuery<Materials> materialsJPQLQuery = from(materials);

        if( (types != null && types.length > 0) && keyword != null) {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for(String type: types) {

                switch (type) {

                    case "t": //자재코드
                        booleanBuilder.or(materials.materialCode.contains(keyword));
                        break;
                    case "c": //자재명
                        booleanBuilder.or(materials.materialName.contains(keyword));
                        break;
                    case "w": //자재분류(카테고리)
                        booleanBuilder.or(materials.materialType.contains(keyword));
                        break;
                }

            } // end for
            materialsJPQLQuery.where(booleanBuilder);
        }

        materialsJPQLQuery.groupBy(materials);

        List<Materials> materialsList = materialsJPQLQuery.fetch();

        List<MaterialsDTO> dtoList = (List<MaterialsDTO>) materialsList.stream().map(material -> {

            MaterialsDTO dto = MaterialsDTO.builder()
                    .materialNo(material.getMaterialNo())
                    .materialCode(material.getMaterialCode())
                    .materialExplaination(material.getMaterialExplaination())
                    .materialName(material.getMaterialName())
                    .materialType(material.getMaterialType())
                    .regDate(material.getRegDate())
                    .build();

            List<MaterialImageDTO> imageDTOS = material.getImageSet().stream().sorted()
                    .map(materialImage -> MaterialImageDTO.builder()
                            .materialNo(materialImage.getMaterialImgNo())
                            .materialImgName(materialImage.getMaterialImgName())
                            .materialUuid(materialImage.getMaterialUuid())
                            .build()
                    ).collect(Collectors.toList());

            //dto.setMaterialImage(imageDTOS); //처리된 BoardImageDTO들을 추가

            return dto;
        }).collect(Collectors.toList());

        long totalCount = materialsJPQLQuery.fetchCount();

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

