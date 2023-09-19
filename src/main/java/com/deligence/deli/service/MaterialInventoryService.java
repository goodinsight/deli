package com.deligence.deli.service;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface MaterialInventoryService {

    MaterialInventoryDTO materialStockListOne(int materialInventoryNo);

    PageResponseDTO<MaterialInventoryDTO> materialStockList(PageRequestDTO pageRequestDTO);


}
