package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProducts is a Querydsl query type for Products
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProducts extends EntityPathBase<Products> {

    private static final long serialVersionUID = -206176699L;

    public static final QProducts products = new QProducts("products");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final SetPath<ProductImage, QProductImage> imageSet = this.<ProductImage, QProductImage>createSet("imageSet", ProductImage.class, QProductImage.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath productCode = createString("productCode");

    public final StringPath productContent = createString("productContent");

    public final StringPath productName = createString("productName");

    public final NumberPath<Integer> productNo = createNumber("productNo", Integer.class);

    public final StringPath productType = createString("productType");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QProducts(String variable) {
        super(Products.class, forVariable(variable));
    }

    public QProducts(Path<? extends Products> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProducts(PathMetadata metadata) {
        super(Products.class, metadata);
    }

}

