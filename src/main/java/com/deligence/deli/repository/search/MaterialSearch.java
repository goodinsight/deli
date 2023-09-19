package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Materials;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialSearch {

    Page<Materials> search1(Pageable pageable);

    Page<Materials> searchAll(String[] types, String keyword, Pageable pageable); //검색
}
