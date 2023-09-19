package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.QEmployee;
import com.deligence.deli.dto.EmployeeSecurityDTO;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeSearchImpl extends QuerydslRepositorySupport implements EmployeeSearch {

    public EmployeeSearchImpl() {
        super(Employee.class);
    }

    @Override
    public Page<Employee> search1(Pageable pageable) {

        QEmployee employee = QEmployee.employee;

        JPQLQuery<Employee> query = from(employee);

        query.where(employee.employeeId.contains("1"));

        this.getQuerydsl().applyPagination(pageable, query);

        List<Employee> list = query.fetch();

        long count = query.fetchCount();

        return null;
    }

    @Override
    public Page<Employee> searchAll(String[] types, String keyword, Pageable pageable) {

        QEmployee employee = QEmployee.employee;
        JPQLQuery<Employee> query = from(employee);

        if( (types != null && types.length >0) && keyword != null) {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for(String type: types) {

                switch (type){
                    case "i":
                        booleanBuilder.or(employee.employeeId.contains(keyword));
                        break;
                    case "n":
                        booleanBuilder.or(employee.employeeName.contains(keyword));
                        break;
                    case "p":
                        booleanBuilder.or(employee.position.positionName.contains(keyword));
                        break;
                }
            }// end for
            query.where(booleanBuilder);

        }// end if

        //employeeNo > 0
        query.where(employee.employeeNo.gt(0));

        //paging
        this.getQuerydsl().applyPagination(pageable, query);

        List<Employee> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);
    }

//    @Override
//    public Page<EmployeeSecurityDTO> searchWithAll(String[] types, String keyword, Pageable pageable) {
//
//        QEmployee employee = QEmployee.employee;
//
//        JPQLQuery<Employee> employeeJPQLQuery = from(employee);
//
//        if( (types != null && types.length >0) && keyword != null) {
//
//            BooleanBuilder booleanBuilder = new BooleanBuilder();
//
//            for(String type: types) {
//
//                switch (type){
//                    case "i":
//                        booleanBuilder.or(employee.employeeId.contains(keyword));
//                        break;
//                    case "n":
//                        booleanBuilder.or(employee.employeeName.contains(keyword));
//                        break;
//                    case "p":
//                        booleanBuilder.or(employee.position.positionName.contains(keyword));
//                        break;
//                }
//            }// end for
//            employeeJPQLQuery.where(booleanBuilder);
//
//        }// end if
//
//        employeeJPQLQuery.groupBy(employee);
//
//        getQuerydsl().applyPagination(pageable, employeeJPQLQuery);
//
//        List<Employee> employeeList = employeeJPQLQuery.fetch();
//
//        List<EmployeeSecurityDTO> dtoList = employeeList.stream().map(list -> {
//
//           EmployeeSecurityDTO dto = new EmployeeSecurityDTO(
//                   list.getEmployeeNo(),
//                   list.getEmployeeId(),
//                   list.getEmployeePw(),
//                   list.getEmployeeEmail(),
//                   list.getEmployeeName(),
//                   list.getEmployeePhone(),
//                   list.getEmployeeEntranceDate(),
//                   list.isDel(),
//                   list.isSocial(),
//                   list.getPosition().getPositionName());
//
//           return dto;
//
//        }).collect(Collectors.toList());
//
//        long totalCount = employeeJPQLQuery.fetchCount();
//
//        return new PageImpl<>(dtoList, pageable, totalCount);
//    }
}
