package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCooperatorClient is a Querydsl query type for CooperatorClient
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCooperatorClient extends EntityPathBase<CooperatorClient> {

    private static final long serialVersionUID = -1171154724L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCooperatorClient cooperatorClient = new QCooperatorClient("cooperatorClient");

    public final StringPath clientAddress = createString("clientAddress");

    public final StringPath clientCeo = createString("clientCeo");

    public final StringPath clientEmail = createString("clientEmail");

    public final StringPath clientEtc = createString("clientEtc");

    public final StringPath clientName = createString("clientName");

    public final NumberPath<Integer> clientNo = createNumber("clientNo", Integer.class);

    public final StringPath clientPhone = createString("clientPhone");

    public final StringPath clientStatus = createString("clientStatus");

    public final NumberPath<Integer> corporateRegistrationNo = createNumber("corporateRegistrationNo", Integer.class);

    public final QDocumentFile documentFile;

    public QCooperatorClient(String variable) {
        this(CooperatorClient.class, forVariable(variable), INITS);
    }

    public QCooperatorClient(Path<? extends CooperatorClient> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCooperatorClient(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCooperatorClient(PathMetadata metadata, PathInits inits) {
        this(CooperatorClient.class, metadata, inits);
    }

    public QCooperatorClient(Class<? extends CooperatorClient> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
    }

}

