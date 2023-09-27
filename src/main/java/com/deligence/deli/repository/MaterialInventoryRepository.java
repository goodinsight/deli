package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.repository.search.MaterialInventorySearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MaterialInventoryRepository extends JpaRepository<MaterialInventory, Integer>, MaterialInventorySearch {

//    void insertMaterialInventory() {
//        SQLInsertClause insert = sqlQueryFactory.insert(EStudent.qStudent);
//
//        for (Academy idAcademy : idAcademies) {
//            for (Student student : matcher.get(idAcademy, now)) {
//                insert.populate(student, EntityMapper.DEFAULT).addBatch();
//            }
//        }
//
//        // count가 없을때 insert가 실행되면 values가 없는 쿼리가 수행되어 Exception 발생으로 트랜잭션 롤백 된다.
//        if(!insert.isEmpty()) {
//            insert.execute();
//            insert.clear();
//        }
//    }
}
