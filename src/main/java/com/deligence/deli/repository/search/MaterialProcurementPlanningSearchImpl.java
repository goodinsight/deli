package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.MaterialProcurementPlanningDetailDTO;
import com.deligence.deli.dto.OrderDetailDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.Querydsl;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class MaterialProcurementPlanningSearchImpl extends QuerydslRepositorySupport
        implements MaterialProcurementPlanningSearch {

    public MaterialProcurementPlanningSearchImpl() {
        super(MaterialProcurementPlanning.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<MaterialProcurementPlanning> search1(Pageable pageable) {

        QMaterialProcurementPlanning materialProcurementPlanning =
                QMaterialProcurementPlanning.materialProcurementPlanning;    //Q도메인 객체

        JPQLQuery<MaterialProcurementPlanning> query = from(materialProcurementPlanning);
        // select.. from materialProcurementPlanning

//        query.where(materialProcurementPlanning.materialCode.contains("1"));
//        //where material_code like...

        query.where(materialProcurementPlanning.materialProcurementState.contains("진행중"));
        //where material_procurement_state like...

        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return null;
    }

    @Override
    public Page<MaterialProcurementPlanning> searchAll(String[] types, String keyword, Pageable pageable) {

        QMaterialProcurementPlanning materialProcurementPlanning =
                QMaterialProcurementPlanning.materialProcurementPlanning;

//        JPQLQuery<MaterialProcurementPlanning> query = from(materialProcurementPlanning);

        JPQLQuery<MaterialProcurementPlanning> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementPlanning);

        if ((types != null && types.length > 0) && keyword != null) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   //(

            for (String type : types) {
                //키워드 a:조달계획코드 b:자재코드 c:자재이름 d:납기일 e:자재소요량 f:조달계약상태 (상태별도)
                switch (type) {

                    case "a":
                        booleanBuilder.or(materialProcurementPlanning.materialProcurementPlanCode.contains(keyword));    //조달계획코드
                        break;
                    case "b":
                        booleanBuilder.or(materialProcurementPlanning.materialCode.contains(keyword));  //자재코드
                        break;
                    case "c":
                        booleanBuilder.or(materialProcurementPlanning.materialName.contains(keyword));  //자재이름
                        break;
                    case "d":
                        booleanBuilder.or(materialProcurementPlanning.procurementDeliveryDate.stringValue().contains(keyword));    //납기일 검색
                        break;
                    case "e":
                        booleanBuilder.or(materialProcurementPlanning.materialRequirementsCount.stringValue().contains(keyword));  //자재소요량 검색
                        break;
                    case "f":
                        booleanBuilder.or(materialProcurementPlanning.materialProcurementState.contains(keyword)); //자재조달상태 검색
                        break;
                }
            }//end for
            query.where(booleanBuilder);
        }//end if

        //material_procurement_plan_no > 0
//        query.where(materialProcurementPlanning.materialProcurementPlanNo.gt(0));

        query.orderBy(materialProcurementPlanning.materialProcurementPlanNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<MaterialProcurementPlanning> searchByState(String[] keywords, Pageable pageable) {

        QMaterialProcurementPlanning materialProcurementPlanning = QMaterialProcurementPlanning.materialProcurementPlanning;

        JPQLQuery<MaterialProcurementPlanning> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementPlanning);

        if( keywords != null && keywords.length > 0) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String keyword : keywords) {

                booleanBuilder.or(materialProcurementPlanning.materialProcurementState.contains(keyword));

            }//end for

            query.where(booleanBuilder);

        }//end if

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<MaterialProcurementPlanning> searchWithState(String[] types, String keyword, String state, Pageable pageable) {

        QMaterialProcurementPlanning materialProcurementPlanning = QMaterialProcurementPlanning.materialProcurementPlanning;

        JPQLQuery<MaterialProcurementPlanning> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementPlanning);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {
                //키워드 a:조달계획코드 b:자재코드 c:자재이름 d:납기일 e:자재소요량 f:조달계약상태 (상태별도)
                switch (type) {

                    case "a":
                        booleanBuilder.or(materialProcurementPlanning.materialProcurementPlanCode.contains(keyword));    //조달계획코드
                        break;
                    case "b":
                        booleanBuilder.or(materialProcurementPlanning.materialCode.contains(keyword));  //자재코드
                        break;
                    case "c":
                        booleanBuilder.or(materialProcurementPlanning.materialName.contains(keyword));  //자재이름
                        break;
                    case "d":
                        booleanBuilder.or(materialProcurementPlanning.procurementDeliveryDate.stringValue().contains(keyword));    //납기일 검색
                        break;
                    case "e":
                        booleanBuilder.or(materialProcurementPlanning.materialRequirementsCount.stringValue().contains(keyword));  //자재소요량 검색
                        break;
                    case "f":
                        booleanBuilder.or(materialProcurementPlanning.materialProcurementState.contains(keyword)); //자재조달상태 검색
                        break;

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        if(state != null){
            query.where(materialProcurementPlanning.materialProcurementState.contains(state));//자재조달 상태 검색 -> 진행중, 조달중단, 조달완료
        }

        query.orderBy(materialProcurementPlanning.materialProcurementPlanNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }

    @Override
    public int getCodeCount(String code) {

        QMaterialProcurementPlanning materialProcurementPlanning = QMaterialProcurementPlanning.materialProcurementPlanning;

        JPQLQuery<MaterialProcurementPlanning> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementPlanning)
                .where(materialProcurementPlanning.materialProcurementPlanCode.contains(code));

        return (int) query.fetchCount();

    }

    @Override
    public MaterialProcurementPlanningDetailDTO read(int materialProcurementPlanNo) {

        QMaterialProcurementPlanning materialProcurementPlanning = QMaterialProcurementPlanning.materialProcurementPlanning;
        QProductionPlanning pp = QProductionPlanning.productionPlanning;
        QMaterials mr = QMaterials.materials;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materialProcurementPlanning, pp, mr)
                .from(materialProcurementPlanning)
                .join(materialProcurementPlanning.productionPlanning, pp).on(materialProcurementPlanning.productionPlanning.eq(pp))
                .join(materialProcurementPlanning.materials, mr).on(materialProcurementPlanning.materials.eq(mr))
                .where(materialProcurementPlanning.materialProcurementPlanNo.eq(materialProcurementPlanNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialProcurementPlanning resultMaterialProcurementPlanning =
                (MaterialProcurementPlanning) target.get(materialProcurementPlanning);
        ProductionPlanning resultPp = (ProductionPlanning) target.get(pp);
        Materials resultMr = (Materials) target.get(mr);

        MaterialProcurementPlanningDetailDTO dto = MaterialProcurementPlanningDetailDTO.builder()
                .materialProcurementPlanNo(resultMaterialProcurementPlanning.getMaterialProcurementPlanNo())
                .materialProcurementPlanCode(resultMaterialProcurementPlanning.getMaterialProcurementPlanCode())
                .procurementDeliveryDate(resultMaterialProcurementPlanning.getProcurementDeliveryDate())
                .materialRequirementsCount(resultMaterialProcurementPlanning.getMaterialRequirementsCount())
                .materialProcurementState(resultMaterialProcurementPlanning.getMaterialProcurementState())
                .productionPlanNo(resultPp.getProductionPlanNo())
                .productionPlanCode(resultPp.getProductionPlanCode())
//                .productCode(resultPp.getProductContract().getProductCode())
                .productCode(resultPp.getProductCode())
                .productDeliveryDate(resultPp.getProductDeliveryDate())
                .clientName(resultPp.getClientName())
                .clientStatus(resultPp.getClientStatus())
//                .materialNo(resultMaterialProcurementPlanning.getMaterials().getMaterialNo())
                .materialNo(resultMr.getMaterialNo())
//                .materialCode(resultMaterialProcurementPlanning.getMaterials().getMaterialCode())
                .materialCode(resultMr.getMaterialCode())
                .materialType(resultMr.getMaterialType())
                .materialName(resultMr.getMaterialName())
                .materialSupplyPrice(resultMr.getMaterialSupplyPrice())
                .employeeNo(resultMaterialProcurementPlanning.getEmployee().getEmployeeNo())
                .employeeName(resultMaterialProcurementPlanning.getEmployee().getEmployeeName())
//                .employeeName(resultMaterialProcurementPlanning.getEmployeeName())
                .regDate(resultMaterialProcurementPlanning.getRegDate())
                .modDate(resultMaterialProcurementPlanning.getModDate())
                .productionRequirementsProcess(resultPp.getProductionRequirementsProcess())
                .productionRequirementsDate(resultPp.getProductionRequirementsDate())
                .productionDeliveryDate(resultPp.getProductionDeliveryDate())
                .productionState(resultPp.getProductionState())
                .build();

        return dto;
    }


    //조달계획 상세(연관 발주 목록)
    @Override
    public List<Order> orderList(int materialProcurementPlanNo) {

        QOrder order = QOrder.order;

        JPQLQuery<Order> query = new JPAQueryFactory(em)
                .selectFrom(order)
                .where(order.materialProcurementPlanning.materialProcurementPlanNo.eq(materialProcurementPlanNo));

        List<Order> list = query.fetch();

        long count = query.fetchCount();

        return list;


    }
}
