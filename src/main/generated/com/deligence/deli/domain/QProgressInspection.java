package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProgressInspection is a Querydsl query type for ProgressInspection
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProgressInspection extends EntityPathBase<ProgressInspection> {

    private static final long serialVersionUID = -1124147422L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProgressInspection progressInspection = new QProgressInspection("progressInspection");

    public final QEmployee employee;

    public final StringPath employeeName = createString("employeeName");

    public final QOrder order;

    public final DatePath<java.time.LocalDate> progressInspectionDate = createDate("progressInspectionDate", java.time.LocalDate.class);

    public final StringPath progressInspectionEtc = createString("progressInspectionEtc");

    public final NumberPath<Integer> progressInspectionNo = createNumber("progressInspectionNo", Integer.class);

    public final StringPath progressInspectionState = createString("progressInspectionState");

    public final NumberPath<Integer> progressInspectionTimes = createNumber("progressInspectionTimes", Integer.class);

    public final NumberPath<Float> rateOfProgress = createNumber("rateOfProgress", Float.class);

    public QProgressInspection(String variable) {
        this(ProgressInspection.class, forVariable(variable), INITS);
    }

    public QProgressInspection(Path<? extends ProgressInspection> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProgressInspection(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProgressInspection(PathMetadata metadata, PathInits inits) {
        this(ProgressInspection.class, metadata, inits);
    }

    public QProgressInspection(Class<? extends ProgressInspection> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.order = inits.isInitialized("order") ? new QOrder(forProperty("order"), inits.get("order")) : null;
    }

}

