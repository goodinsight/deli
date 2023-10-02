package com.deligence.deli.repository;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.repository.search.CooperatorSupplierSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CooperatorSupplierRepository extends JpaRepository<CooperatorSupplier, Integer>, CooperatorSupplierSearch {

}
