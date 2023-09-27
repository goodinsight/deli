package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.MaterialInventoryDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface MaterialInventorySearch {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    //자재 재고 목록 search
    Page<MaterialInventory> searchInventory(String[] types, String keyword, Pageable pageable);

    //자재 재고 상세
    MaterialInventoryDetailDTO readInventory(int materialInventoryNo);


    MaterialInventory readByCode(String materialCode);

}
