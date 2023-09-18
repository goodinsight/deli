package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMeterialInOutHistory is a Querydsl query type for MeterialInOutHistory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMeterialInOutHistory extends EntityPathBase<MeterialInOutHistory> {

    private static final long serialVersionUID = -2135770729L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMeterialInOutHistory meterialInOutHistory = new QMeterialInOutHistory("meterialInOutHistory");

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

    public QMeterialInOutHistory(String variable) {
        this(MeterialInOutHistory.class, forVariable(variable), INITS);
    }

    public QMeterialInOutHistory(Path<? extends MeterialInOutHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMeterialInOutHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMeterialInOutHistory(PathMetadata metadata, PathInits inits) {
        this(MeterialInOutHistory.class, metadata, inits);
    }

    public QMeterialInOutHistory(Class<? extends MeterialInOutHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materialInventory = inits.isInitialized("materialInventory") ? new QMaterialInventory(forProperty("materialInventory"), inits.get("materialInventory")) : null;
    }

}

