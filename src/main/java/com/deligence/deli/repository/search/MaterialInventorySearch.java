package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface MaterialInventorySearch {

    Page<MaterialInventory> materialStockListOne(Pageable pageable);

    Page<MaterialInventory> materialStockList(String[] types, String keyword, Pageable pageable);

}
