package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.QMaterialProcurementPlanning;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.Querydsl;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class MaterialProcurementPlanningSearchImpl extends QuerydslRepositorySupport
        implements MaterialProcurementPlanningSearch {

    public MaterialProcurementPlanningSearchImpl() {
        super(MaterialProcurementPlanning.class);
    }

    @Override
    public Page<MaterialProcurementPlanning> search1(Pageable pageable) {

        QMaterialProcurementPlanning materialProcurementPlanning =
                QMaterialProcurementPlanning.materialProcurementPlanning;    //Q도메인 객체

        JPQLQuery<MaterialProcurementPlanning> query = from(materialProcurementPlanning);
        // select.. from materialProcurementPlanning

//        query.where(materialProcurementPlanning.materialCode.contains("1"));
//        //where material_code like...

        query.where(materialProcurementPlanning.materialProcurementState.contains("ing"));
        //where material_procurement_state like...

        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return null;
    }

    @Override
    public Page<MaterialProcurementPlanning> searchAll(String[] types, String keyword, Pageable pageable) {

        QMaterialProcurementPlanning materialProcurementPlanning =
                QMaterialProcurementPlanning.materialProcurementPlanning;

        JPQLQuery<MaterialProcurementPlanning> query = from(materialProcurementPlanning);

        if ((types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   //(

            for (String type : types) {

                switch (type) {
                    case "m":
                        booleanBuilder.or(materialProcurementPlanning
                                .materialCode.contains(keyword));  //자재코드
                        break;

                    case "n":
                        booleanBuilder.or(materialProcurementPlanning
                                .materialName.contains(keyword));  //자재이름

                    case "d":
                        booleanBuilder.or(materialProcurementPlanning
                                .procurementDeliveryDate.stringValue().contains(keyword));    //납기일 검색
                        break;

                    case "c":
                        booleanBuilder.or(materialProcurementPlanning
                                .materialRequirementsCount.stringValue().contains(keyword));  //자재소요량 검색
                        break;

                    case "s":
                        booleanBuilder.or(materialProcurementPlanning
                                .materialProcurementState.contains(keyword)); //자재조달상태 검색
                        break;
                }
            }//end for
            query.where(booleanBuilder);
        }//end if

        //material_procurement_plan_no > 0
        query.where(materialProcurementPlanning.materialProcurementPlanNo.gt(0));

        //paging -> 오류 (정렬삭제 후 페이징 처리 가능)
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }
}
