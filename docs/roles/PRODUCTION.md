# PRODUCTION 역할

## 책임과 접근 범위

제품계약과 제품별 소요자재를 기반으로 생산계획을 수립하고 진행상태를 관리한다. `/product/**`에는 접근 가능하다.

## 업무 절차

1. 진행할 제품계약을 선택해 제품, 계약수량, 고객사, 납기를 확인한다.
2. 해당 제품의 자재소요량 항목을 선택한다.
3. 생산수량, 소요기간, 공정, 생산납기와 담당자를 입력해 생산계획을 등록한다.
4. 생산계획 상태를 `자재조달단계 → 자재입고단계 → 제품생산단계 → 제품검수단계 → 제품입고완료`로 관리한다.
5. 생산계획 상세에서 연결된 조달계획을 확인한다.
6. 생산 완료 처리 시 상태와 제품계약 수량 충족 여부를 검토한다.

## 관련 데이터

- `production_planning`
- `product_contract`, `products`
- `material_requirements_list`
- `material_procurement_planning`

## 접근 범위

실제 컨트롤러 경로인 `/productionPlanning/**`는 PRODUCTION/MATERIAL/ADMIN으로 제한된다. MATERIAL은 생산계획과 조달·재고 업무를 연계하기 위해 함께 접근한다.
