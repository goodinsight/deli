package com.deligence.deli.repository;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Order;
import com.deligence.deli.repository.search.MaterialInventorySearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MaterialInventoryRepository extends JpaRepository<MaterialInventory, Integer>, MaterialInventorySearch {



}
