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

    public final StringPath employeeName = createString("employeeName");

    public final StringPath materialName = createString("materialName");

    public final QMaterialProcurementContract materialProcurementContract;

    public final QMaterialProcurementPlanning materialProcurementPlanning;

    public final StringPath orderCode = createString("orderCode");

    public final DatePath<java.time.LocalDate> orderDate = createDate("orderDate", java.time.LocalDate.class);

    public final DatePath<java.time.LocalDate> orderDeliveryDate = createDate("orderDeliveryDate", java.time.LocalDate.class);

    public final StringPath orderEtc = createString("orderEtc");

    public final NumberPath<Integer> orderNo = createNumber("orderNo", Integer.class);

    public final NumberPath<Integer> orderQuantity = createNumber("orderQuantity", Integer.class);

    public final StringPath orderState = createString("orderState");

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
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materialProcurementContract = inits.isInitialized("materialProcurementContract") ? new QMaterialProcurementContract(forProperty("materialProcurementContract"), inits.get("materialProcurementContract")) : null;
        this.materialProcurementPlanning = inits.isInitialized("materialProcurementPlanning") ? new QMaterialProcurementPlanning(forProperty("materialProcurementPlanning"), inits.get("materialProcurementPlanning")) : null;
    }

}

