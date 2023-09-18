package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDocumentFile is a Querydsl query type for DocumentFile
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDocumentFile extends EntityPathBase<DocumentFile> {

    private static final long serialVersionUID = 2065762712L;

    public static final QDocumentFile documentFile = new QDocumentFile("documentFile");

    public final StringPath documentFileName = createString("documentFileName");

    public final NumberPath<Integer> documentFileNo = createNumber("documentFileNo", Integer.class);

    public final StringPath documentFilePath = createString("documentFilePath");

    public final StringPath documentFileType = createString("documentFileType");

    public final StringPath documentFileUuid = createString("documentFileUuid");

    public QDocumentFile(String variable) {
        super(DocumentFile.class, forVariable(variable));
    }

    public QDocumentFile(Path<? extends DocumentFile> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDocumentFile(PathMetadata metadata) {
        super(DocumentFile.class, metadata);
    }

}

