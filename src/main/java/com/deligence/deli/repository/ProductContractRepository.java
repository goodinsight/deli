package com.deligence.deli.repository;

import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.repository.search.ProductContractSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductContractRepository extends JpaRepository<ProductContract, Integer>, ProductContractSearch {


}
