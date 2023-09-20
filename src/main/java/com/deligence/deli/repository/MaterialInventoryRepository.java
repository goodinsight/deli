package com.deligence.deli.repository;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.repository.search.MaterialInventorySearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MaterialInventoryRepository extends JpaRepository<MaterialInventory, Integer>, MaterialInventorySearch {

//    @Query("select o from Order o where o.orderNo = :orderNo ORDER BY o.orderNo DESC LIMIT 1")
//    Optional<Order> getorNo(int orderNo);
//
//    @Query("select m from Materials m where m.materialNo = :materialNo ORDER BY m.materialNo DESC LIMIT 1")
//    Optional<Materials> getmatNo(int materialNo);

}
