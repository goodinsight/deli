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
import java.util.List;

public class MaterialInOutHistorySearchImpl extends QuerydslRepositorySupport implements MaterialInOutHistorySearch{

    public MaterialInOutHistorySearchImpl(){
        super(MaterialInOutHistory.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<MaterialInOutHistory> searchAll(String[] types, String keyword, Pageable pageable) {

        QMaterialInOutHistory materialInOutHistory = QMaterialInOutHistory.materialInOutHistory;
        JPQLQuery<MaterialInOutHistory> query = from(materialInOutHistory);

        if( (types != null && types.length >0 ) && keyword != null) {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for(String type: types){

                switch(type){
                    case "t":
                        booleanBuilder.or(materialInOutHistory.inOutSeparator.contains(keyword));   // 입 출고 구분자로 검색
                        break;
//                    case "c":
//                        booleanBuilder.or(materialInOutHistory..contains(keyword));
//                        break;
//                    case "w":
//                        booleanBuilder.or(materialInOutHistory.writer.contains(keyword));
//                        break;
                }
            } // end for
            query.where(booleanBuilder);

        } // end if

        // bno > 0
        query.where(materialInOutHistory.materialHistoryNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialInOutHistory> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

    @Override
    public MaterialInOutHistoryDetailDTO read(int materialNo){

        QMaterials materials = QMaterials.materials;
        QMaterialInventory mi = QMaterialInventory.materialInventory;
        QEmployee employee = QEmployee.employee;

        JPQLQuery<Tuple> query = new JPAQueryFactory(em)
                .select(materials, mi, employee)
                .from(materials)
                .join(materials.materialInventory, mi).on(materials.materialInventory.eq(mi))
                .join(materials.employee, employee).on(materials.employee.eq(employee))
                .where(materials.materialNo.eq(materialNo));

        List<Tuple> targetDtoList = query.fetch();

        Tuple target = targetDtoList.get(0);

        Materials resultMaterials = (Materials) target.get(materials);
        MaterialInventory resultMi = (MaterialInventory) target.get(mi);
        Employee resultEmployee = (Employee) target.get(employee);

        MaterialInOutHistoryDetailDTO dto = MaterialInOutHistoryDetailDTO.builder()
                .materialNo(resultMaterials.getMaterialNo())
                .materialCode(resultMaterials.getMaterialCode())
                .materialName(resultMaterials.getMaterialName())
                .materialType(resultMaterials.getMaterialType())
                .materialSupplyPrice(resultMaterials.getMaterialSupplyPrice())

                .materialInventoryNo(resultMi.getMaterialInventoryNo())
                .materialCode(resultMi.getMaterialCode())
                .materialName(resultMi.getMaterialName())
                .materialStock(resultMi.getMaterialStock())

                .employeeNo(resultEmployee.getEmployeeNo())
                .employeeName(resultEmployee.getEmployeeName())
                .build();

        return dto;
    }

}
