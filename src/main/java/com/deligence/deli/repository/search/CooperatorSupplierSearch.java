package com.deligence.deli.repository.search;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.dto.CooperatorSupplierDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CooperatorSupplierSearch {

    Page<CooperatorSupplier> search(String[] types, String keyword, Pageable pageable);

    //협력회사 계약상태 포함 검색
    Page<CooperatorSupplier> searchWithState(String[] types, String keyword, String state, Pageable pageable);

//    CooperatorSupplierDTO read(int supplierNo);

}
