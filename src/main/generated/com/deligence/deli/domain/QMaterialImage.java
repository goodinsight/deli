package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialImage is a Querydsl query type for MaterialImage
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialImage extends EntityPathBase<MaterialImage> {

    private static final long serialVersionUID = 1177300019L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialImage materialImage = new QMaterialImage("materialImage");

    public final StringPath materialImgName = createString("materialImgName");

    public final NumberPath<Integer> materialImgNo = createNumber("materialImgNo", Integer.class);

    public final StringPath materialImgPath = createString("materialImgPath");

    public final QMaterials materials;

    public final StringPath materialUuid = createString("materialUuid");

    public QMaterialImage(String variable) {
        this(MaterialImage.class, forVariable(variable), INITS);
    }

    public QMaterialImage(Path<? extends MaterialImage> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialImage(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialImage(PathMetadata metadata, PathInits inits) {
        this(MaterialImage.class, metadata, inits);
    }

    public QMaterialImage(Class<? extends MaterialImage> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
    }

}

