package com.deligence.deli.repository;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.repository.search.MaterialSearch;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MaterialsRepository extends JpaRepository<Materials, Integer>, MaterialSearch {

//    @Query(value = "select now()", nativeQuery = true)
//    String getTime();

    @EntityGraph(attributePaths = {"imageSet"})
    @Query("select m from Materials m where m.materialNo =:materialNo")
    Optional<Materials> findByIdWithImages(int materialNo);
}

