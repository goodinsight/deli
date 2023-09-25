package com.deligence.deli.service;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    int materialStockRegister(MaterialInventoryDTO materialInventoryDTO);

    MaterialInventoryDTO materialStockRead(int materialInventoryNo);

    PageResponseDTO<MaterialInventoryDTO> materialStockList(PageRequestDTO pageRequestDTO);

}
