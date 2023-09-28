package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.OrderDetailDTO;
import com.deligence.deli.dto.ProductionPlanningDetailDTO;
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

public class ProductionPlanningSearchImpl extends QuerydslRepositorySupport implements ProductionPlanningSearch {

    public ProductionPlanningSearchImpl() {
        super(ProductionPlanning.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<ProductionPlanning> search(String[] types, String keyword, Pageable pageable) {

        QProductionPlanning productionPlanning = QProductionPlanning.productionPlanning;

        JPQLQuery<ProductionPlanning> query = new JPAQueryFactory(em)
                .selectFrom(productionPlanning);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                switch(type){
                //a:생산계획코드 b:제품코드 c:클라이언트 회사명 d:납기일 e:계약상태
                    case "a":
                        booleanBuilder.or(productionPlanning.productionPlanCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(productionPlanning.productCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(productionPlanning.clientName.contains(keyword));
                        break;
                    case "d":   //생산납기일
                        booleanBuilder.or(productionPlanning.productionDeliveryDate.stringValue().contains(keyword));
                        break;
                    case "e":
                        booleanBuilder.or(productionPlanning.clientStatus.contains(keyword));   //계약상태



                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        //query.where(order.orderNo.gt(0));

        query.orderBy(productionPlanning.productionPlanNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        //https://www.inflearn.com/questions/153250/spring-sort%EB%A5%BC-querydsl-%EB%B3%80%ED%99%98-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%AC%B8%EC%9D%98


        List<ProductionPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }


    @Override
    public int getCodeCount(String code) {

        QProductionPlanning productionPlanning = QProductionPlanning.productionPlanning;

        JPQLQuery<ProductionPlanning> query = new JPAQueryFactory(em)
                .selectFrom(productionPlanning)
                .where(productionPlanning.productionPlanCode.contains(code));

        return (int) query.fetchCount();
    }

    @Override
    public ProductionPlanningDetailDTO read(int productionPlanNo) {

        QProductionPlanning productionPlanning = QProductionPlanning.productionPlanning;
        //제품계약->제품코드,제품수량,구매협력회사명,계약상태,사원이름(담당자),납기일
        QProductContract pc = QProductContract.productContract;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(productionPlanning, pc)
                .from(productionPlanning)
                .join(productionPlanning.productContract, pc).on(productionPlanning.productContract.eq(pc))
                .where(productionPlanning.productionPlanNo.eq(productionPlanNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        ProductionPlanning resultProductionPlanning = (ProductionPlanning) target.get(productionPlanning);
        ProductContract resultPc = (ProductContract) target.get(pc);

        ProductionPlanningDetailDTO dto = ProductionPlanningDetailDTO.builder()
                .productionPlanNo(resultProductionPlanning.getProductionPlanNo())
                .productionPlanCode(resultProductionPlanning.getProductionPlanCode())
                .productionQuantity(resultProductionPlanning.getProductionQuantity())
                .productionRequirementsDate(resultProductionPlanning.getProductionRequirementsDate())
                .productionRequirementsProcess(resultProductionPlanning.getProductionRequirementsProcess())
                .productionDeliveryDate(resultProductionPlanning.getProductionDeliveryDate())
                .detailExplaination(resultProductionPlanning.getDetailExplaination())
                .productContractNo(resultPc.getProductContractNo())
                .employeeNo(resultPc.getEmployee().getEmployeeNo())
                .employeeName(resultPc.getEmployee().getEmployeeName())
                .productNo(resultPc.getProducts().getProductNo())
                .productCode(resultPc.getProducts().getProductCode())
                .productName(resultPc.getProducts().getProductName())
                .productType(resultPc.getProducts().getProductType())
                .productDeliveryDate(resultPc.getProductDeliveryDate())
                .clientName(resultPc.getCooperatorClient().getClientName())
                .clientStatus(resultPc.getCooperatorClient().getClientStatus())
                .regDate(resultProductionPlanning.getRegDate())
                .modDate(resultProductionPlanning.getModDate())
                .build();

        return dto;
    }
}
