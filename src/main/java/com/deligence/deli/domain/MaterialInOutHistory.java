package com.deligence.deli.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "employee")
public class MaterialInOutHistory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialHistoryNo; // 자재기록번호

    @Column(length = 500, nullable = false)
    private String inOutSeparator; // 입/출고 구분자

    @Column(length = 500, nullable = false)
    private int quantity; // 입/출고 수량

    private LocalDate historyDate;  //입/출고 날짜

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MaterialInventory materialInventory; // 자재재고 일련번호

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Employee employee; // 담당자(사원일련번호)

    private String employeeName;    //담당자




    public void change(String inOutSeparator, int quantity) { //나중에 dto 만들면 dto로 수정

        this.inOutSeparator = inOutSeparator;
        this.quantity = quantity;

    }

}
