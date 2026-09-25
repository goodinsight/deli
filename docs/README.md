# Deli ERP 문서

이 문서는 현재 소스 코드와 DB 백업을 기준으로 시스템 구조와 역할별 업무 절차를 정리한다.

- [시스템 구조 및 전체 업무 흐름](architecture.md)
- [역할별 문서 목차](roles/README.md)
- [CRUD 연관 처리 및 cascade 점검](crud-cascade-audit.md)

## 핵심 업무 흐름

`기준정보 등록 → 제품계약 → 생산계획 → 제품별 자재소요량 → 자재조달계획 → 자재조달계약 → 발주 → 진척검수 → 자재입고/재고 반영`

문서의 권한 설명은 `EmployeeRole`, `CustomSecurityConfig`, 컨트롤러 URL을 함께 비교한 결과다. 사이드바는 역할별 업무 메뉴만 표시하고, 실제 접근은 서버의 URL 권한 규칙이 최종 통제한다.
