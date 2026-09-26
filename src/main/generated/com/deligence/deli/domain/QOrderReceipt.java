package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOrderReceipt is a Querydsl query type for OrderReceipt
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrderReceipt extends EntityPathBase<OrderReceipt> {

    private static final long serialVersionUID = 1216750443L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOrderReceipt orderReceipt = new QOrderReceipt("orderReceipt");

    public final NumberPath<Long> amount = createNumber("amount", Long.class);

    public final QMaterialInventory inventory;

    public final QOrder order;

    public final NumberPath<Integer> orderNo = createNumber("orderNo", Integer.class);

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> receivedAt = createDateTime("receivedAt", java.time.LocalDateTime.class);

    public final BooleanPath reversed = createBoolean("reversed");

    public final DateTimePath<java.time.LocalDateTime> reversedAt = createDateTime("reversedAt", java.time.LocalDateTime.class);

    public QOrderReceipt(String variable) {
        this(OrderReceipt.class, forVariable(variable), INITS);
    }

    public QOrderReceipt(Path<? extends OrderReceipt> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOrderReceipt(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOrderReceipt(PathMetadata metadata, PathInits inits) {
        this(OrderReceipt.class, metadata, inits);
    }

    public QOrderReceipt(Class<? extends OrderReceipt> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inventory = inits.isInitialized("inventory") ? new QMaterialInventory(forProperty("inventory"), inits.get("inventory")) : null;
        this.order = inits.isInitialized("order") ? new QOrder(forProperty("order"), inits.get("order")) : null;
    }

}
