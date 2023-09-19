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

    public final QDocumentFile documentFile;

    public final QEmployee employee;

    public final StringPath materialCode = createString("materialCode");

    public final StringPath materialName = createString("materialName");

    public final StringPath materialProcurementContractCode = createString("materialProcurementContractCode");

    public final DatePath<java.time.LocalDate> materialProcurementContractDate = createDate("materialProcurementContractDate", java.time.LocalDate.class);

    public final StringPath materialProcurementContractEtc = createString("materialProcurementContractEtc");

    public final NumberPath<Integer> materialProcurementContractNo = createNumber("materialProcurementContractNo", Integer.class);

    public final StringPath materialProcurementContractState = createString("materialProcurementContractState");

    public final QMaterials materials;

    public final NumberPath<Long> materialSupplyPrice = createNumber("materialSupplyPrice", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final StringPath supplierName = createString("supplierName");

    public final StringPath supplierStatus = createString("supplierStatus");

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
        this.cooperatorSupplier = inits.isInitialized("cooperatorSupplier") ? new QCooperatorSupplier(forProperty("cooperatorSupplier"), inits.get("cooperatorSupplier")) : null;
        this.documentFile = inits.isInitialized("documentFile") ? new QDocumentFile(forProperty("documentFile")) : null;
        this.employee = inits.isInitialized("employee") ? new QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.materials = inits.isInitialized("materials") ? new QMaterials(forProperty("materials")) : null;
    }

}

