package com.deligence.deli.domain;

import lombok.Getter;

import javax.persistence.*;

@Embeddable
@Getter
public class Position {

    private String position_name;

    protected Position() {

    }

    public Position(String position_name){
        this.position_name = position_name;
    }

}
