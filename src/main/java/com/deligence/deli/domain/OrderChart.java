package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderChart extends BaseEntity{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderChartNo;   //발주차트일련번호
    
    private int orderQuantity;  //발주수량
    
    private LocalDate orderSchedule;    //일정
    
    private String orderState;  //발주 상태
    
    private String orderCode;   //발주 코드
    
    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;    //발주(주문) 정보
    
    @ManyToOne(fetch = FetchType.LAZY)
    private DocumentFile documentFile;  //문서파일(일련번호) 
    
}
