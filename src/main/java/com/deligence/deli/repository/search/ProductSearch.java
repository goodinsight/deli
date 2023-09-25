package com.deligence.deli.repository.search;

import com.deligence.deli.domain.Products;
import com.deligence.deli.dto.ProductsDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductSearch {

    Page<Products> search1(Pageable pageable);

    Page<Products> searchAll(String[] types, String keyword, Pageable pageable); //검색

    int getCodeCount(String materialCode); //자재코드생성


    Page<ProductsDTO> searchWithAll(String[] types,
                                    String keyword,
                                    Pageable pageable);
//    Page<MaterialListAllDTO> searchWithAll(String[] types,
//                                           String keyword,
//                                           Pageable pageable);

}
