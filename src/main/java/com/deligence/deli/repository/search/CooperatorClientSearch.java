package com.deligence.deli.repository.search;

import com.deligence.deli.domain.CooperatorClient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CooperatorClientSearch {

    Page<CooperatorClient> searchAll(String[]  types, String keyword, Pageable pageable); //검색 + 페이징
}
