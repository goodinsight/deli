package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.MaterialInventoryDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface MaterialInventorySearch {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    //자재 재고 목록 search
    Page<MaterialInventory> searchInventory(String[] types, String keyword, Pageable pageable);

    //재고> 입고관리 목록 (발주)
//    List<MaterialInventory> incoming(int orderNo);

    //자재 재고 상세
    MaterialInventoryDetailDTO readInventory(int materialInventoryNo);

    //재고 > 입고관리 상세
//    MaterialInventoryDetailDTO readIncoming(int orderNo);


    //발주수량 -> 입고수량 증가
//    int sumOfIncomingQuantity(int orderNo);


}
