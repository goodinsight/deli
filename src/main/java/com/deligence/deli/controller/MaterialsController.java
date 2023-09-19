package com.deligence.deli.controller;

import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.MaterialsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/material")
@Log4j2
@RequiredArgsConstructor
public class MaterialsController {

    private final MaterialsService materialsService;

    @GetMapping("/materialList")//재고 전체목록
    public void listAll(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    @GetMapping("/materialRegister") //재고 등록
    public void materialRegisterGET(){

    }

    @PostMapping("/materialRegister") //재고 등록
    public String materialRegisterPost(@Valid MaterialsDTO materialsDTO, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        log.info("material POST register...");

        if(bindingResult.hasErrors()) {
            log.info("has errors..");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/material/materialRegister";
        }

        log.info(materialsDTO);

        int materialNo = materialsService.register(materialsDTO);

        redirectAttributes.addFlashAttribute("result", materialNo);

        return "redirect:/material/materialList";
    }
}
