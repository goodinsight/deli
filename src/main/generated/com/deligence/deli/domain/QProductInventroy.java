package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProductInventroy is a Querydsl query type for ProductInventroy
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProductInventroy extends EntityPathBase<ProductInventroy> {

    private static final long serialVersionUID = -1349627916L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProductInventroy productInventroy = new QProductInventroy("productInventroy");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QDocumentFile documentFile;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final NumberPath<Integer> productIncomingQuantity = createNumber("productIncomingQuantity", Integer.class);

    public final QProductInOutHistory productInOutHistory;

    public final NumberPath<Integer> productInventoryNo = createNumber("productInventoryNo", Integer.class);

    public final NumberPath<Integer> productOutcomingQuantity = createNumber("productOutcomingQuantity", Integer.class);

    public final QProducts products;

    public final NumberPath<Integer> productStock = createNumber("productStock", Integer.class);

    public final NumberPath<Integer> productSupplyPrice = createNumber("productSupplyPrice", Integer.class);

    public final NumberPath<Long> productTotalInventoryPayments = createNumber("productTotalInventoryPayments", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QProductInventroy(String variable) {
        this(ProductInventroy.class, forVariable(variable), INITS);
    }

    public QProductInventroy(Path<? extends ProductInventroy> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProductInventroy(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProductInventroy(PathMetadata metadata, PathInits inits) {
        this(ProductInventroy.class, metadata, inits);
    }

    public QProductInventroy(Class<? extends ProductInventroy> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
        this.productInOutHistory = inits.isInitialized("productInOutHistory") ? new QProductInOutHistory(forProperty("productInOutHistory"), inits.get("productInOutHistory")) : null;
        this.products = inits.isInitialized("products") ? new QProducts(forProperty("products")) : null;
    }

}

