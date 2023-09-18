package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface MaterialInventoryService {

    MaterialInventoryDTO materialInventorylistOne(int materialNo);

    PageResponseDTO<MaterialInventoryDTO> list(PageRequestDTO pageRequestDTO);

}
