package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProductContract is a Querydsl query type for ProductContract
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProductContract extends EntityPathBase<ProductContract> {

    private static final long serialVersionUID = 147433248L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProductContract productContract = new QProductContract("productContract");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath clientName = createString("clientName");

    public final StringPath clientStatus = createString("clientStatus");

    public final QCooperatorClient cooperatorClient;

    public final QDocumentFile documentFile;

    public final QEmployee employee;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath productCode = createString("productCode");

    public final NumberPath<Integer> productContractNo = createNumber("productContractNo", Integer.class);

    public final DatePath<java.time.LocalDate> productDeliveryDate = createDate("productDeliveryDate", java.time.LocalDate.class);

    public final NumberPath<Integer> productQuantity = createNumber("productQuantity", Integer.class);

    public final StringPath productQuotation = createString("productQuotation");

    public final QProducts products;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QProductContract(String variable) {
        this(ProductContract.class, forVariable(variable), INITS);
    }

    public QProductContract(Path<? extends ProductContract> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProductContract(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProductContract(PathMetadata metadata, PathInits inits) {
        this(ProductContract.class, metadata, inits);
    }

    public QProductContract(Class<? extends ProductContract> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cooperatorClient = inits.isInitialized("cooperatorClient") ? new QCooperatorClient(forProperty("cooperatorClient"), inits.get("cooperatorClient")) : null;
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.products = inits.isInitialized("products") ? new QProducts(forProperty("products")) : null;
    }

}

