package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialInventoryDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface MaterialInventorySearch {

    //searchAll
    Page<MaterialInventory> searchAll(String[] types, String keyword, Pageable pageable);

    MaterialInventoryDetailDTO read(int materialInventoryNo);

}
