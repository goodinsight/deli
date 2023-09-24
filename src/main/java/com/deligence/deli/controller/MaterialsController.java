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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/material")
@Log4j2
@RequiredArgsConstructor
public class MaterialsController {

    private final MaterialsService materialsService;

    @GetMapping("/list")//자재 전체목록
    public void listAll(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.listWithAll(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    @GetMapping("/register") //자재 등록
    public void registerGET(){

    }

    @PostMapping("/register") //자재 등록
    public String registerPost(@Valid MaterialsDTO materialsDTO, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) throws Exception {

        log.info("material POST register...");

        if(bindingResult.hasErrors()) {
            log.info("has errors..");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/material/register";
        }

        log.info(materialsDTO);

        int materialNo = materialsService.register(materialsDTO);

        redirectAttributes.addFlashAttribute("result", materialNo);

        return "redirect:/material/list";
    }

    @GetMapping({"/read", "/modify"}) //자재 조회, 수정
    public void read(int materialNo, PageRequestDTO pageRequestDTO, Model model){

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        log.info(materialsDTO);

        model.addAttribute("dto",materialsDTO);
    }

    @PostMapping("/modify") //자재 수정
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid MaterialsDTO materialsDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("Materials modify post....." + materialsDTO);

        if(bindingResult.hasErrors()) {
            log.info("hss errors......");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("materialNo", materialsDTO.getMaterialNo());

            return "redirect:/material/modify?"+link;
        }

        materialsService.modify(materialsDTO);

        redirectAttributes.addFlashAttribute("result","modifed");

        redirectAttributes.addAttribute("materialNo", materialsDTO.getMaterialNo());

        return "redirect:/material/read";
    }

    @PostMapping("/delete") //자재삭제
    public String remove(int materialNo, RedirectAttributes redirectAttributes) {

        log.info("remove post..." + materialNo);

        materialsService.delete(materialNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/material/list";
    }

    @ResponseBody
    @GetMapping("/register/getCodeCount/{materialCode}") //자재코드생성
    public int getCodeCount(@PathVariable("materialCode") String materialCode){

        log.info("getCodeCount : " + materialCode);

        int num = materialsService.getCodeCount(materialCode);

        log.info("num : " + num);

        return num;

    }


}
