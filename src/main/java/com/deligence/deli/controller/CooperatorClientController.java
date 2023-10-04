package com.deligence.deli.controller;

import com.deligence.deli.dto.CooperatorClientDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.CooperatorClientService;
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
@RequestMapping("/CooperatorClient")
@Log4j2
@RequiredArgsConstructor
public class CooperatorClientController {

    private final CooperatorClientService cooperatorClientService;

    @GetMapping("/list") //전체조회
    public void list(PageRequestDTO pageRequestDTO, Model model){

        PageResponseDTO<CooperatorClientDTO> responseDTO = cooperatorClientService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register") //등록(추가)
    public void registerGET(){

    }

    @PostMapping("/register") //등록(추가)
    public String registerPost(@Valid CooperatorClientDTO cooperatorClientDTO, BindingResult bindingResult,
                             RedirectAttributes redirectAttributes){

        log.info("CooperatorClient POST register...");

        if (bindingResult.hasErrors()) {
            log.info("has errors...");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/CooperatorClient/register";
        }

        log.info(cooperatorClientDTO);

        int clientNo = cooperatorClientService.register(cooperatorClientDTO);

        redirectAttributes.addFlashAttribute("result", clientNo);

        return "redirect:/CooperatorClient/list";

    }

    @GetMapping("/read")
    public void read(int clientNo, PageRequestDTO pageRequestDTO, Model model){

        CooperatorClientDTO cooperatorClientDTO = cooperatorClientService.read(clientNo);

        log.info(cooperatorClientDTO);

        model.addAttribute("dto", cooperatorClientDTO);
    }


}
