package com.deligence.deli.repository;

import com.deligence.deli.domain.Products;
import com.deligence.deli.repository.search.ProductSearch;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductsRepository extends JpaRepository<Products, Integer>, ProductSearch {

//    @Query(value = "select now()", nativeQuery = true)
//    String getTime();

    @EntityGraph(attributePaths = {"imageSet"})
    @Query("select p from Products p where p.productNo =:productNo")
    Optional<Products> findByIdWithImages(int productNo);
}

