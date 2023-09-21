package com.deligence.deli.service;

import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProgressInspectionDTO;

public interface ProgressInspectionService {

    int register(ProgressInspectionDTO progressInspectionDTO);

    ProgressInspectionDTO read(int progressInspectionNo);

    void modify(ProgressInspectionDTO progressInspectionDTO);

    void remove(int progressInspectionNo);

    PageResponseDTO<ProgressInspectionDTO> list(int progressInspectionNo, PageRequestDTO pageRequestDTO);


}
