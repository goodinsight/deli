package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialProcurementContractDetailDTO;
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

public class MaterialProcurementContractSearchImpl extends QuerydslRepositorySupport implements MaterialProcurementContractSearch{

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

        JPQLQuery<MaterialProcurementContract> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementContract);

        if ( (types != null && types.length > 0) && keyword != null ) {   //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder();   // (

            for (String type : types) {

                switch (type) { //a:조달계획코드, b:자재코드, c:자재이름, d:공급단가, e:납품업체명, f:자재조달계약상태 (별도로 처리 추가)

                    case "a":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanCode.contains(keyword));    //조달계획코드
                        break;
                    case "b":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanning.materialCode.contains(keyword));   //자재코드
                        break;
                    case "c":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanning.materialName.contains(keyword));   //자재이름
                        break;
                    case "d":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanning.materialSupplyPrice.stringValue().contains(keyword));  //공급단가
                        break;
                    case "e":
                        booleanBuilder.or(materialProcurementContract.cooperatorSupplier.supplierName.contains(keyword));   //자재협력회사명
                        break;
                    case "f":
                        booleanBuilder.or(materialProcurementContract.materialProcurementContractState.contains(keyword));   //자재조달계약상태
                        break;
                }
            }//end for

            query.where(booleanBuilder);

        }//end if

        query.orderBy(materialProcurementContract.materialProcurementContractNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);
        //JPA기능이 아닌 별도의 search를 만들어서 pageable에 sort를 담아 실행하면 오류 발생.

        List<MaterialProcurementContract> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    //상태 검색 -> searchWithState로 수정함
    @Override
    public Page<MaterialProcurementContract> searchByState(String[] keywords, Pageable pageable) {
        QMaterialProcurementContract materialProcurementContract = QMaterialProcurementContract.materialProcurementContract;
        JPQLQuery<MaterialProcurementContract> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementContract);
        if( keywords != null && keywords.length > 0) { //검색조건과 키워드가 있다면
            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (
            for(String keyword : keywords) {
                booleanBuilder.or(materialProcurementContract.materialProcurementContractState.contains(keyword));
            }//end for
            query.where(booleanBuilder);
        }//end if
        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.
        List<MaterialProcurementContract> list = query.fetch();
        long count = query.fetchCount();
        return new PageImpl<>(list, pageable, count);
    }


    @Override
    public Page<MaterialProcurementContract> searchWithState(String[] types, String keyword, String state, Pageable pageable) {

        QMaterialProcurementContract materialProcurementContract = QMaterialProcurementContract.materialProcurementContract;

        JPQLQuery<MaterialProcurementContract> query = new JPAQueryFactory(em).selectFrom(materialProcurementContract);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                switch (type) {

                    case "a":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanCode.contains(keyword));    //조달계획코드
                        break;
                    case "b":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanning.materialCode.contains(keyword));   //자재코드
                        break;
                    case "c":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanning.materialName.contains(keyword));   //자재이름
                        break;
                    case "d":
                        booleanBuilder.or(materialProcurementContract.materialProcurementPlanning.materialSupplyPrice.stringValue().contains(keyword));  //공급단가
                        break;
                    case "e":
                        booleanBuilder.or(materialProcurementContract.cooperatorSupplier.supplierName.contains(keyword));   //자재협력회사명
                        break;
                    case "f":
                        booleanBuilder.or(materialProcurementContract.materialProcurementContractState.contains(keyword));   //자재조달계약상태
                        break;
                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        if(state != null){
            query.where(materialProcurementContract.materialProcurementContractState.contains(state));//자재조달 상태 검색
        }

        query.orderBy(materialProcurementContract.materialProcurementContractNo.desc());

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

    @Override
    public MaterialProcurementContractDetailDTO read(int materialProcurementContractNo) {

        QMaterialProcurementContract materialProcurementContract = QMaterialProcurementContract.materialProcurementContract;

        //조달계획->자재(자재코드,자재분류,자재이름,공급단가) / 협력회사->협력회사명, 대표명, 연락처
        QMaterialProcurementPlanning mpp = QMaterialProcurementPlanning.materialProcurementPlanning;
        QCooperatorSupplier cs = QCooperatorSupplier.cooperatorSupplier;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materialProcurementContract, mpp, cs)
                .from(materialProcurementContract)
                .join(materialProcurementContract.materialProcurementPlanning, mpp).on(materialProcurementContract.materialProcurementPlanning.eq(mpp))
                .join(materialProcurementContract.cooperatorSupplier, cs).on(materialProcurementContract.cooperatorSupplier.eq(cs))
                .where(materialProcurementContract.materialProcurementContractNo.eq(materialProcurementContractNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialProcurementContract resultMaterialProcurementContract = (MaterialProcurementContract) target.get(materialProcurementContract);
        MaterialProcurementPlanning resultMpp = (MaterialProcurementPlanning) target.get(mpp);
        CooperatorSupplier resultCs = (CooperatorSupplier) target.get(cs);

        MaterialProcurementContractDetailDTO dto = MaterialProcurementContractDetailDTO.builder()
                .materialProcurementContractNo(resultMaterialProcurementContract.getMaterialProcurementContractNo())
                .materialProcurementContractCode(resultMaterialProcurementContract.getMaterialProcurementContractCode())
                .materialProcurementContractDate(resultMaterialProcurementContract.getMaterialProcurementContractDate())
                .materialProcurementContractState(resultMaterialProcurementContract.getMaterialProcurementContractState())
                .materialProcurementContractEtc(resultMaterialProcurementContract.getMaterialProcurementContractEtc())
                .materialProcurementPlanNo(resultMpp.getMaterialProcurementPlanNo())
                .materialProcurementPlanCode(resultMpp.getMaterialProcurementPlanCode())
                .materialRequirementsCount(resultMpp.getMaterialRequirementsCount())
                //계획에서 자재 정보 가져오기
                .materialCode(resultMpp.getMaterials().getMaterialCode())
                .materialType(resultMpp.getMaterials().getMaterialType())
                .materialName(resultMpp.getMaterials().getMaterialName())
                .materialSupplyPrice(resultMpp.getMaterials().getMaterialSupplyPrice())
                //자재조달수량 추가
                .procurementQuantity(resultMaterialProcurementContract.getProcurementQuantity())
                .supplierNo(resultCs.getSupplierNo())
                .supplierName(resultCs.getSupplierName())
                .supplierCeo(resultCs.getSupplierCeo())
                .supplierPhone(resultCs.getSupplierPhone())
                .supplierStatus(resultCs.getSupplierStatus())
                .employeeNo(resultMaterialProcurementContract.getEmployee().getEmployeeNo())
                .employeeName(resultMaterialProcurementContract.getEmployeeName())
//                .employeeName(resultMaterialProcurementContract.getEmployee().getEmployeeName())
//                .documentFileNo(resultMaterialProcurementContract.getDocumentFile().getDocumentFileNo())
                .regDate(resultMaterialProcurementContract.getRegDate())
                .modDate(resultMaterialProcurementContract.getModDate())
                .build();

        return dto;

    }

    //사용X
    @Override
    public Page<MaterialProcurementContract> searchWithState2(String[] types, String keyword, String[] states, Pageable pageable) {

        QMaterialProcurementContract materialProcurementContract = QMaterialProcurementContract.materialProcurementContract;

        JPQLQuery<MaterialProcurementContract> query = new JPAQueryFactory(em)
                .selectFrom(materialProcurementContract);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                    switch (type) {

                        case "a":
                            booleanBuilder.or(materialProcurementContract.materialProcurementPlanCode.contains(keyword));    //조달계획코드
                            break;
                        case "b":
                            booleanBuilder.or(materialProcurementContract.materialCode.contains(keyword));   //자재코드
                            break;
                        case "c":
                            booleanBuilder.or(materialProcurementContract.materialName.contains(keyword));   //자재이름
                            break;
                        case "d":
                            booleanBuilder.or(materialProcurementContract.materialSupplyPrice.stringValue().contains(keyword));  //공급단가
                            break;
                        case "e":
                            booleanBuilder.or(materialProcurementContract.supplierName.contains(keyword));   //자재협력회사명
                            break;
                        case "f":
                            booleanBuilder.or(materialProcurementContract.materialProcurementContractState.contains(keyword));   //자재조달계약상태
                            break;
                    }

                }//end for

                query.where(booleanBuilder);

            }//end if

            // 상태 조건 -----------------

            if ((states != null && states.length > 0)) {

                BooleanBuilder booleanBuilder2 = new BooleanBuilder(); // (

                for(String state : states) {

                    switch(state){

                        case "조달계약진행중":
                            booleanBuilder2.or(materialProcurementContract.materialProcurementContractState.contains("조달계약진행중"));
                            break;
                        case "발주진행중":
                            booleanBuilder2.or(materialProcurementContract.materialProcurementContractState.contains("발주진행중"));
                            break;
                        case "조달완료":
                            booleanBuilder2.or(materialProcurementContract.materialProcurementContractState.contains("조달완료"));
                            break;
                        case "계약파기":
                            booleanBuilder2.or(materialProcurementContract.materialProcurementContractState.contains("계약파기"));
                            break;

                    }

                }//end for

            query.where(booleanBuilder2);

            //------------------------

            }//end states if

        query.orderBy(materialProcurementContract.materialProcurementContractNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialProcurementContract> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

}
