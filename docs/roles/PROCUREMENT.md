# PROCUREMENT 역할

## 책임과 접근 범위

생산에 필요한 자재의 조달계획과 공급사 기반 조달계약을 담당한다. 두 조달 URL은 PROCUREMENT와 ADMIN에 명시적으로 허용된다.

## 업무 절차

1. 생산계획을 조회해 제품, 생산수량, 납기와 공정을 확인한다.
2. 제품별 자재소요량과 대상 자재를 선택한다.
3. 필요 수량과 조달 납기일을 계산해 조달계획을 등록한다.
4. 조달계획 상태를 `진행중`으로 관리한다.
5. 진행 중인 조달계획과 적합한 공급사를 선택한다.
6. 공급단가, 조달수량, 계약일, 조건을 입력해 조달계약을 등록한다.
7. 계약 상태를 `조달계약협상중 → 발주진행중 → 조달완료`로 관리하거나 파기한다.
8. 조달계획 상세에서 연결된 발주 목록과 누적 진행을 확인한다.

## 관련 데이터

- `material_procurement_planning`
- `material_procurement_contract`, `material_procurement_chart`
- `production_planning`, `material_requirements_list`, `materials`
- `cooperator_supplier`, `orders`

## 다음 단계

확정된 조달계획과 계약은 ORDER 역할의 발주 등록 입력이 된다.
