package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QPosition is a Querydsl query type for Position
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QPosition extends BeanPath<Position> {

    private static final long serialVersionUID = 1545389578L;

    public static final QPosition position = new QPosition("position1");

    public final StringPath position_name = createString("position_name");

    public QPosition(String variable) {
        super(Position.class, forVariable(variable));
    }

    public QPosition(Path<? extends Position> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPosition(PathMetadata metadata) {
        super(Position.class, metadata);
    }

}

