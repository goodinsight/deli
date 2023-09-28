package com.deligence.deli.repository.search;

import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.dto.ProductContractDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class ProductContractSearchImpl  extends QuerydslRepositorySupport implements ProductContractSearch {

    public ProductContractSearchImpl() {
        super(ProductContract.class);
    }

    @PersistenceContext
    EntityManager em;

    @Override
    public Page<ProductContract> search(String[] types, String keyword, Pageable pageable) {
        return null;
    }

    @Override
    public Page<ProductContract> searchWithState(String[] types, String keyword, String state, Pageable pageable) {
        return null;
    }

    @Override
    public int getCodeCount(String productContractCode) {
        return 0;
    }

    @Override
    public ProductContractDetailDTO read(int productContractNo) {
        return null;
    }
}
