package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterials is a Querydsl query type for Materials
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterials extends EntityPathBase<Materials> {

    private static final long serialVersionUID = -363548821L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterials materials = new QMaterials("materials");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QEmployee employee;

    public final SetPath<MaterialImage, QMaterialImage> imageSet = this.<MaterialImage, QMaterialImage>createSet("imageSet", MaterialImage.class, QMaterialImage.class, PathInits.DIRECT2);

    public final StringPath materialCode = createString("materialCode");

    public final StringPath materialExplaination = createString("materialExplaination");

    public final QMaterialInventory materialInventory;

    public final StringPath materialName = createString("materialName");

    public final NumberPath<Integer> materialNo = createNumber("materialNo", Integer.class);

    public final NumberPath<Long> materialSupplyPrice = createNumber("materialSupplyPrice", Long.class);

    public final StringPath materialType = createString("materialType");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QMaterials(String variable) {
        this(Materials.class, forVariable(variable), INITS);
    }

    public QMaterials(Path<? extends Materials> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterials(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterials(PathMetadata metadata, PathInits inits) {
        this(Materials.class, metadata, inits);
    }

    public QMaterials(Class<? extends Materials> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materialInventory = inits.isInitialized("materialInventory") ? new QMaterialInventory(forProperty("materialInventory"), inits.get("materialInventory")) : null;
    }

}

