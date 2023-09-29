package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialProcurementPlanningDetailDTO;
import com.deligence.deli.dto.OrderDetailDTO;
import com.deligence.deli.dto.ProductionPlanningDTO;
import com.deligence.deli.dto.ProductionPlanningDetailDTO;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.JPQLQueryFactory;
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

        if ((types != null && types.length > 0) && keyword != null) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for (String type : types) {

                switch (type) {
                    //a:생산계획코드 b:제품코드 c:클라이언트 회사명 d:제품납기일 e:클라이언트계약상태 f:계약담당자 + 계약진행상태 별도
                    case "a":
                        booleanBuilder.or(productionPlanning.productionPlanCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(productionPlanning.productCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(productionPlanning.clientName.contains(keyword));
                        break;
                    case "d":   //제품 계약 납기일
                        booleanBuilder.or(productionPlanning.productDeliveryDate.stringValue().contains(keyword));
                        break;
                    case "e":
                        booleanBuilder.or(productionPlanning.clientStatus.contains(keyword));   //계약상태
                        break;
                    case "f":
                        booleanBuilder.or(productionPlanning.employeeName.contains(keyword));
                        break;

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        query.orderBy(productionPlanning.productionPlanNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        //https://www.inflearn.com/questions/153250/spring-sort%EB%A5%BC-querydsl-%EB%B3%80%ED%99%98-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%AC%B8%EC%9D%98


        List<ProductionPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<ProductionPlanning> searchWithState(String[] types, String keyword, String state, Pageable pageable) {

        QProductionPlanning productionPlanning = QProductionPlanning.productionPlanning;

        JPQLQuery<ProductionPlanning> query = new JPAQueryFactory(em)
                .selectFrom(productionPlanning);

        if ((types != null && types.length > 0) && keyword != null) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for (String type : types) {

                switch (type) {
                    //a:생산계획코드 b:제품코드 c:클라이언트 회사명 d:제품납기일 e:클라이언트계약상태 f:계약담당자 + 생산진행상태 별도
                    case "a":
                        booleanBuilder.or(productionPlanning.productionPlanCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(productionPlanning.productCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(productionPlanning.clientName.contains(keyword));
                        break;
                    case "d":   //제품 계약 납기일
                        booleanBuilder.or(productionPlanning.productDeliveryDate.stringValue().contains(keyword));
                        break;
                    case "e":
                        booleanBuilder.or(productionPlanning.clientStatus.contains(keyword));
                        break;
                    case "f":
                        booleanBuilder.or(productionPlanning.employeeName.contains(keyword));
                        break;

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        if (state != null) {
            query.where(productionPlanning.productionState.contains(state));   //생산 진행 상태 검색
        }

        query.orderBy(productionPlanning.productionPlanNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

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
        //제품계약->제품코드,제품수량,구매협력회사명,납기일,계약상태,사원이름(담당자),제품명,제품타입
        QProductContract pc = QProductContract.productContract;
        //필요자재코드 ->제품코드,자재명,자재분류,필요수량 (제품코드에 따른 필요 자재 목록 출력)
        QMaterialRequirementsList mrl = QMaterialRequirementsList.materialRequirementsList;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(productionPlanning, pc, mrl)
                .from(productionPlanning)
                .join(productionPlanning.productContract, pc).on(productionPlanning.productContract.eq(pc))
                .join(productionPlanning.materialRequirementsList, mrl).on(productionPlanning.materialRequirementsList.eq(mrl))
                .where(productionPlanning.productionPlanNo.eq(productionPlanNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        ProductionPlanning resultProductionPlanning = (ProductionPlanning) target.get(productionPlanning);
        ProductContract resultPc = (ProductContract) target.get(pc);
        MaterialRequirementsList resultMrl = (MaterialRequirementsList) target.get(mrl);

        ProductionPlanningDetailDTO dto = ProductionPlanningDetailDTO.builder()
                .productionPlanNo(resultProductionPlanning.getProductionPlanNo())
                .productionPlanCode(resultProductionPlanning.getProductionPlanCode())
                .productionQuantity(resultProductionPlanning.getProductionQuantity())
                .productionRequirementsDate(resultProductionPlanning.getProductionRequirementsDate())
                .productionRequirementsProcess(resultProductionPlanning.getProductionRequirementsProcess())
                .productionDeliveryDate(resultProductionPlanning.getProductionDeliveryDate())
                .detailExplaination(resultProductionPlanning.getDetailExplaination())
                .productionState(resultProductionPlanning.getProductionState())             //생산진행상태
                .productContractNo(resultPc.getProductContractNo())
                .productContractCode(resultPc.getProductContractCode())                     //제품계약코드
                .employeeNo(resultPc.getEmployee().getEmployeeNo())
                .employeeName(resultPc.getEmployee().getEmployeeName())                     //제품계약담당자
                .productNo(resultPc.getProducts().getProductNo())                           //계약제품일련번호 -> 필요자재항목
                .productCode(resultPc.getProducts().getProductCode())
                .productName(resultPc.getProducts().getProductName())
                .productType(resultPc.getProducts().getProductType())
                .productQuantity(resultPc.getProductQuantity())                             //제품계약수량
                .clientName(resultPc.getCooperatorClient().getClientName())                 //클라이언트회사명
                .productDeliveryDate(resultPc.getProductDeliveryDate())                     //제품납기일
                .clientStatus(resultPc.getCooperatorClient().getClientStatus())             //클라이언트계약상태
                .employeeName(resultPc.getEmployeeName())                                  //제품계약담당자
                .materialRequirementsListNo(resultMrl.getMaterialRequirementsListNo())      //제품별필요자재항목No
                .productNo(resultMrl.getProducts().getProductNo())                          //제품No
                .productCode(resultMrl.getProducts().getProductCode())                      //제품Code
//                .productName(resultMrl.getProducts().getProductName())                      //제품이름
                .materialNo(resultMrl.getMaterials().getMaterialNo())                       //자재No
                .materialCode(resultMrl.getMaterials().getMaterialCode())                   //자재코드
                .materialName(resultMrl.getMaterials().getMaterialName())                   //자재이름
                .materialType(resultMrl.getMaterials().getMaterialType())                   //자재타입
                .quantity(resultMrl.getQuantity())                                          //필요수량
                .employeeNo(resultProductionPlanning.getEmployee().getEmployeeNo())         //생산계획 담당자
                .employeeName2(resultProductionPlanning.getEmployeeName2())                  //생산계획 담당자
                .regDate(resultProductionPlanning.getRegDate())
                .modDate(resultProductionPlanning.getModDate())
                .build();

        return dto;
    }

    @Override
    public List<MaterialProcurementPlanning> procurementPlanList(int ProductionPlanNo) {

        QMaterialProcurementPlanning materialProcurementPlanning = QMaterialProcurementPlanning.materialProcurementPlanning;

        JPQLQuery<MaterialProcurementPlanning> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementPlanning)
                .where(materialProcurementPlanning.productionPlanning.productionPlanNo.eq(ProductionPlanNo));

        List<MaterialProcurementPlanning> list = query.fetch();

        long count = query.fetchCount();

        return list;

    }

    //생산계획상세 - 연관 조달계획 목록 (조인 필요) test
    @Override
    public List<MaterialProcurementPlanningDetailDTO> planList(int productionPlanNO) {

        QMaterialProcurementPlanning mpp = QMaterialProcurementPlanning.materialProcurementPlanning;
        QProductionPlanning pp = QProductionPlanning.productionPlanning;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(mpp, pp)
                .from(mpp)
                .join(mpp.productionPlanning, pp).on(mpp.productionPlanning.eq(pp))
                .where(mpp.productionPlanning.productionPlanNo.eq(productionPlanNO));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialProcurementPlanning resultMpp = (MaterialProcurementPlanning) target.get(mpp);
        ProductionPlanning resultPp = (ProductionPlanning) target.get(pp);

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO = MaterialProcurementPlanningDetailDTO.builder()
                .materialProcurementPlanNo(resultMpp.getMaterialProcurementPlanNo())
                .materialCode(resultMpp.getMaterialCode())
                .productionRequirementsProcess(resultPp.getProductionRequirementsProcess())     //생산 소요공정
                .productionRequirementsDate(resultPp.getProductionRequirementsDate())           //생산 소요기간
                .materialRequirementsCount(resultMpp.getMaterialRequirementsCount())            //자재 소요량
                .procurementDeliveryDate(resultMpp.getProcurementDeliveryDate())                //자재조달 납기일
                .productionDeliveryDate(resultPp.getProductionDeliveryDate())                   //생산 납기일
                .materialProcurementState(resultMpp.getMaterialProcurementState())              //자재조달상태
                .productionState(resultPp.getProductionState())                                 //생산진행상태
                .build();

        return null;
    }


    @Override
    public Page<ProductionPlanning> searchProduction(String[] types, String keyword, String[] states, Pageable pageable) {

        QProductionPlanning productionPlanning = QProductionPlanning.productionPlanning;

        JPQLQuery<ProductionPlanning> query = new JPAQueryFactory(em)
                .selectFrom(productionPlanning);

        if ((types != null && types.length > 0) && keyword != null) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for (String type : types) {

                switch (type) {
                    //a:생산계획코드 b:제품코드 c:클라이언트 회사명 d:제품납기일 e:클라이언트계약상태 f:계약담당자 + 생산진행상태 별도
                    case "a":
                        booleanBuilder.or(productionPlanning.productionPlanCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(productionPlanning.productCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(productionPlanning.clientName.contains(keyword));
                        break;
                    case "d":   //제품 계약 납기일
                        booleanBuilder.or(productionPlanning.productDeliveryDate.stringValue().contains(keyword));
                        break;
                    case "e":
                        booleanBuilder.or(productionPlanning.clientStatus.contains(keyword));
                        break;
                    case "f":
                        booleanBuilder.or(productionPlanning.employeeName.contains(keyword));
                        break;

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        //상태 조건 -------------------------------------

        BooleanBuilder booleanBuilder2 = new BooleanBuilder(); // (

        for(String state : states) {

            switch (state) {

                case "자재조달단계":
                    booleanBuilder2.or(productionPlanning.productionState.contains("자재조달단계"));
                    break;
                case "자재입고단계":
                    booleanBuilder2.or(productionPlanning.productionState.contains("자재입고단계"));
                    break;
                case "제품생산단계":
                    booleanBuilder2.or(productionPlanning.productionState.contains("제품생산단계"));
                    break;
                case "제품검수단계":
                    booleanBuilder2.or(productionPlanning.productionState.contains("제품검수단계"));
                    break;
                case "제품입고완료":
                    booleanBuilder2.or(productionPlanning.productionState.contains("제품입고완료"));
                    break;

            }

        }//end for

        query.where(booleanBuilder2);

        //-----------------------------

        query.orderBy(productionPlanning.productionPlanNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<ProductionPlanning> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }
}