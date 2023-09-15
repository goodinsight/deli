package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QMaterialInventory is a Querydsl query type for MaterialInventory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialInventory extends EntityPathBase<MaterialInventory> {

    private static final long serialVersionUID = 2064937012L;

    public static final QMaterialInventory materialInventory = new QMaterialInventory("materialInventory");

    public final NumberPath<Integer> material_incoming_quantity = createNumber("material_incoming_quantity", Integer.class);

    public final NumberPath<Long> material_no = createNumber("material_no", Long.class);

    public final NumberPath<Integer> material_outgoing_quantity = createNumber("material_outgoing_quantity", Integer.class);

    public final NumberPath<Integer> material_stock = createNumber("material_stock", Integer.class);

    public final NumberPath<Long> material_supply_price = createNumber("material_supply_price", Long.class);

    public final NumberPath<Long> material_total_inventory_payments = createNumber("material_total_inventory_payments", Long.class);

    public QMaterialInventory(String variable) {
        super(MaterialInventory.class, forVariable(variable));
    }

    public QMaterialInventory(Path<? extends MaterialInventory> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMaterialInventory(PathMetadata metadata) {
        super(MaterialInventory.class, metadata);
    }

}

