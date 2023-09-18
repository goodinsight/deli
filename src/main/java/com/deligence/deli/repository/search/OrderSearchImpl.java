package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.QOrder;
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

public class OrderSearchImpl extends QuerydslRepositorySupport implements OrderSearch {

    public OrderSearchImpl() {
        super(Order.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<Order> search(String[] types, String keyword, Pageable pageable) {

        QOrder order = QOrder.order;

        JPQLQuery<Order> query = new JPAQueryFactory(em)
                .selectFrom(order);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                switch(type){

                    case "c":
                        booleanBuilder.or(order.orderCode.contains(keyword));
                        break;
                    //추후 검색조건 설정에 따라 추가할 부분

                    //-----------------------------

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        //query.where(order.orderNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        //https://www.inflearn.com/questions/153250/spring-sort%EB%A5%BC-querydsl-%EB%B3%80%ED%99%98-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%AC%B8%EC%9D%98


        List<Order> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }
}
