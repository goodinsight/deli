package com.deligence.deli.repository.search;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.domain.QCooperatorClient;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class CooperatorClientSearchImpl extends QuerydslRepositorySupport implements CooperatorClientSearch {

    public CooperatorClientSearchImpl(){
        super(CooperatorClient.class);
    }

    @Override
    public Page<CooperatorClient> searchAll(String[] types, String keyword, Pageable pageable) { //검색 + 페이징

        QCooperatorClient cooperatorClient = QCooperatorClient.cooperatorClient;
        JPQLQuery<CooperatorClient> query = from(cooperatorClient);

        if ( (types != null && types.length > 0) && keyword != null )  {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for (String type: types){
                switch (type) {
                    case "n":
                        booleanBuilder.or(cooperatorClient.clientName.contains(keyword)); //회사명
                        break;
                    case "s":
                        booleanBuilder.or(cooperatorClient.clientStatus.contains(keyword)); //계약상태
                        break;
                }
            }//end for
            query.where(booleanBuilder);
        }//end if

        //clientNo > 0
        query.where(cooperatorClient.clientNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<CooperatorClient> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }
}
