# 역할별 업무 프로세스

| 값 | 역할 | 문서 | 주 담당 영역 |
|---:|---|---|---|
| 0 | USER | [USER](USER.md) | 게시판 |
| 1 | ADMIN | [ADMIN](ADMIN.md) | 전체 업무와 권한 관리 |
| 2 | MATERIAL | [MATERIAL](MATERIAL.md) | 자재, 재고, 입고 |
| 3 | ORDER | [ORDER](ORDER.md) | 발주와 검수 |
| 4 | PROCUREMENT | [PROCUREMENT](PROCUREMENT.md) | 조달계획·계약 |
| 5 | PRODUCT | [PRODUCT](PRODUCT.md) | 제품과 소요자재 |
| 6 | CLIENT | [CLIENT](CLIENT.md) | 제품·고객 관점 업무 |
| 7 | SUPPLIER | [SUPPLIER](SUPPLIER.md) | 공급사 기준정보 |
| 8 | PRODUCTION | [PRODUCTION](PRODUCTION.md) | 생산계획 |
| 9 | COOPERATOR | [COOPERATOR](COOPERATOR.md) | 향후 협력사 서비스용 |
| 10 | PARTNER | [PARTNER](PARTNER.md) | 향후 클라이언트 서비스용 |

모든 역할은 로그인 후 게시판을 사용할 수 있다. COOPERATOR/PARTNER의 전용 화면은 아직 없으며 기존 SUPPLIER/CLIENT의 기준정보 권한을 자동으로 상속하지 않는다. 실제 서버 접근 제어는 [시스템 구조 문서](../architecture.md)의 인증과 권한 절을 기준으로 확인한다.
