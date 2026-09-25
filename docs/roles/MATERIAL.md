# MATERIAL 역할

## 책임과 접근 범위

자재 기준정보, 자재 이미지, 재고, 입고 처리와 입출고 이력을 담당한다. `/material/**`, `/materialInventory/**`는 MATERIAL과 ADMIN에 명시적으로 허용된다.

## 업무 절차

1. 자재 코드·이름·분류·설명·공급단가와 이미지를 등록한다.
2. 자재 목록에서 기준정보를 조회·수정한다.
3. 발주/검수가 진행된 건을 입고관리 목록에서 확인한다.
4. 입고 수량을 확정한다.
5. `material_inventory`의 입고누계와 현재고를 증가시킨다.
6. `material_in_out_history`에 `입고` 이력을 기록한다.
7. 발주 상태를 `자재입고완료` 등 후속 상태로 변경한다.
8. 재고 목록과 입출고 이력에서 반영 결과를 검증한다.

## 관련 데이터

- `materials`, `material_image`
- `material_inventory`, `material_in_out_history`
- `orders`, `progress_inspection`

## 협업 지점

PRODUCT가 제품별 소요자재를 구성하고, PROCUREMENT/ORDER가 조달과 발주를 완료하면 MATERIAL이 실제 입고와 재고 반영을 마무리한다.

## 접근 범위

자재·재고·입출고 이력은 MATERIAL/ADMIN만 접근할 수 있다. 생산계획은 업무 연계를 위해 PRODUCTION/MATERIAL/ADMIN에 허용된다.
