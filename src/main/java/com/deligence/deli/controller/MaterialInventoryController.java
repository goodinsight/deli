package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInventoryService;
import com.deligence.deli.service.MaterialsService;
import com.deligence.deli.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/materialInventory")
@Log4j2
@RequiredArgsConstructor
public class MaterialInventoryController {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    private final MaterialInventoryService materialInventoryService;

    private final OrderService orderService;
    private final MaterialsService materialsService;

    //자재재고 list
    @GetMapping("/listInventory")
    public void listInventory(PageRequestDTO pageRequestDTO, Model model) {

        log.info(pageRequestDTO);

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.listInventory(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    
    //자재재고/재고>입고관리 registerGET
//    @GetMapping({"/registerInventory", "/registerIncoming"})
    @GetMapping({"/registerInventory"})
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    //자재재고 registerPOST
    @PostMapping("/registerInventory")
    public String registerInventoryPOST(@Valid MaterialInventoryDTO materialInventoryDTO,
                                        BindingResult bindingResult,
                                        RedirectAttributes redirectAttributes){

        log.info("material inventory post register----------------");

        log.info(materialInventoryDTO);

        if(bindingResult.hasErrors()) {

            log.info("material inventory register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/materialInventory/registerInventory";
        }

        int materialInventoryNo = materialInventoryService.registerInventory(materialInventoryDTO);

        redirectAttributes.addFlashAttribute("result", materialInventoryNo);

        return "redirect:/materialInventory/listInventory";
    }

    //자재재고 read
    @GetMapping({"/readInventory", "/modifyInventory"})
    public void readInventory(int materialInventoryNo, PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : materialInventoryNo = " + materialInventoryNo);

        MaterialInventoryDetailDTO materialInventoryDetailDTO = materialInventoryService.readInventory(materialInventoryNo);

        log.info(materialInventoryDetailDTO);

        model.addAttribute("dto", materialInventoryDetailDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);
    }

    //자재재고 modify
    @PostMapping("/modifyInventory")
    public String modifyInventory(PageRequestDTO pageRequestDTO,
                                  @Valid MaterialInventoryDTO materialInventoryDTO,
                                  BindingResult bindingResult,
                                  RedirectAttributes redirectAttributes){

        log.info("inventory modify : " + materialInventoryDTO);

        //에러 처리----

        //-----------

        materialInventoryService.modifyInventory(materialInventoryDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("materialInventoryNo", materialInventoryDTO.getMaterialInventoryNo());

        return "redirect:/materialInventory/readInventory";
    }

}
