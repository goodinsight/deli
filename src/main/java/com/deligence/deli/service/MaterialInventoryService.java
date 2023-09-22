package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    int materialStockRegister(MaterialInventoryDTO materialInventoryDTO);

    MaterialInventoryDTO materialStockListOne(int materialInventoryNo);

    PageResponseDTO<MaterialInventoryDTO> materialStockList(PageRequestDTO pageRequestDTO);

}
