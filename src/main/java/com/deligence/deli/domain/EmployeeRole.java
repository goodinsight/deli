package com.deligence.deli.domain;

public enum EmployeeRole {
    USER, ADMIN, MATERIAL, ORDER, PROCUREMENT, PRODUCT, CLIENT, SUPPLIER, PRODUCTION,
    COOPERATOR, PARTNER;
    // DB에는 enum 순번으로 저장되므로 기존 역할의 순서를 변경하지 않는다.
    // COOPERATOR(9): 향후 협력사 서비스, PARTNER(10): 향후 클라이언트 서비스.
}
