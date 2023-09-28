package com.deligence.deli.repository.search;

import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.dto.ProductContractDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductContractSearch {

    Page<ProductContract> search(String[] types, String keyword, Pageable pageable);

    Page<ProductContract> searchWithState(String[] types, String keyword, String state, Pageable pageable);

    int getCodeCount(String productContractCode);

    ProductContractDetailDTO read(int productContractNo);

}
