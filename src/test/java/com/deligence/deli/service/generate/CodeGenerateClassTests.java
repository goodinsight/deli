package com.deligence.deli.service.generate;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class CodeGenerateClassTests {

    @Test
    public void codeGeneratetest() {
        CodeGenerateClass codeGenerateClass = new CodeGenerateClass("자재","CPU");
        String tmp = codeGenerateClass.getCode();
        log.info(tmp);
    }


}
