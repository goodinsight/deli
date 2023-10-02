package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialProcurementContractDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialProcurementContractSearch {

    Page<MaterialProcurementContract> search1(Pageable pageable);

    Page<MaterialProcurementContract> searchAll(String[] types, String keyword, Pageable pageable);

    //사용 X
    Page<MaterialProcurementContract> searchByState(String[] keywords, Pageable pageable);

    //상태 검색
    Page<MaterialProcurementContract> searchWithState(String[] types, String keyword, String state, Pageable pageable);

    int getCodeCount(String materialProcurementContractCode);

    MaterialProcurementContractDetailDTO read(int materialProcurementContractNo);
}
