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
    public String registerPost(@Valid CooperatorClientDTO cooperatorClientDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes){

        log.info("CooperatorClient POST register...");
        log.info(cooperatorClientDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors...");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/CooperatorClient/register";
        }


        int clientNo = cooperatorClientService.register(cooperatorClientDTO);

        redirectAttributes.addFlashAttribute("result", clientNo);

        return "redirect:/CooperatorClient/list";

    }

    @GetMapping({"/read", "/modify"}) //상세조회 + 수정
    public void read(int clientNo, PageRequestDTO pageRequestDTO, Model model){

        log.info("clientNo : "+clientNo);

        CooperatorClientDTO cooperatorClientDTO = cooperatorClientService.read(clientNo);

        log.info(cooperatorClientDTO);

        model.addAttribute("dto", cooperatorClientDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    @PostMapping("/modify") // 수정
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid CooperatorClientDTO cooperatorClientDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes) {

        log.info("client modify post....." + cooperatorClientDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("clientNo", cooperatorClientDTO.getClientNo());

            return "redirect:/CooperatorClient/modify?"+link;
        }

        cooperatorClientService.modify(cooperatorClientDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("clientNo", cooperatorClientDTO.getClientNo());

        return "redirect:/CooperatorClient/read";
    }

    @PostMapping("/delete")
    public String delete(int clientNo, RedirectAttributes redirectAttributes){

        log.info("delete post.." + clientNo);

        cooperatorClientService.delete(clientNo);

        redirectAttributes.addFlashAttribute("result", "delete");

        return "redirect:/CooperatorClient/list";
    }
}
