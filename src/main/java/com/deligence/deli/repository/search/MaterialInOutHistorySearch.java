package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInOutHistory;
import com.deligence.deli.dto.MaterialInOutHistoryDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaterialInOutHistorySearch {

    Page<MaterialInOutHistoryDetailDTO> searchAll(String[] types, String keyword, Pageable pageable);

    MaterialInOutHistoryDetailDTO read(int materialNo);

}
