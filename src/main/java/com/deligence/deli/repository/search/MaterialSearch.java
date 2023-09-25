package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialImageDTO;

import com.deligence.deli.dto.MaterialsDTO;

import com.deligence.deli.dto.MaterialListAllDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialSearch {

    Page<Materials> search1(Pageable pageable);

    Page<Materials> searchAll(String[] types, String keyword, Pageable pageable); //검색

    int getCodeCount(String materialCode); //자재코드생성


    Page<MaterialsDTO> searchWithAll(String[] types,
                                     String keyword,
                                     Pageable pageable);
//    Page<MaterialListAllDTO> searchWithAll(String[] types,
//                                           String keyword,
//                                           Pageable pageable);

}
