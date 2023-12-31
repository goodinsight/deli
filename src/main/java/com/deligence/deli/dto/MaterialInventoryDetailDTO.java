package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MaterialInventoryDetailDTO {

    private int materialInventoryNo;        // 자재재고 일련번호 (-> 자재재고 목록)

    private int materialNo;                 // 자재 일련번호 FK (-> 자재타입, 자재코드, 자재이름, 공급단가 (-> 자재재고 목록/상세 - 자재설명)

    private int materialIncomingQuantity;   // 입고 수량 (-> 자재재고 목록)

    private int materialOutgoingQuantity;   // 출고 수량 (-> 자재재고 목록)

    private int materialStock;              // 재고 수량 (-> 자재재고 목록 / 상세)

    private Long materialSupplyPrice;       // 공급 단가 (-> 자재재고 목록)

    private Long materialTotalInventoryPayments;    // 총 재고 금액 (입고수량*공급단가 - 출고수량*공급단가) (-> 자재재고 목록)

    private String materialType;            // 자재타입 (-> 자재재고 목록, 검색용)

    private String materialCode;            // 자재코드 (-> 자재재고 목록, 검색용)

    private String materialName;            // 자재이름 (-> 자재재고 목록, 검색용)

    private String materialExplaination;    // 자재설명 (-> 자재재고 상세)

    private int materialImageNo;            // 자재이미지 일련번호 (-> 자재재고 상세)

    private String materialImgName;         // 자재이미지이름 (-> 자재재고 상세)

    private String materialUuid;            // 자재이미지 범용식별자 (-> 자재재고 상세)

    private LocalDateTime regDate;          // 등록일

    private LocalDateTime modDate;          // 수정일

    private int documentFileNo;             // 문서 파일 일련번호

}
