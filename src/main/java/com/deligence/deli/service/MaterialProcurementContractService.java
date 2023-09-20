package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialProcurementContractDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface MaterialProcurementContractService {

    int register(MaterialProcurementContractDTO materialProcurementContractDTO);

    MaterialProcurementContractDTO read(int materialProcurementContractNo);

    void modify(MaterialProcurementContractDTO materialProcurementContractDTO);

    void remove(int materialProcurementContractNo);

    PageResponseDTO<MaterialProcurementContractDTO> list(PageRequestDTO pageRequestDTO);

    int getCodeCount(String orderCode);
}
