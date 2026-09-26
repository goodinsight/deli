package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProductionPlanning is a Querydsl query type for ProductionPlanning
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProductionPlanning extends EntityPathBase<ProductionPlanning> {

    private static final long serialVersionUID = -468960553L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProductionPlanning productionPlanning = new QProductionPlanning("productionPlanning");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath clientName = createString("clientName");

    public final StringPath clientStatus = createString("clientStatus");

    public final StringPath detailExplaination = createString("detailExplaination");

    public final QEmployee employee;

    public final StringPath employeeName = createString("employeeName");

    public final StringPath employeeName2 = createString("employeeName2");

    public final QMaterialRequirementsList materialRequirementsList;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath productCode = createString("productCode");

    public final QProductContract productContract;

    public final DatePath<java.time.LocalDate> productDeliveryDate = createDate("productDeliveryDate", java.time.LocalDate.class);

    public final DatePath<java.time.LocalDate> productionDeliveryDate = createDate("productionDeliveryDate", java.time.LocalDate.class);

    public final StringPath productionPlanCode = createString("productionPlanCode");

    public final NumberPath<Integer> productionPlanNo = createNumber("productionPlanNo", Integer.class);

    public final NumberPath<Integer> productionQuantity = createNumber("productionQuantity", Integer.class);

    public final NumberPath<Integer> productionRequirementsDate = createNumber("productionRequirementsDate", Integer.class);

    public final StringPath productionRequirementsProcess = createString("productionRequirementsProcess");

    public final StringPath productionState = createString("productionState");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QProductionPlanning(String variable) {
        this(ProductionPlanning.class, forVariable(variable), INITS);
    }

    public QProductionPlanning(Path<? extends ProductionPlanning> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProductionPlanning(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProductionPlanning(PathMetadata metadata, PathInits inits) {
        this(ProductionPlanning.class, metadata, inits);
    }

    public QProductionPlanning(Class<? extends ProductionPlanning> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materialRequirementsList = inits.isInitialized("materialRequirementsList") ? new QMaterialRequirementsList(forProperty("materialRequirementsList"), inits.get("materialRequirementsList")) : null;
        this.productContract = inits.isInitialized("productContract") ? new QProductContract(forProperty("productContract"), inits.get("productContract")) : null;
    }

}

