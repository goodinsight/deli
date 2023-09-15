package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QMaterials is a Querydsl query type for Materials
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterials extends EntityPathBase<Materials> {

    private static final long serialVersionUID = -363548821L;

    public static final QMaterials materials = new QMaterials("materials");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath material_code = createString("material_code");

    public final StringPath material_explaination = createString("material_explaination");

    public final StringPath material_name = createString("material_name");

    public final NumberPath<Integer> material_no = createNumber("material_no", Integer.class);

    public final NumberPath<Long> material_supply_price = createNumber("material_supply_price", Long.class);

    public final StringPath material_type = createString("material_type");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QMaterials(String variable) {
        super(Materials.class, forVariable(variable));
    }

    public QMaterials(Path<? extends Materials> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMaterials(PathMetadata metadata) {
        super(Materials.class, metadata);
    }

}

