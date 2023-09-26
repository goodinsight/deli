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

    //자재 재고 목록 search
    @Override
    public Page<MaterialInventory> searchInventory(String[] types, String keyword, Pageable pageable) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;

        JPQLQuery<MaterialInventory> query = new JPAQueryFactory(em).selectFrom(materialInventory);

        if ( (types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   // (

            for (String type : types) {

                switch (type) {
                    // a:자재분류 b:자재코드 c:자재이름

                    case "a":
                        booleanBuilder.or(materialInventory.materialType.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(materialInventory.materialCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(materialInventory.materialName.contains(keyword));
                        break;

                }

            }//end for

            query.where(booleanBuilder);
        }

        query.orderBy(materialInventory.materialInventoryNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialInventory> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    //재고 > 입고관리 목록 search (+상태검색)
    @Override
    public Page<MaterialInventory> searchInOut(String[] types, String keyword, String state, Pageable pageable) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;

        JPQLQuery<MaterialInventory> query = new JPAQueryFactory(em).selectFrom(materialInventory);

        if ( (types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   // (

            for (String type : types) {

                switch (type) {
                    // a:발주코드 b:자재이름 c:담당자 d:(발주)상태

                    case "a":
                        booleanBuilder.or(materialInventory.orderCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(materialInventory.materialName.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(materialInventory.employeeName.contains(keyword));
                        break;
//                    case "d":
//                        booleanBuilder.or(materialInventory.orderState.contains(keyword));

                }

            }//end for

            query.where(booleanBuilder);

            query.where(materialInventory.orderState.contains(state));  //발주 상태 검색

        }//end if

        query.orderBy(materialInventory.order.orderNo.desc());  //재고 > 입고관리 목록의 NO는 발주 일련번호

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialInventory> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    //자재 재고 상세/목록
    //  -> 자재 (자재분류, 자재코드, 자재이름, 공급단가, 자재설명) / 자재이미지 / 재고수량 /
    //  -> 자재에 대한 입출고기록 (no, 입출고구분자(IN/OUT), (입출고)수량, (입출고)날짜, (기록)담당자)
    @Override
    public MaterialInventoryDetailDTO readInventory(int materialInventoryNo) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;
        QMaterials materials = QMaterials.materials;
        QMaterialImage mi = QMaterialImage.materialImage;
        QMaterialInOutHistory mioh = QMaterialInOutHistory.materialInOutHistory;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materialInventory, materials, mi, mioh)
                .from(materialInventory)
                .join(materialInventory.materials, materials).on(materialInventory.materials.eq(materials))
                .join(materialInventory.materialImage, mi).on(materialInventory.materialImage.eq(mi))
                .join(materialInventory.materialInOutHistory, mioh).on(materialInventory.materialInOutHistory.eq(mioh))
                .where(materialInventory.materialInventoryNo.eq(materialInventoryNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialInventory resultMaterialInventory = (MaterialInventory) target.get(materialInventory);
        Materials resultMaterials = (Materials) target.get(materials);
        MaterialImage resultMi = (MaterialImage) target.get(mi);
        MaterialInOutHistory resultMioh = (MaterialInOutHistory) target.get(mioh);

        MaterialInventoryDetailDTO dto = MaterialInventoryDetailDTO.builder()
                .materialInventoryNo(resultMaterialInventory.getMaterialInventoryNo())  //자재재고 일련번호
                .materialNo(resultMaterials.getMaterialNo())                        // 자재 일련번호
                .materialType(resultMaterials.getMaterialType())                    // 자재분류
                .materialCode(resultMaterials.getMaterialCode())                    // 자재코드
                .materialName(resultMaterials.getMaterialName())                    // 자재이름
                .materialExplaination(resultMaterials.getMaterialExplaination())    // 자재설명
                .materialImageNo(resultMi.getMaterialImgNo())                       // 자재이미지 일련번호
                .materialImgName(resultMi.getMaterialImgName())                     // 자재이미지명
                .materialUuid(resultMi.getMaterialUuid())                           // 자재이미지 uuid
                .materialIncomingQuantity(resultMaterialInventory.getMaterialIncomingQuantity())                //입고수량
                .materialOutgoingQuantity(resultMaterialInventory.getMaterialOutgoingQuantity())                //출고수량
                .materialSupplyPrice(resultMaterials.getMaterialSupplyPrice())                                   //공급단가
                .materialTotalInventoryPayments(resultMaterialInventory.getMaterialTotalInventoryPayments())    //총재고금액
                .materialStock(resultMaterialInventory.getMaterialStock())          // 재고수량
                .materialHistoryNo(resultMioh.getMaterialHistoryNo())               // 입출고기록 일련번호
                .inOutSeparator(resultMioh.getInOutSeparator())                     // 입/출고 구분자
                .quantity(resultMioh.getQuantity())                                 // 입/출고 수량
                .historyDate(resultMioh.getHistoryDate())                           // 입/출고 날짜
                .employeeNo(resultMioh.getEmployee().getEmployeeNo())               // 담당자 일련번호
                .employeeName(resultMaterialInventory.getEmployeeName())            // 기록담당자
                .build();

        return dto;
    }


    //재고 > 입고관리 상세/목록
    //  -> 발주정보(자재코드, 자재이름),자재분류, 공급단가, 입고?발주수량, 담당자
    @Override
    public MaterialInventoryDetailDTO readInOut(int materialInventoryNo) {

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
                .orderNo(resultOrder.getOrderNo())                          //발주일련번호
                .orderCode(resultOrder.getOrderCode())                      //발주코드
                .materialCode(resultOrder.getMaterialProcurementContract().getMaterialCode())       //자재코드
                .materialType(resultMaterialInventory.getMaterialType())                            //자재분류
                .materialName(resultOrder.getMaterialName())                                        //자재이름
                .materialSupplyPrice(resultMaterialInventory.getMaterialSupplyPrice())              //공급단가
                .materialIncomingQuantity(resultMaterialInventory.getMaterialIncomingQuantity())    //입고수량
                .orderDate(resultOrder.getOrderDate())                      //발주일
                .orderDeliveryDate(resultOrder.getOrderDeliveryDate())      //납기일
                .employeeName(resultOrder.getEmployeeName())                //(발주)담당자
                .orderState(resultOrder.getOrderState())                    //(발주)상태
                .build();

        return dto;
    }

    //발주수량 -> 입고수량 증가
    @Override
    public int sumOfIncomingQuantity(int orderNo) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;

        JPQLQuery<Integer> query = new JPAQueryFactory(em)
                .select(materialInventory.materialIncomingQuantity.sum())
                .from(materialInventory)
                .where(materialInventory.order.orderNo.eq(orderNo).and(materialInventory.order.orderState.eq("검수완료")));

        int result = query.fetchOne();

        return result;
    }
}
