package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    int materialStockRegister(MaterialInventoryDTO materialInventoryDTO);

    OrderDetailDTO materialInRead(int orderNo);

    MaterialInventoryDTO materialStockRead(int materialInventoryNo);

    PageResponseDTO<OrderDTO> materialInListAll(PageRequestDTO pageRequestDTO);

}
