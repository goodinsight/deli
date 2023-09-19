package com.deligence.deli.service.generate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;



public class CodeGenerateClass {

    private String code = "";

    static LocalDateTime dateTime = LocalDateTime.now();
    DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");

    public CodeGenerateClass(String name, String type){
        this.code = name + type + dateTime.format(dateTimeFormatter);
    }

    String getCode(){
        return this.code;
    }

}
