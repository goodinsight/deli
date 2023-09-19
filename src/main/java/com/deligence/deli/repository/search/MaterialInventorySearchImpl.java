package com.deligence.deli.repository.search;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.QMaterialInventory;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.transaction.Transactional;
import java.util.List;

public class MaterialInventorySearchImpl extends QuerydslRepositorySupport implements MaterialInventorySearch {

    public MaterialInventorySearchImpl() {
        super(MaterialInventory.class);
    }

    @Override
    public Page<MaterialInventory> materialStockListOne(Pageable pageable) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;

        JPQLQuery<MaterialInventory> query = from(materialInventory);

        BooleanBuilder booleanBuilder = new BooleanBuilder();

        booleanBuilder.or(materialInventory.materials.materialName.contains("11"));

        booleanBuilder.or(materialInventory.materials.materialType.contains("11"));

        booleanBuilder.or(materialInventory.materials.materialCode.contains("11"));

        query.where(booleanBuilder);
        query.where(materialInventory.materialInventoryNo.gt(0));

        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialInventory> list = query.fetch();

        long count = query.fetchCount();

        return null;
    }

    @Override
    public Page<MaterialInventory> materialStockList(String[] types, String keyword, Pageable pageable) {

        QMaterialInventory materialInventory = QMaterialInventory.materialInventory;

        JPQLQuery<MaterialInventory> query = from(materialInventory);

        if ((types != null && types.length > 0) && keyword != null) {

            BooleanBuilder booleanBuilder = new BooleanBuilder();

            for (String type : types) {

                switch (type) {

                    case "t":
                        // 자재 이름 검색
                        booleanBuilder.or(materialInventory.materials.materialName.contains(keyword));
                        break;
                    case "c":
                        // 자재 타입 검색
                        booleanBuilder.or(materialInventory.materials.materialType.contains(keyword));
                        break;
                    case "w":
                        // 자재 코드 검색
                        booleanBuilder.or(materialInventory.materials.materialCode.contains(keyword));
                        break;

                }

            }
            query.where(booleanBuilder);
        }
        query.where(materialInventory.materialInventoryNo.gt(0));

        this.getQuerydsl().applyPagination(pageable, query);

        List<MaterialInventory> list = query.fetch();

        long count = query.fetchCount();

        return new PageImpl<>(list, pageable, count);

    }
}
