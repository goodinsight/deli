package com.deligence.deli.domain;

import lombok.Getter;

import javax.persistence.*;

@Embeddable
@Getter
public class Position {

    private String positionName;

    protected Position() {

    }

    public Position(String positionName){
        this.positionName = positionName;
    }

}
