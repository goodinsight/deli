package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialRequirementsList is a Querydsl query type for MaterialRequirementsList
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialRequirementsList extends EntityPathBase<MaterialRequirementsList> {

    private static final long serialVersionUID = 828034934L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialRequirementsList materialRequirementsList = new QMaterialRequirementsList("materialRequirementsList");

    public final NumberPath<Integer> materialRequirementsListNo = createNumber("materialRequirementsListNo", Integer.class);

    public final QMaterials materials;

    public final QProducts products;

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public QMaterialRequirementsList(String variable) {
        this(MaterialRequirementsList.class, forVariable(variable), INITS);
    }

    public QMaterialRequirementsList(Path<? extends MaterialRequirementsList> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialRequirementsList(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialRequirementsList(PathMetadata metadata, PathInits inits) {
        this(MaterialRequirementsList.class, metadata, inits);
    }

    public QMaterialRequirementsList(Class<? extends MaterialRequirementsList> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
        this.products = inits.isInitialized("products") ? new QProducts(forProperty("products")) : null;
    }

}

