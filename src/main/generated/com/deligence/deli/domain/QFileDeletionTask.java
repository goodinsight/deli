package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QFileDeletionTask is a Querydsl query type for FileDeletionTask
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QFileDeletionTask extends EntityPathBase<FileDeletionTask> {

    private static final long serialVersionUID = 379560432L;

    public static final QFileDeletionTask fileDeletionTask = new QFileDeletionTask("fileDeletionTask");

    public final NumberPath<Integer> attempts = createNumber("attempts", Integer.class);

    public final StringPath fileName = createString("fileName");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final DateTimePath<java.time.LocalDateTime> nextAttempt = createDateTime("nextAttempt", java.time.LocalDateTime.class);

    public QFileDeletionTask(String variable) {
        super(FileDeletionTask.class, forVariable(variable));
    }

    public QFileDeletionTask(Path<? extends FileDeletionTask> path) {
        super(path.getType(), path.getMetadata());
    }

    public QFileDeletionTask(PathMetadata metadata) {
        super(FileDeletionTask.class, metadata);
    }

}
