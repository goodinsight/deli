package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMaterialProcurementContract is a Querydsl query type for MaterialProcurementContract
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMaterialProcurementContract extends EntityPathBase<MaterialProcurementContract> {

    private static final long serialVersionUID = 1498703034L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMaterialProcurementContract materialProcurementContract = new QMaterialProcurementContract("materialProcurementContract");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QCooperatorSupplier cooperatorSupplier;

    public final QEmployee employee;

    public final StringPath material_code = createString("material_code");

    public final StringPath material_name = createString("material_name");

    public final StringPath material_procurement_contract_code = createString("material_procurement_contract_code");

    public final DatePath<java.time.LocalDate> material_procurement_contract_date = createDate("material_procurement_contract_date", java.time.LocalDate.class);

    public final NumberPath<Integer> material_procurement_contract_no = createNumber("material_procurement_contract_no", Integer.class);

    public final StringPath material_procurement_contract_state = createString("material_procurement_contract_state");

    public final NumberPath<Long> material_supply_price = createNumber("material_supply_price", Long.class);

    public final QMaterials materials;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final StringPath supplier_name = createString("supplier_name");

    public final StringPath supplier_status = createString("supplier_status");

    public QMaterialProcurementContract(String variable) {
        this(MaterialProcurementContract.class, forVariable(variable), INITS);
    }

    public QMaterialProcurementContract(Path<? extends MaterialProcurementContract> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMaterialProcurementContract(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMaterialProcurementContract(PathMetadata metadata, PathInits inits) {
        this(MaterialProcurementContract.class, metadata, inits);
    }

    public QMaterialProcurementContract(Class<? extends MaterialProcurementContract> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cooperatorSupplier = inits.isInitialized("cooperatorSupplier") ? new QCooperatorSupplier(forProperty("cooperatorSupplier")) : null;
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee")) : null;
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
    }

}

