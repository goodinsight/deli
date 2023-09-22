package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.repository.search.MaterialInventorySearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MaterialInventoryRepository extends JpaRepository<MaterialInventory, Integer>, MaterialInventorySearch {

    @Query("select o from Order o where o.orderNo = :orderNo order by o.orderNo desc")
    Optional<Order> findFristByOrderNo(int orderNo);

//    List<Order> findTop1ByNameOrderByIdAsc(String name);

//    @Query("select m from Materials m where m.materialNo = :materialNo order by m.materialNo desc limit 1")
//    Optional<Materials> getmatNo(int materialNo);

}
