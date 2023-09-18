package com.deligence.deli.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QEmployee is a Querydsl query type for Employee
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QEmployee extends EntityPathBase<Employee> {

    private static final long serialVersionUID = 1991054223L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QEmployee employee = new QEmployee("employee");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final BooleanPath del = createBoolean("del");

    public final StringPath employeeEmail = createString("employeeEmail");

    public final DatePath<java.time.LocalDate> employeeEntranceDate = createDate("employeeEntranceDate", java.time.LocalDate.class);

    public final StringPath employeeId = createString("employeeId");

    public final StringPath employeeName = createString("employeeName");

    public final NumberPath<Integer> employeeNo = createNumber("employeeNo", Integer.class);

    public final StringPath employeePhone = createString("employeePhone");

    public final StringPath employeePw = createString("employeePw");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final QPosition position;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final SetPath<EmployeeRole, EnumPath<EmployeeRole>> roleSet = this.<EmployeeRole, EnumPath<EmployeeRole>>createSet("roleSet", EmployeeRole.class, EnumPath.class, PathInits.DIRECT2);

    public final BooleanPath social = createBoolean("social");

    public QEmployee(String variable) {
        this(Employee.class, forVariable(variable), INITS);
    }

    public QEmployee(Path<? extends Employee> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QEmployee(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QEmployee(PathMetadata metadata, PathInits inits) {
        this(Employee.class, metadata, inits);
    }

    public QEmployee(Class<? extends Employee> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.position = inits.isInitialized("position") ? new QPosition(forProperty("position")) : null;
    }

}

