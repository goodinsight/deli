package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.*;

public interface MaterialInventoryService {

    int materialStockRegister(MaterialInventoryDTO materialInventoryDTO, MaterialsDTO materialsDTO, OrderDTO orderDTO);

    MaterialInventoryDTO materialStockListOne(int materialInventoryNo);

    PageResponseDTO<MaterialInventoryDTO> materialStockList(PageRequestDTO pageRequestDTO);


}
