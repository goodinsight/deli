package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.QMaterials;
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


}
