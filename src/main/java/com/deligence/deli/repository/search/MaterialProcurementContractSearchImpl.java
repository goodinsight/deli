package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.QMaterialProcurementContract;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class MaterialProcurementContractSearchImpl extends QuerydslRepositorySupport
        implements MaterialProcurementContractSearch{

    public MaterialProcurementContractSearchImpl() {
        super(MaterialProcurementContract.class);
    }

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

                switch (type) { //no: No, mc:자재코드, mn:자재이름, sp:공급단가, sn:납품업체명, cs:계약상태
                    case "no":
                        booleanBuilder.or(materialProcurementContract
                                .materialProcurementContractNo.stringValue().contains(keyword));
                        break;


                }
            }
        }
        return null;
    }
}
