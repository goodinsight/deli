package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.OrderDetailDTO;
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
                    case "m":
                        booleanBuilder.or(order.materialName.contains(keyword));
                        break;
                    case "w":
                        booleanBuilder.or(order.employeeName.contains(keyword));
                    //추후 검색조건 설정에 따라 추가할 부분

                    //-----------------------------

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        //query.where(order.orderNo.gt(0));

        query.orderBy(order.orderNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        //https://www.inflearn.com/questions/153250/spring-sort%EB%A5%BC-querydsl-%EB%B3%80%ED%99%98-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%AC%B8%EC%9D%98


        List<Order> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<Order> searchByState(String[] keywords, Pageable pageable) {

        QOrder order = QOrder.order;

        JPQLQuery<Order> query = new JPAQueryFactory(em)
                .selectFrom(order);

        if( keywords != null && keywords.length > 0) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String keyword : keywords) {

                booleanBuilder.or(order.orderState.contains(keyword));

            }//end for

            query.where(booleanBuilder);

        }//end if

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        List<Order> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }

    @Override
    public int getCodeCount(String code) {

        QOrder order = QOrder.order;

        JPQLQuery<Order> query = new JPAQueryFactory(em)
                .selectFrom(order)
                .where(order.orderCode.contains(code));

        return (int) query.fetchCount();

    }

    public OrderDetailDTO read(int orderNo){

        QOrder order = QOrder.order;
        QMaterialProcurementContract mpc = QMaterialProcurementContract.materialProcurementContract;
        QMaterialProcurementPlanning mpp = QMaterialProcurementPlanning.materialProcurementPlanning;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(order, mpc, mpp)
                .from(order)
                .join(order.materialProcurementContract, mpc).on(order.materialProcurementContract.eq(mpc))
                .join(order.materialProcurementPlanning, mpp).on(order.materialProcurementPlanning.eq(mpp))
                .where(order.orderNo.eq(orderNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        Order resultOrder = (Order) target.get(order);
        MaterialProcurementPlanning resultMpp = (MaterialProcurementPlanning) target.get(mpp);
        MaterialProcurementContract resultMpc = (MaterialProcurementContract) target.get(mpc);

        OrderDetailDTO dto = OrderDetailDTO.builder()
                .orderNo(resultOrder.getOrderNo())
                .orderCode(resultOrder.getOrderCode())
                .orderQuantity(resultOrder.getOrderQuantity())
                .orderDeliveryDate(resultOrder.getOrderDeliveryDate())
                .orderDate(resultOrder.getOrderDate())
                .orderState(resultOrder.getOrderState())
                .orderEtc(resultOrder.getOrderEtc())
                .materialProcurementPlanNo(resultMpp.getMaterialProcurementPlanNo())
                .materialCode(resultMpp.getMaterialCode())
                .materialName(resultMpp.getMaterialName())
                .materialRequirementsCount(resultMpp.getMaterialRequirementsCount())
                .procurementDeliveryDate(resultMpp.getProcurementDeliveryDate())
                .materialProcurementContractNo(resultMpc.getMaterialProcurementContractNo())
                .materialProcurementContractCode(resultMpc.getMaterialProcurementContractCode())
                .materialProcurementContractDate(resultMpc.getMaterialProcurementContractDate())
                .materialSupplyPrice(resultMpc.getMaterialSupplyPrice())
                .supplierName(resultMpc.getSupplierName())
                .employeeNo(resultOrder.getEmployee().getEmployeeNo())
                .employeeName(resultOrder.getEmployeeName())
                .build();

        return dto;

    }

}
