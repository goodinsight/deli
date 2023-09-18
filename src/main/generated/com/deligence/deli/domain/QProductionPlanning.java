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

    public final StringPath client_name = createString("client_name");

    public final StringPath client_status = createString("client_status");

    public final StringPath detail_explaination = createString("detail_explaination");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath product_code = createString("product_code");

    public final DatePath<java.time.LocalDate> production_delivery_date = createDate("production_delivery_date", java.time.LocalDate.class);

    public final StringPath production_plan_code = createString("production_plan_code");

    public final NumberPath<Integer> production_plan_no = createNumber("production_plan_no", Integer.class);

    public final NumberPath<Integer> production_quantity = createNumber("production_quantity", Integer.class);

    public final NumberPath<Integer> production_requirements_date = createNumber("production_requirements_date", Integer.class);

    public final StringPath production_requirements_process = createString("production_requirements_process");

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

