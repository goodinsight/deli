package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    int materialStockRegister(MaterialInventoryDTO materialInventoryDTO);

    OrderDTO materialInRead(int orderNo);

    MaterialInventoryDTO materialStockRead(int materialInventoryNo);

    PageResponseDTO<OrderDTO> materialInListAll(PageRequestDTO pageRequestDTO);

}
