package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorSupplier;
import java.util.List;
import com.deligence.deli.repository.search.CooperatorSupplierSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CooperatorSupplierRepository extends JpaRepository<CooperatorSupplier, Integer>, CooperatorSupplierSearch {
    @Query("select p from CooperatorSupplier p where not exists " +
            "(select l.id from PartnerLink l where l.supplier = p) order by p.supplierName, p.supplierNo")
    List<CooperatorSupplier> findUnlinked();


}
