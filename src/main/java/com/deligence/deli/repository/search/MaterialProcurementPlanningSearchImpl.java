package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.QMaterialProcurementPlanning;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
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

//        query.where(materialProcurementPlanning.material_code.contains("1"));
//        //where material_code like...

        query.where(materialProcurementPlanning.material_procurement_state.contains("ing"));
        //where material_procurement_state like...

        //paging -> 페이징 처리 불가. 테스트 시 추가하면 실패로 뜸 ㅠㅠ
//        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return null;
    }
}
