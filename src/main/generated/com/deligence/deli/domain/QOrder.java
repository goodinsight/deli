package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOrder is a Querydsl query type for Order
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrder extends EntityPathBase<Order> {

    private static final long serialVersionUID = 829189645L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOrder order = new QOrder("order1");

    public final QEmployee employee;

    public final StringPath employee_name = createString("employee_name");

    public final StringPath material_name = createString("material_name");

    public final StringPath order_code = createString("order_code");

    public final DatePath<java.time.LocalDate> order_date = createDate("order_date", java.time.LocalDate.class);

    public final DatePath<java.time.LocalDate> order_delivery_date = createDate("order_delivery_date", java.time.LocalDate.class);

    public final StringPath order_etc = createString("order_etc");

    public final NumberPath<Long> order_no = createNumber("order_no", Long.class);

    public final NumberPath<Integer> order_quantity = createNumber("order_quantity", Integer.class);

    public final StringPath order_state = createString("order_state");

    public QOrder(String variable) {
        this(Order.class, forVariable(variable), INITS);
    }

    public QOrder(Path<? extends Order> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOrder(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOrder(PathMetadata metadata, PathInits inits) {
        this(Order.class, metadata, inits);
    }

    public QOrder(Class<? extends Order> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee")) : null;
    }

}

