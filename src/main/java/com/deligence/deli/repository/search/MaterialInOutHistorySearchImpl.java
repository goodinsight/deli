package com.deligence.deli.repository.search;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.MaterialInOutHistoryDetailDTO;
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
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

public class MaterialInOutHistorySearchImpl extends QuerydslRepositorySupport implements MaterialInOutHistorySearch{

    public MaterialInOutHistorySearchImpl(){
        super(MaterialInOutHistory.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<MaterialInOutHistoryDetailDTO> searchAll(String[] types, String keyword, Pageable pageable) {

        QMaterialInOutHistory materialInOutHistory = QMaterialInOutHistory.materialInOutHistory;
        QMaterialInventory mi = QMaterialInventory.materialInventory;
        QEmployee employee = QEmployee.employee;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materialInOutHistory, mi, employee)
                .from(materialInOutHistory)
                .join(materialInOutHistory.materialInventory, mi).on(materialInOutHistory.materialInventory.eq(mi))
                .join(materialInOutHistory.employee, employee).on(materialInOutHistory.employee.eq(employee));

        if( (types != null && types.length >0 ) && keyword != null) {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for(String type: types){

                switch(type){
                    case "t":
                        booleanBuilder.or(materialInOutHistory.inOutSeparator.contains(keyword));   // 입 출고 구분자로 검색
                        break;
                }
            } // end for
            query.where(booleanBuilder);

        } // end if

        List<Tuple> targetDtoList = query.fetch();

        List<MaterialInOutHistoryDetailDTO> list = new ArrayList<>();

        for(Tuple target : targetDtoList){

            MaterialInOutHistory resultMaterialInOutHistory = (MaterialInOutHistory) target.get(materialInOutHistory);
            MaterialInventory resultMi = (MaterialInventory) target.get(mi);
            Employee resultEmployee = (Employee) target.get(employee);

            MaterialInOutHistoryDetailDTO dto = MaterialInOutHistoryDetailDTO.builder()
                    .materialHistoryNo(resultMaterialInOutHistory.getMaterialHistoryNo())
                    .inOutSeparator(resultMaterialInOutHistory.getInOutSeparator())
                    .materialInOutQuantity(resultMaterialInOutHistory.getQuantity())
                    .historyDate(resultMaterialInOutHistory.getHistoryDate())
                    .materialName(resultMi.getMaterialName())
                    .materialCode(resultMi.getMaterialCode())
                    .materialType(resultMi.getMaterialType())
                    .materialSupplyPrice(resultMi.getMaterialSupplyPrice())
                    .materialInventoryNo(resultMi.getMaterialInventoryNo())
                    .materialStock(resultMi.getMaterialStock())
                    .employeeNo(resultEmployee.getEmployeeNo())
                    .employeeName(resultEmployee.getEmployeeName())
                    .build();

            list.add(dto);
        }


        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);


    }

    @Override
    public MaterialInOutHistoryDetailDTO read(int materialHistoryNo){

        QMaterialInOutHistory materialInOutHistory = QMaterialInOutHistory.materialInOutHistory;
        QMaterialInventory mi = QMaterialInventory.materialInventory;
        QEmployee employee = QEmployee.employee;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materialInOutHistory, mi, employee)
                .from(materialInOutHistory)
                .join(materialInOutHistory.materialInventory, mi).on(materialInOutHistory.materialInventory.eq(mi))
                .join(materialInOutHistory.employee, employee).on(materialInOutHistory.employee.eq(employee))
                .where(materialInOutHistory.materialHistoryNo.eq(materialHistoryNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        MaterialInOutHistory resultMaterialInOutHistory = (MaterialInOutHistory) target.get(materialInOutHistory);
        MaterialInventory resultMi = (MaterialInventory) target.get(mi);
        Employee resultEmployee = (Employee) target.get(employee);

        MaterialInOutHistoryDetailDTO dto = MaterialInOutHistoryDetailDTO.builder()
                .materialHistoryNo(resultMaterialInOutHistory.getMaterialHistoryNo())
                .inOutSeparator(resultMaterialInOutHistory.getInOutSeparator())
                .materialInOutQuantity(resultMaterialInOutHistory.getQuantity())
                .historyDate(resultMaterialInOutHistory.getHistoryDate())
                .materialName(resultMi.getMaterialName())
                .materialCode(resultMi.getMaterialCode())
                .materialType(resultMi.getMaterialType())
                .materialSupplyPrice(resultMi.getMaterialSupplyPrice())
                .materialInventoryNo(resultMi.getMaterialInventoryNo())
                .materialStock(resultMi.getMaterialStock())
                .employeeNo(resultEmployee.getEmployeeNo())
                .employeeName(resultEmployee.getEmployeeName())
                .build();

        return dto;
    }

}
