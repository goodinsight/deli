package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialInOutHistory is a Querydsl query type for MaterialInOutHistory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialInOutHistory extends EntityPathBase<MaterialInOutHistory> {

    private static final long serialVersionUID = 1242116755L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialInOutHistory materialInOutHistory = new QMaterialInOutHistory("materialInOutHistory");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QEmployee employee;

    public final StringPath inOutSeparator = createString("inOutSeparator");

    public final NumberPath<Integer> materialHistoryNo = createNumber("materialHistoryNo", Integer.class);

    public final QMaterialInventory materialInventory;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QMaterialInOutHistory(String variable) {
        this(MaterialInOutHistory.class, forVariable(variable), INITS);
    }

    public QMaterialInOutHistory(Path<? extends MaterialInOutHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialInOutHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialInOutHistory(PathMetadata metadata, PathInits inits) {
        this(MaterialInOutHistory.class, metadata, inits);
    }

    public QMaterialInOutHistory(Class<? extends MaterialInOutHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materialInventory = inits.isInitialized("materialInventory") ? new QMaterialInventory(forProperty("materialInventory"), inits.get("materialInventory")) : null;
    }

}

