package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.QMaterialProcurementContract;
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

public class MaterialProcurementContractSearchImpl extends QuerydslRepositorySupport
        implements MaterialProcurementContractSearch{

    public MaterialProcurementContractSearchImpl() {
        super(MaterialProcurementContract.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<MaterialProcurementContract> search1(Pageable pageable) {

        QMaterialProcurementContract materialProcurementContract =
                QMaterialProcurementContract.materialProcurementContract;    //Q도메인 객체

        JPQLQuery<MaterialProcurementContract> query = from(materialProcurementContract);
        //select.. from materialProcurementContract

        query.where(materialProcurementContract
                .materialProcurementContractNo.stringValue().contains("1"));
        //where materialProcurementContractNo like..

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementContract> list = query.fetch();

        long count = query.fetchCount();

        return null;
    }

    @Override
    public Page<MaterialProcurementContract> searchAll(String[] types, String keyword, Pageable pageable) {

        QMaterialProcurementContract materialProcurementContract =
                QMaterialProcurementContract.materialProcurementContract;

        JPQLQuery<MaterialProcurementContract> query = from(materialProcurementContract);



        if ((types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   //(

            for (String type : types) {

                switch (type) { //a: No, b:자재코드, c:자재이름, d:공급단가, e:납품업체명, f:자재조달계약상태
                    case "a":
                        booleanBuilder.or(materialProcurementContract
                                .materialProcurementContractNo.stringValue().contains(keyword));    //조달계약일련번호
                        break;

                    case "b":
                        booleanBuilder.or(materialProcurementContract
                                .materialCode.contains(keyword));   //자재코드
                        break;

                    case "c":
                        booleanBuilder.or(materialProcurementContract
                                .materialName.contains(keyword));   //자재이름
                        break;

                    case "d":
                        booleanBuilder.or(materialProcurementContract
                                .materialSupplyPrice.stringValue().contains(keyword));  //공급단가
                        break;

                    case "e":
                        booleanBuilder.or(materialProcurementContract
                                .supplierName.contains(keyword));   //자재협력회사명
                        break;

                    case "f":
                        booleanBuilder.or(materialProcurementContract
                                .materialProcurementContractState.contains(keyword));   //자재조달계약상태
                        break;
                }
            }//end for
            query.where(booleanBuilder);
        }//end if

        //materialProcurementContractNo > 0
        query.where(materialProcurementContract.materialProcurementContractNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementContract> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public int getCodeCount(String code) {

        QMaterialProcurementContract materialProcurementContract =
                QMaterialProcurementContract.materialProcurementContract;

        JPQLQuery<MaterialProcurementContract> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementContract)
                .where(materialProcurementContract.materialProcurementContractCode.contains(code));

        return (int) query.fetchCount();

    }
}
