# PRODUCT 역할

## 책임과 접근 범위

제품 기준정보와 제품별 자재 구성(BOM 성격)을 관리한다. `/product/**`는 PRODUCT, CLIENT, PRODUCTION, ADMIN에 허용된다.

## 업무 절차

1. 제품 코드·이름·분류·설명과 이미지를 등록한다.
2. 제품 기준정보를 조회·수정·삭제한다.
3. 제품별 자재 항목에서 제품과 자재를 선택한다.
4. 제품 1개에 필요한 자재 수량을 등록한다.
5. 중복 또는 변경된 소요자재 구성을 수정한다.
6. 제품계약과 생산계획 담당자가 사용할 기준정보의 정확성을 검증한다.

## 관련 데이터

- `products`, `product_image`
- `materials`
- `material_requirements_list`

## 협업 지점

CLIENT/계약 담당자가 제품계약을 만들고, PRODUCTION이 생산계획을 만들 때 이 역할이 관리한 제품과 소요자재 정보가 사용된다.

## 접근 범위

제품별 소요자재 URL은 PRODUCT/PRODUCTION/ADMIN으로 제한된다. 제품 기본정보는 계약·생산 연계를 위해 CLIENT/PRODUCTION/PRODUCT/ADMIN에 허용된다.
