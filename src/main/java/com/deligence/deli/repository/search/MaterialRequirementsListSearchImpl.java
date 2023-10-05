package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialRequirementsListDTO;
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

public class MaterialRequirementsListSearchImpl extends QuerydslRepositorySupport implements MaterialRequirementsListSearch {

    public MaterialRequirementsListSearchImpl() {
        super(MaterialRequirementsList.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<MaterialRequirementsList> search(String[] types, String keyword, Pageable pageable) {

        QMaterialRequirementsList materialRequirementsList = QMaterialRequirementsList.materialRequirementsList;

        JPQLQuery<MaterialRequirementsList> query = new JPAQueryFactory(em)
                .selectFrom(materialRequirementsList);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                switch(type){
                    //a:제품코드 b:제품이름 c:제품타입 d:자재코드 e:자재이름 f:자재타입
                    case "a":
                        booleanBuilder.or(materialRequirementsList.productCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(materialRequirementsList.productName.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(materialRequirementsList.productType.contains(keyword));
                        break;
                    case "d":
                        booleanBuilder.or(materialRequirementsList.materialCode.contains(keyword));
                        break;
                    case "e":
                        booleanBuilder.or(materialRequirementsList.materialName.contains(keyword));
                        break;
                    case "f":
                        booleanBuilder.or(materialRequirementsList.materialType.contains(keyword));
                        break;
                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        query.orderBy(materialRequirementsList.materialRequirementsListNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        //https://www.inflearn.com/questions/153250/spring-sort%EB%A5%BC-querydsl-%EB%B3%80%ED%99%98-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%AC%B8%EC%9D%98

        List<MaterialRequirementsList> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }

    @Override
    public MaterialRequirementsListDTO read(int materialRequirementsListNo) {

        //제품, 자재 조인
        QMaterialRequirementsList mrl = QMaterialRequirementsList.materialRequirementsList;
        QProducts pd = QProducts.products;
        QMaterials mr = QMaterials.materials;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(mrl, pd, mr)
                .from(mrl)
                .join(mrl.products, pd).on(mrl.products.eq(pd))
                .join(mrl.materials, mr).on(mrl.materials.eq(mr))
                .where(mrl.materialRequirementsListNo.eq(materialRequirementsListNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialRequirementsList resultMrl = (MaterialRequirementsList) target.get(mrl);
        Products resultPd = (Products) target.get(pd);
        Materials resultMr = (Materials) target.get(mr);

        MaterialRequirementsListDTO dto = MaterialRequirementsListDTO.builder()
                .materialRequirementsListNo(resultMrl.getMaterialRequirementsListNo())
                .productNo(resultPd.getProductNo())
                .materialNo(resultMr.getMaterialNo())
                .quantity(resultMrl.getQuantity())
                .productCode(resultPd.getProductCode())
                .productName(resultPd.getProductName())
                .productType(resultPd.getProductType())
                .materialCode(resultMr.getMaterialCode())
                .materialName(resultMr.getMaterialName())
                .materialType(resultMr.getMaterialType())
                .build();

        return dto;
    }
}
