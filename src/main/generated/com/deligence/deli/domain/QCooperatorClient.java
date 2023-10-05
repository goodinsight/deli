package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCooperatorClient is a Querydsl query type for CooperatorClient
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCooperatorClient extends EntityPathBase<CooperatorClient> {

    private static final long serialVersionUID = -1171154724L;

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

    public QCooperatorClient(String variable) {
        super(CooperatorClient.class, forVariable(variable));
    }

    public QCooperatorClient(Path<? extends CooperatorClient> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCooperatorClient(PathMetadata metadata) {
        super(CooperatorClient.class, metadata);
    }

}

