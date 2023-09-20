package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.repository.search.MaterialProcurementContractSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialProcurementContractRepository
        extends JpaRepository<MaterialProcurementContract, Integer>,
        MaterialProcurementContractSearch {


}
