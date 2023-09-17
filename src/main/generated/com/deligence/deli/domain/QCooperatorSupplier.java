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

    public final NumberPath<Integer> corporate_registration_no = createNumber("corporate_registration_no", Integer.class);

    public final StringPath supplier_address = createString("supplier_address");

    public final StringPath supplier_ceo = createString("supplier_ceo");

    public final StringPath supplier_email = createString("supplier_email");

    public final StringPath supplier_etc = createString("supplier_etc");

    public final StringPath supplier_name = createString("supplier_name");

    public final NumberPath<Integer> supplier_no = createNumber("supplier_no", Integer.class);

    public final StringPath supplier_phone = createString("supplier_phone");

    public final StringPath supplier_status = createString("supplier_status");

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

