package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.QMaterials;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class MaterialSearchImpl extends QuerydslRepositorySupport implements MaterialSearch {

    public MaterialSearchImpl(){
        super(Materials.class);
    }

    @Override
    public Page<Materials> search1(Pageable pageable) {

        QMaterials materials = QMaterials.materials; //Q도메인 객체

        JPQLQuery<Materials> query = from(materials); // select..from materials

        query.where(materials.materialExplaination.contains("1")); //where materialExplaination like.....

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Materials> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<Materials> searchAll(String[] types, String keyword, Pageable pageable) { //검색

        QMaterials materials = QMaterials.materials;
        JPQLQuery<Materials> query = from(materials);

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
        query.where(materials.materialNo.gt(0L));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Materials> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }


}
