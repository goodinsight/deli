package com.deligence.deli.controller;

import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.MaterialsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/material")
@Log4j2
@RequiredArgsConstructor
public class MaterialController {

    private final MaterialsService materialsService;

    @GetMapping("/materialList")
    public void list(MaterialsDTO materialsDTO, Model model) {



    }
}
