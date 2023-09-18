package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialProcurementPlanning is a Querydsl query type for MaterialProcurementPlanning
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialProcurementPlanning extends EntityPathBase<MaterialProcurementPlanning> {

    private static final long serialVersionUID = -359941371L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialProcurementPlanning materialProcurementPlanning = new QMaterialProcurementPlanning("materialProcurementPlanning");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QEmployee employee;

    public final StringPath materialCode = createString("materialCode");

    public final StringPath materialName = createString("materialName");

    public final NumberPath<Integer> materialProcurementPlanNo = createNumber("materialProcurementPlanNo", Integer.class);

    public final StringPath materialProcurementState = createString("materialProcurementState");

    public final NumberPath<Integer> materialRequirementsCount = createNumber("materialRequirementsCount", Integer.class);

    public final QMaterials materials;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final DatePath<java.time.LocalDate> procurementDeliveryDate = createDate("procurementDeliveryDate", java.time.LocalDate.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QMaterialProcurementPlanning(String variable) {
        this(MaterialProcurementPlanning.class, forVariable(variable), INITS);
    }

    public QMaterialProcurementPlanning(Path<? extends MaterialProcurementPlanning> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialProcurementPlanning(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialProcurementPlanning(PathMetadata metadata, PathInits inits) {
        this(MaterialProcurementPlanning.class, metadata, inits);
    }

    public QMaterialProcurementPlanning(Class<? extends MaterialProcurementPlanning> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
    }

}

