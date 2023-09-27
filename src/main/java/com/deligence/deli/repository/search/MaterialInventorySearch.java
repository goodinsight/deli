package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialInventoryDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface MaterialInventorySearch {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    //자재 재고 목록 search
    Page<MaterialInventory> searchInventory(String[] types, String keyword, Pageable pageable);

    //입출고관리 목록 search (+상태검색)
    Page<MaterialInventory> searchIncoming(String[] types, String keyword, String state, Pageable pageable);

    //자재 재고 상세
    MaterialInventoryDetailDTO readInventory(int materialInventoryNo);

    //재고 > 입고 상세
    MaterialInventoryDetailDTO readIncoming(int orderNo);
//    MaterialInventoryDetailDTO readInOut(int materialInventoryNo);


    //발주수량 -> 입고수량 증가
    int sumOfIncomingQuantity(int orderNo);


}
