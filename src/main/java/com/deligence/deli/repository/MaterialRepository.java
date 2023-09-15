package com.deligence.deli.repository;

import com.deligence.deli.domain.Materials;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository extends JpaRepository<Materials, Long> {
}
