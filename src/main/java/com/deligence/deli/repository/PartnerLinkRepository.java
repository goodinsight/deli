package com.deligence.deli.repository;

import com.deligence.deli.domain.PartnerLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface PartnerLinkRepository extends JpaRepository<PartnerLink, Long> {
    @Query("select l from PartnerLink l join fetch l.client join fetch l.supplier order by l.id")
    List<PartnerLink> directory();
}
