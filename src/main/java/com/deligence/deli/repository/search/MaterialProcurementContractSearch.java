package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementContract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialProcurementContractSearch {

    Page<MaterialProcurementContract> search1(Pageable pageable);

    Page<MaterialProcurementContract> searchAll(String[] types, String keyword, Pageable pageable);
}
