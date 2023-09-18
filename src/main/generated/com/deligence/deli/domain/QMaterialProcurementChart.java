package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialProcurementChart is a Querydsl query type for MaterialProcurementChart
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialProcurementChart extends EntityPathBase<MaterialProcurementChart> {

    private static final long serialVersionUID = -819632842L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialProcurementChart materialProcurementChart = new QMaterialProcurementChart("materialProcurementChart");

    public final QDocumentFile documentFile;

    public final StringPath incomingInspection = createString("incomingInspection");

    public final StringPath materialCode = createString("materialCode");

    public final NumberPath<Integer> materialProcurementChartNo = createNumber("materialProcurementChartNo", Integer.class);

    public final QMaterialProcurementContract materialProcurementContract;

    public final NumberPath<Integer> materialRequirementsCount = createNumber("materialRequirementsCount", Integer.class);

    public final DatePath<java.time.LocalDate> procurementIncomingDate = createDate("procurementIncomingDate", java.time.LocalDate.class);

    public QMaterialProcurementChart(String variable) {
        this(MaterialProcurementChart.class, forVariable(variable), INITS);
    }

    public QMaterialProcurementChart(Path<? extends MaterialProcurementChart> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialProcurementChart(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialProcurementChart(PathMetadata metadata, PathInits inits) {
        this(MaterialProcurementChart.class, metadata, inits);
    }

    public QMaterialProcurementChart(Class<? extends MaterialProcurementChart> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
        this.materialProcurementContract = inits.isInitialized("materialProcurementContract") ? new QMaterialProcurementContract(forProperty("materialProcurementContract"), inits.get("materialProcurementContract")) : null;
    }

}

