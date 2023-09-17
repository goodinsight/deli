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

    public final StringPath material_code = createString("material_code");

    public final StringPath material_name = createString("material_name");

    public final NumberPath<Integer> material_procurement_plan_no = createNumber("material_procurement_plan_no", Integer.class);

    public final StringPath material_procurement_state = createString("material_procurement_state");

    public final NumberPath<Integer> material_requirements_count = createNumber("material_requirements_count", Integer.class);

    public final QMaterials materials;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final DatePath<java.time.LocalDate> procurement_delivery_date = createDate("procurement_delivery_date", java.time.LocalDate.class);

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
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee")) : null;
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
    }

}

