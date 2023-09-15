package com.deligence.deli.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@Log4j2
public class SampleController {

    @GetMapping("/sample/index.html")
    public void getTestIndex() {

    }

}
