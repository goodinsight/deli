package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialInventorySearch {

    Page<MaterialInventory> search1(Pageable pageable);

    Page<MaterialInventory> searchAll(String[] types, String keyword, Pageable pageable);

}
