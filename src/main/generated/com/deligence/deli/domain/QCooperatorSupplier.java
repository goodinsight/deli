package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCooperatorSupplier is a Querydsl query type for CooperatorSupplier
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCooperatorSupplier extends EntityPathBase<CooperatorSupplier> {

    private static final long serialVersionUID = 1524997789L;

    public static final QCooperatorSupplier cooperatorSupplier = new QCooperatorSupplier("cooperatorSupplier");

    public final NumberPath<Integer> corporateRegistrationNo = createNumber("corporateRegistrationNo", Integer.class);

    public final StringPath supplierAddress = createString("supplierAddress");

    public final StringPath supplierCeo = createString("supplierCeo");

    public final StringPath supplierEmail = createString("supplierEmail");

    public final StringPath supplierEtc = createString("supplierEtc");

    public final StringPath supplierName = createString("supplierName");

    public final NumberPath<Integer> supplierNo = createNumber("supplierNo", Integer.class);

    public final StringPath supplierPhone = createString("supplierPhone");

    public final StringPath supplierStatus = createString("supplierStatus");

    public QCooperatorSupplier(String variable) {
        super(CooperatorSupplier.class, forVariable(variable));
    }

    public QCooperatorSupplier(Path<? extends CooperatorSupplier> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCooperatorSupplier(PathMetadata metadata) {
        super(CooperatorSupplier.class, metadata);
    }

}

