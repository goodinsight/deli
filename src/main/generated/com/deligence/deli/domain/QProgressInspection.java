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

    public final QOrder order;

    public final DatePath<java.time.LocalDate> progress_inspection_date = createDate("progress_inspection_date", java.time.LocalDate.class);

    public final StringPath progress_inspection_etc = createString("progress_inspection_etc");

    public final NumberPath<Long> progress_inspection_no = createNumber("progress_inspection_no", Long.class);

    public final StringPath progress_inspection_state = createString("progress_inspection_state");

    public final NumberPath<Integer> progress_inspection_times = createNumber("progress_inspection_times", Integer.class);

    public final NumberPath<Float> rate_of_progress = createNumber("rate_of_progress", Float.class);

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
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee")) : null;
        this.order = inits.isInitialized("order") ? new QOrder(forProperty("order"), inits.get("order")) : null;
    }

}

