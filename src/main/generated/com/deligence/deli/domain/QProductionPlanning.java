package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QProductionPlanning is a Querydsl query type for ProductionPlanning
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProductionPlanning extends EntityPathBase<ProductionPlanning> {

    private static final long serialVersionUID = -468960553L;

    public static final QProductionPlanning productionPlanning = new QProductionPlanning("productionPlanning");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath clientName = createString("clientName");

    public final StringPath clientStatus = createString("clientStatus");

    public final StringPath detailExplaination = createString("detailExplaination");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath productCode = createString("productCode");

    public final DatePath<java.time.LocalDate> productionDeliveryDate = createDate("productionDeliveryDate", java.time.LocalDate.class);

    public final StringPath productionPlanCode = createString("productionPlanCode");

    public final NumberPath<Integer> productionPlanNo = createNumber("productionPlanNo", Integer.class);

    public final NumberPath<Integer> productionQuantity = createNumber("productionQuantity", Integer.class);

    public final NumberPath<Integer> productionRequirementsDate = createNumber("productionRequirementsDate", Integer.class);

    public final StringPath productionRequirementsProcess = createString("productionRequirementsProcess");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QProductionPlanning(String variable) {
        super(ProductionPlanning.class, forVariable(variable));
    }

    public QProductionPlanning(Path<? extends ProductionPlanning> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProductionPlanning(PathMetadata metadata) {
        super(ProductionPlanning.class, metadata);
    }

}

