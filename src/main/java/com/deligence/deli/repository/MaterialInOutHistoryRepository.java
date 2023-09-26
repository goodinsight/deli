package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInOutHistory;
import com.deligence.deli.repository.search.MaterialInOutHistorySearch;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MaterialInOutHistoryRepository extends JpaRepository<MaterialInOutHistory, Integer>, MaterialInOutHistorySearch {


}
