# 시스템 구조 및 전체 업무 흐름

## 1. 기술 구성

| 영역 | 구성 |
|---|---|
| Front | Thymeleaf 서버 렌더링, HTML/CSS/JavaScript, Axios, Thymeleaf Layout Dialect |
| Back | Java 11, Spring Boot 2.7.15, Spring MVC, Spring Security, Spring Data JPA, QueryDSL |
| DB | MariaDB, Hibernate/JPA (`ddl-auto=update`) |
| 파일 | 게시판·제품·자재 이미지 파일 시스템 저장, DB에는 UUID와 원본 파일명 저장 |
| 배포 | Gradle `bootJar`, 멀티스테이지 Docker 이미지, Docker Compose, 호스트 네트워크 |

## 2. Front 구조

`src/main/resources/templates` 아래 기능별 디렉터리에서 화면을 제공한다.

| 화면 영역 | 템플릿 | 주요 기능 |
|---|---|---|
| 공통 | `layout/layout.html` | 사이드바, 헤더, 로그인 사용자/권한 표시 |
| 인증/직원 | `employee/*` | 로그인, 가입, 직원 조회·수정, 권한 관리 |
| 게시판 | `board/*` | 목록, 등록, 상세, 수정, 첨부 이미지 |
| 자재 | `material/*` | 자재 기준정보와 이미지 관리 |
| 제품 | `product/*` | 제품 기준정보와 이미지 관리 |
| 제품별 소요자재 | `materialRequirementsList/*` | 제품-BOM 성격의 자재 및 수량 연결 |
| 제품계약 | `productContract/*` | 제품·클라이언트 기반 판매/납품 계약 |
| 생산계획 | `productionPlanning/*` | 계약과 소요자재 기반 생산계획 |
| 조달 | `materialProcurementPlanning/*`, `materialProcurementContract/*` | 자재 조달계획과 공급사 계약 |
| 발주 | `order/*` | 발주, 차트, 진척검수 |
| 재고 | `materialInventory/*`, `materialInOutHistory/*` | 입고 처리, 재고, 입출고 이력 |
| 파트너 | `cooperatorSupplier/*`, `CooperatorClient/*` | 공급사와 고객사 기준정보 |

화면은 MVC 컨트롤러가 `Model`에 DTO를 담아 렌더링한다. 모달 목록, 코드 중복 확인, 상태 변경, 댓글, 검수 등은 JSON REST 요청을 함께 사용한다.

## 3. Back 구조

| 계층 | 경로 | 역할 |
|---|---|---|
| Controller | `controller` | URL 매핑, 입력 검증, 화면 모델 구성, 상태 변경 API |
| DTO | `dto` | 화면/서비스 간 요청·응답 모델, 목록 페이징 모델 |
| Service | `service` | 엔티티 변환, 트랜잭션, 상태 변경, 연관 업무 계산 |
| Repository | `repository` | JPA CRUD |
| QueryDSL | `repository/search` | 검색 조건, 목록 조인, 페이징 |
| Domain | `domain` | JPA 엔티티 및 연관관계 |
| Security | `config`, `security` | 로그인, BCrypt, 역할 기반 URL 접근, remember-me |

일반적인 호출 흐름은 다음과 같다.

`Browser → Controller → Service → Repository/QueryDSL → MariaDB → DTO/Model → Thymeleaf`

파일 업로드는 별도 컨트롤러가 UUID를 붙여 원본과 `s_` 썸네일을 저장한다.

## 4. DB 구조

### 계정과 공통

- `employee`: 계정, BCrypt 비밀번호, 연락처, 삭제·소셜 여부
- `employee_role_set`: 계정별 역할 숫자(0~8)
- `persistent_logins`: Spring Security remember-me 사용 시 생성되는 테이블
- `board`, `reply`, `board_image`: 게시판, 댓글, 첨부 이미지

### 기준정보

- `materials`, `material_image`: 자재와 이미지
- `products`, `product_image`: 제품과 이미지
- `material_requirements_list`: 제품별 필요 자재와 단위 소요량
- `cooperator_client`: 고객사
- `cooperator_supplier`: 자재 공급사

### 핵심 업무

- `product_contract`: 제품·고객사·납기·수량·계약상태
- `production_planning`: 제품계약 기반 생산계획
- `material_procurement_planning`: 생산계획과 자재 기반 조달계획
- `material_procurement_contract`: 조달계획과 공급사 기반 조달계약
- `orders`: 조달계획·조달계약 기반 발주
- `progress_inspection`: 발주별 진행 검수
- `material_inventory`: 자재별 입고·출고·현재고
- `material_in_out_history`: 자재 입출고 이력
- `order_chart`, `material_procurement_chart`: 일정/집계 보조 데이터

## 5. 엔티티 관계 중심 업무 흐름

1. `Products`와 `Materials`를 등록한다.
2. `MaterialRequirementsList`로 제품 1개 생산에 필요한 자재와 수량을 연결한다.
3. 고객사 `CooperatorClient`와 제품을 선택해 `ProductContract`를 만든다.
4. 제품계약과 소요자재를 근거로 `ProductionPlanning`을 만든다.
5. 생산계획의 생산수량과 소요량을 바탕으로 `MaterialProcurementPlanning`을 만든다.
6. 조달계획과 공급사 `CooperatorSupplier`를 선택해 `MaterialProcurementContract`를 만든다.
7. 진행 중인 조달계획과 조달계약을 선택해 `Order`를 등록한다.
8. 발주 상세에서 `ProgressInspection`을 기록하고 검수 완료 처리한다.
9. 입고관리에서 검수된 발주 수량을 `MaterialInventory`에 더하고 `MaterialInOutHistory`에 입고 이력을 남긴다.
10. 발주 완료 수량이 조달계획 필요량을 충족하면 조달계획을 `계획완료`로 변경한다.

## 6. 주요 상태 흐름

- 제품계약: `자재검토중 → 자재조달중 → 자재입고중 → 제품생산중 → 제품출고완료` 또는 `계약파기`
- 생산계획: `자재조달단계 → 자재입고단계 → 제품생산단계 → 제품검수단계 → 제품입고완료`
- 조달계획: `진행중 → 계획완료` 또는 `계획중단`
- 조달계약: `조달계약협상중 → 발주진행중 → 조달완료` 또는 `계약파기`
- 발주/입고: `진행중 → 발주완료/검수완료 → 입고검수진행중·반품진행중 → 자재입고완료`

상태 문자열은 화면·검색·서비스에서 위 값으로 통일했다. 향후에는 enum 또는 상수로 옮기면 오타 재발을 막을 수 있다.

## 7. 인증과 권한

역할 값은 `USER(0), ADMIN(1), MATERIAL(2), ORDER(3), PROCUREMENT(4), PRODUCT(5), CLIENT(6), SUPPLIER(7), PRODUCTION(8)`이다.

`CustomSecurityConfig`의 주요 보호 범위는 다음과 같다.

- `/board/**`: 전체 역할
- `/material/**`, `/materialInventory/**`, `/materialInOutHistory/**`: MATERIAL, ADMIN
- `/order/**`, `/progressInspection/**`: ORDER, ADMIN
- `/product/**`: CLIENT, PRODUCTION, PRODUCT, ADMIN
- `/materialRequirementsList/**`: PRODUCT, PRODUCTION, ADMIN
- `/productContract/**`, `/CooperatorClient/**`: CLIENT, ADMIN
- `/productionPlanning/**`: PRODUCTION, MATERIAL, ADMIN
- `/materialProcurementContract/**`, `/materialProcurementPlanning/**`: PROCUREMENT, ADMIN
- `/cooperatorSupplier/**`: SUPPLIER, PROCUREMENT, ADMIN
- 직원 권한·삭제와 게시판 수정·삭제: ADMIN
- 나머지 URL: 로그인한 사용자라면 접근 가능(`anyRequest().authenticated()`)

사이드바도 같은 역할 기준으로 카테고리를 노출하며, 최종 접근 제어는 항상 서버의 보안 규칙이 담당한다.
