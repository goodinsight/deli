package com.deligence.deli.repository.search;

import com.deligence.deli.dto.MaterialInOutHistoryDetailDTO;

public interface MaterialInOutHistorySearch {

    MaterialInOutHistoryDetailDTO read(int materialNo);

}
