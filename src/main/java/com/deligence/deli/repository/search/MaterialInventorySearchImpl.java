package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialInventoryDetailDTO;
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

public class MaterialInventorySearchImpl extends QuerydslRepositorySupport implements MaterialInventorySearch {

    public MaterialInventorySearchImpl() {
        super(MaterialInventory.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<MaterialInventory> searchAll(String[] types, String keyword, Pageable pageable) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;

        JPQLQuery<MaterialInventory> query = new JPAQueryFactory(em).selectFrom(materialInventory);

        if ((types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   //(

            for (String type : types) {

                switch (type) {
                    //t자재이름,c발주코드,w담당자,s발주상태

                    case "t":
                        // 자재 이름 검색
                        booleanBuilder.or(materialInventory.materialName.contains(keyword));
                        break;
                    case "c":
                        // 발주 코드 검색
                        booleanBuilder.or(materialInventory.orderCode.contains(keyword));
                        break;
                    case "w":
                        // 담당자 검색
                        booleanBuilder.or(materialInventory.employeeName.contains(keyword));
                        break;
                    case "s":   //발주상태 검색
                        booleanBuilder.or(materialInventory.orderState.contains(keyword));

                }

            }//end for
//            query.where(booleanBuilder);
        }

//        query.where(materialInventory.materialInventoryNo.gt(0));

        query.orderBy(materialInventory.materialInventoryNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialInventory> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }

    @Override
    public MaterialInventoryDetailDTO read(int materialInventoryNo) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;
        QOrder order = QOrder.order;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materialInventory, order)
                .from(materialInventory)
                .join(materialInventory.order, order).on(materialInventory.order.eq(order))
                .where(materialInventory.materialInventoryNo.eq(materialInventoryNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialInventory resultMaterialInventory = (MaterialInventory) target.get(materialInventory);
        Order resultOrder = (Order) target.get(order);

        MaterialInventoryDetailDTO dto = MaterialInventoryDetailDTO.builder()
                .orderNo(resultOrder.getOrderNo())
                .orderCode(resultOrder.getOrderCode())
                .materialName(resultOrder.getMaterialName())
                .materialIncomingQuantity(resultMaterialInventory.getMaterialIncomingQuantity())
                .orderDate(resultOrder.getOrderDate())
                .orderDeliveryDate(resultOrder.getOrderDeliveryDate())
                .employeeName(resultOrder.getEmployeeName())
                .orderState(resultOrder.getOrderState())
                .build();

        return dto;
    }
}
