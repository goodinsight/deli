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

    public static final QEmployee employee = new QEmployee("employee");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final BooleanPath del = createBoolean("del");

    public final StringPath employee_email = createString("employee_email");

    public final DatePath<java.time.LocalDate> employee_entrance_date = createDate("employee_entrance_date", java.time.LocalDate.class);

    public final StringPath employee_id = createString("employee_id");

    public final StringPath employee_name = createString("employee_name");

    public final NumberPath<Integer> employee_no = createNumber("employee_no", Integer.class);

    public final StringPath employee_phone = createString("employee_phone");

    public final StringPath employee_pw = createString("employee_pw");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final SetPath<EmployeeRole, EnumPath<EmployeeRole>> roleSet = this.<EmployeeRole, EnumPath<EmployeeRole>>createSet("roleSet", EmployeeRole.class, EnumPath.class, PathInits.DIRECT2);

    public final BooleanPath social = createBoolean("social");

    public QEmployee(String variable) {
        super(Employee.class, forVariable(variable));
    }

    public QEmployee(Path<? extends Employee> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEmployee(PathMetadata metadata) {
        super(Employee.class, metadata);
    }

}

