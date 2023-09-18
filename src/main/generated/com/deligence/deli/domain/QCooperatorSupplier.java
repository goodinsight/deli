package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCooperatorSupplier is a Querydsl query type for CooperatorSupplier
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCooperatorSupplier extends EntityPathBase<CooperatorSupplier> {

    private static final long serialVersionUID = 1524997789L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCooperatorSupplier cooperatorSupplier = new QCooperatorSupplier("cooperatorSupplier");

    public final NumberPath<Integer> corporateRegistrationNo = createNumber("corporateRegistrationNo", Integer.class);

    public final QDocumentFile documentFile;

    public final StringPath supplierAddress = createString("supplierAddress");

    public final StringPath supplierCeo = createString("supplierCeo");

    public final StringPath supplierEmail = createString("supplierEmail");

    public final StringPath supplierEtc = createString("supplierEtc");

    public final StringPath supplierName = createString("supplierName");

    public final NumberPath<Integer> supplierNo = createNumber("supplierNo", Integer.class);

    public final StringPath supplierPhone = createString("supplierPhone");

    public final StringPath supplierStatus = createString("supplierStatus");

    public QCooperatorSupplier(String variable) {
        this(CooperatorSupplier.class, forVariable(variable), INITS);
    }

    public QCooperatorSupplier(Path<? extends CooperatorSupplier> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCooperatorSupplier(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCooperatorSupplier(PathMetadata metadata, PathInits inits) {
        this(CooperatorSupplier.class, metadata, inits);
    }

    public QCooperatorSupplier(Class<? extends CooperatorSupplier> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
    }

}

