package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialInventory is a Querydsl query type for MaterialInventory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialInventory extends EntityPathBase<MaterialInventory> {

    private static final long serialVersionUID = 2064937012L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialInventory materialInventory = new QMaterialInventory("materialInventory");

    public final QDocumentFile documentFile;

    public final NumberPath<Integer> materialIncomingQuantity = createNumber("materialIncomingQuantity", Integer.class);

    public final NumberPath<Integer> materialInventoryNo = createNumber("materialInventoryNo", Integer.class);

    public final NumberPath<Integer> materialOutgoingQuantity = createNumber("materialOutgoingQuantity", Integer.class);

    public final QMaterials materials;

    public final NumberPath<Integer> materialStock = createNumber("materialStock", Integer.class);

    public final NumberPath<Long> materialSupplyPrice = createNumber("materialSupplyPrice", Long.class);

    public final NumberPath<Long> materialTotalInventoryPayments = createNumber("materialTotalInventoryPayments", Long.class);

    public final QOrder order;

    public QMaterialInventory(String variable) {
        this(MaterialInventory.class, forVariable(variable), INITS);
    }

    public QMaterialInventory(Path<? extends MaterialInventory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialInventory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialInventory(PathMetadata metadata, PathInits inits) {
        this(MaterialInventory.class, metadata, inits);
    }

    public QMaterialInventory(Class<? extends MaterialInventory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
        this.order = inits.isInitialized("order") ? new QOrder(forProperty("order"), inits.get("order")) : null;
    }

}

