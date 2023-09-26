package com.deligence.deli.repository.search;

import com.deligence.deli.dto.MaterialInOutHistoryDetailDTO;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class MaterialInOutHistorySearchImpl implements MaterialInOutHistorySearch{

    @PersistenceContext
    EntityManager em;

    @Override
    public MaterialInOutHistoryDetailDTO read(int materialNo){
        
        return null;
    }

}
