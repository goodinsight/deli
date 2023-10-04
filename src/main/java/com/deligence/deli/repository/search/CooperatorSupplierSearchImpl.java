package com.deligence.deli.repository.search;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.QCooperatorSupplier;
import com.deligence.deli.dto.CooperatorSupplierDTO;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class CooperatorSupplierSearchImpl extends QuerydslRepositorySupport implements CooperatorSupplierSearch {

    public CooperatorSupplierSearchImpl() {
        super(CooperatorSupplier.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<CooperatorSupplier> search(String[] types, String keyword, Pageable pageable) {

        QCooperatorSupplier cooperatorSupplier = QCooperatorSupplier.cooperatorSupplier;

        JPQLQuery<CooperatorSupplier> query = new JPAQueryFactory(em)
                .selectFrom(cooperatorSupplier);

        if ((types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 없다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   //(

            for (String type : types) {

                switch (type) {
                    //a:회사명 b:대표명 c:주소명 +계약상태별도
                    case "a":
                        booleanBuilder.or(cooperatorSupplier.supplierName.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(cooperatorSupplier.supplierCeo.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(cooperatorSupplier.supplierAddress.contains(keyword));
                        break;
                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        query.orderBy(cooperatorSupplier.supplierNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<CooperatorSupplier> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<CooperatorSupplier> searchWithState(String[] types, String keyword, String state, Pageable pageable) {

        QCooperatorSupplier cooperatorSupplier = QCooperatorSupplier.cooperatorSupplier;

        JPQLQuery<CooperatorSupplier> query = new JPAQueryFactory(em)
                .selectFrom(cooperatorSupplier);

        if ((types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 없다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   //(

            for (String type : types) {

                switch (type) {
                    //a:회사명 b:대표명 c:주소명 +계약상태별도
                    case "a":
                        booleanBuilder.or(cooperatorSupplier.supplierName.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(cooperatorSupplier.supplierCeo.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(cooperatorSupplier.supplierAddress.contains(keyword));
                        break;
                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        if (state != null) {
            query.where(cooperatorSupplier.supplierStatus.contains(state)); //협력회사 계약상태 검색
        }

        query.orderBy(cooperatorSupplier.supplierNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<CooperatorSupplier> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

//    @Override
//    public CooperatorSupplierDTO read(int supplierNo) {
//
//        QCooperatorSupplier cooperatorSupplier = QCooperatorSupplier.cooperatorSupplier;
//
//        JPAQuery<CooperatorSupplier> query = new JPAQueryFactory(em)
//                .select(cooperatorSupplier)
//                .from(cooperatorSupplier)
//                .where(cooperatorSupplier.supplierNo.eq(supplierNo));
//
//        List<CooperatorSupplier> targetDtoList = query.fetch();
//
//        Tuple target = (Tuple) targetDtoList.get(0);
//
//        CooperatorSupplier resultCooperatorSupplier = (CooperatorSupplier) target.get(cooperatorSupplier);
//
//        CooperatorSupplierDTO dto = CooperatorSupplierDTO.builder()
//                .supplierNo(resultCooperatorSupplier.getSupplierNo())
//                .corporateRegistrationNo(resultCooperatorSupplier.getCorporateRegistrationNo())
//                .supplierCeo(resultCooperatorSupplier.getSupplierCeo())
//                .supplierEmail(resultCooperatorSupplier.getSupplierEmail())
//                .supplierName(resultCooperatorSupplier.getSupplierName())
//                .supplierPhone(resultCooperatorSupplier.getSupplierPhone())
//                .supplierAddress(resultCooperatorSupplier.getSupplierAddress())
//                .supplierStatus(resultCooperatorSupplier.getSupplierStatus())
//                .supplierEtc(resultCooperatorSupplier.getSupplierEtc())
//                .documentFileNo(resultCooperatorSupplier.getDocumentFile().getDocumentFileNo())
//                .build();
//
//
//        return dto;
//    }
}
