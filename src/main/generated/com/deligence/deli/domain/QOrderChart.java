package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOrderChart is a Querydsl query type for OrderChart
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrderChart extends EntityPathBase<OrderChart> {

    private static final long serialVersionUID = -1590150703L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOrderChart orderChart = new QOrderChart("orderChart");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QDocumentFile documentFile;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final QOrder order;

    public final NumberPath<Integer> orderChartNo = createNumber("orderChartNo", Integer.class);

    public final StringPath orderCode = createString("orderCode");

    public final NumberPath<Integer> orderQuantity = createNumber("orderQuantity", Integer.class);

    public final DatePath<java.time.LocalDate> orderSchedule = createDate("orderSchedule", java.time.LocalDate.class);

    public final StringPath orderState = createString("orderState");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QOrderChart(String variable) {
        this(OrderChart.class, forVariable(variable), INITS);
    }

    public QOrderChart(Path<? extends OrderChart> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOrderChart(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOrderChart(PathMetadata metadata, PathInits inits) {
        this(OrderChart.class, metadata, inits);
    }

    public QOrderChart(Class<? extends OrderChart> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
        this.order = inits.isInitialized("order") ? new QOrder(forProperty("order"), inits.get("order")) : null;
    }

}

