package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProductInOutHistory is a Querydsl query type for ProductInOutHistory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProductInOutHistory extends EntityPathBase<ProductInOutHistory> {

    private static final long serialVersionUID = -139331719L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProductInOutHistory productInOutHistory = new QProductInOutHistory("productInOutHistory");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QEmployee employee;

    public final StringPath inOutSeparator = createString("inOutSeparator");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final NumberPath<Integer> productHistoryNo = createNumber("productHistoryNo", Integer.class);

    public final QProductInventroy productInventroy;

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QProductInOutHistory(String variable) {
        this(ProductInOutHistory.class, forVariable(variable), INITS);
    }

    public QProductInOutHistory(Path<? extends ProductInOutHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProductInOutHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProductInOutHistory(PathMetadata metadata, PathInits inits) {
        this(ProductInOutHistory.class, metadata, inits);
    }

    public QProductInOutHistory(Class<? extends ProductInOutHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.productInventroy = inits.isInitialized("productInventroy") ? new QProductInventroy(forProperty("productInventroy"), inits.get("productInventroy")) : null;
    }

}

