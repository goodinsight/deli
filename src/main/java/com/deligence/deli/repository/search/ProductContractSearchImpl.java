package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.OrderDetailDTO;
import com.deligence.deli.dto.ProductContractDetailDTO;
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

public class ProductContractSearchImpl  extends QuerydslRepositorySupport implements ProductContractSearch {

    public ProductContractSearchImpl() {
        super(ProductContract.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<ProductContract> search(String[] types, String keyword, Pageable pageable) {

        QProductContract productContract = QProductContract.productContract;

        JPQLQuery<ProductContract> query = new JPAQueryFactory(em)
                .selectFrom(productContract);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                switch(type){
                    //a:제품계약코드 b:제품코드 c:회사명 d:계약일(보류) +계약상태별도
                    case "a":
                        booleanBuilder.or(productContract.productContractCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(productContract.productCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(productContract.clientName.contains(keyword));
                        break;
                    case "d":
                        booleanBuilder.or(productContract.productContractDate.stringValue().contains(keyword));
                        break;

                }

            }//end for

            query.where(booleanBuilder);

        }//end if

        query.orderBy(productContract.productContractNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);// 오류 발생 부분. pageable에 sort를 담아 실행하면 오류가 발생한다.

        //https://www.inflearn.com/questions/153250/spring-sort%EB%A5%BC-querydsl-%EB%B3%80%ED%99%98-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%AC%B8%EC%9D%98


        List<ProductContract> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public Page<ProductContract> searchWithState(String[] types, String keyword, String state, Pageable pageable) {

        QProductContract productContract = QProductContract.productContract;

        JPQLQuery<ProductContract> query = new JPAQueryFactory(em)
                .selectFrom(productContract);

        if( (types != null && types.length > 0) && keyword != null ) { //검색조건과 키워드가 있다면

            BooleanBuilder booleanBuilder = new BooleanBuilder(); // (

            for(String type : types) {

                switch(type){
                    //a:제품계약코드 b:제품코드 c:회사명 d:계약일(보류) +계약상태별도
                    case "a":
                        booleanBuilder.or(productContract.productContractCode.contains(keyword));
                        break;
                    case "b":
                        booleanBuilder.or(productContract.productCode.contains(keyword));
                        break;
                    case "c":
                        booleanBuilder.or(productContract.clientName.contains(keyword));
                        break;
                    case "d":
                    booleanBuilder.or(productContract.productContractDate.stringValue().contains(keyword));
                    break;

                }

            }//end for

            query.where(booleanBuilder);


        }//end if

        if(state != null){
            query.where(productContract.productContractState.contains(state));//제품계약 상태 검색
        }

        query.orderBy(productContract.productContractNo.desc());

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<ProductContract> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public int getCodeCount(String code) {

        QProductContract productContract = QProductContract.productContract;

        JPQLQuery<ProductContract> query = new JPAQueryFactory(em)
                .selectFrom(productContract)
                .where(productContract.productContractCode.contains(code));

        return (int) query.fetchCount();

    }

    @Override
    public ProductContractDetailDTO read(int productContractNo) {

        QProductContract productContract = QProductContract.productContract;
        //join - Products, CooperatorClient
        QProducts products = QProducts.products;
        QCooperatorClient client = QCooperatorClient.cooperatorClient;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(productContract, products, client)
                .from(productContract)
                .join(productContract.products, products).on(productContract.products.eq(products))
                .join(productContract.cooperatorClient, client).on(productContract.cooperatorClient.eq(client))
                .where(productContract.productContractNo.eq(productContractNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        ProductContract resultProductContract = (ProductContract) target.get(productContract);
        Products resultProducts = (Products) target.get(products);
        CooperatorClient resultClient = (CooperatorClient) target.get(client);

        ProductContractDetailDTO dto = ProductContractDetailDTO.builder()
                .productContractNo(resultProductContract.getProductContractNo())
                .productContractCode(resultProductContract.getProductContractCode())
                .productNo(resultProducts.getProductNo())
                .productCode(resultProducts.getProductCode())
                .productName(resultProducts.getProductName())
                .productType(resultProducts.getProductType())
                .productQuantity(resultProductContract.getProductQuantity())
                .productContractDate(resultProductContract.getProductContractDate())
                .productDeliveryDate(resultProductContract.getProductDeliveryDate())
                .productQuotation(resultProductContract.getProductQuotation())
                .productContractState(resultProductContract.getProductContractState())
                .clientNo(resultClient.getClientNo())
                .clientName(resultClient.getClientName())
                .clientStatus(resultClient.getClientStatus())
                .clientCeo(resultClient.getClientCeo())
                .clientPhone(resultClient.getClientPhone())
                .clientAddress(resultClient.getClientAddress())
                .employeeNo(resultProductContract.getEmployee().getEmployeeNo())
                .employeeName(resultProductContract.getClientName())
//                .documentFileNo(resultProductContract.getDocumentFile().getDocumentFileNo())
                .regDate(resultProductContract.getRegDate())
                .modDate(resultProductContract.getModDate())
                .build();

        return dto;
    }
}
