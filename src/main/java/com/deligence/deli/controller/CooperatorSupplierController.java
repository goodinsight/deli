package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.CooperatorSupplierService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
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
@RequestMapping("/cooperatorSupplier")
@Log4j2
@RequiredArgsConstructor
public class CooperatorSupplierController {

    private final CooperatorSupplierService cooperatorSupplierService;

    @GetMapping("/list")
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model){

        log.info(orderPageRequestDTO);

        OrderPageResponseDTO<CooperatorSupplierDTO> responseDTO = cooperatorSupplierService.listWithState(orderPageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register")
    public String registerPOST(@Valid CooperatorSupplierDTO cooperatorSupplierDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes){

        log.info("supplier post register----------------");

        log.info(cooperatorSupplierDTO);

        if(bindingResult.hasErrors()) {

            log.info("supplier list register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/cooperatorSupplier/register";
        }


        int supplierNo = cooperatorSupplierService.register(cooperatorSupplierDTO);

        redirectAttributes.addFlashAttribute("result", supplierNo);

        return "redirect:/cooperatorSupplier/list";

    }

    @GetMapping({"/read", "/modify"})
    public void read(int supplierNo, OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info("search : supplierNo = " + supplierNo);

        CooperatorSupplierDTO cooperatorSupplierDTO = cooperatorSupplierService.read(supplierNo);

        log.info(cooperatorSupplierDTO);

        model.addAttribute("dto", cooperatorSupplierDTO);

        model.addAttribute("pageRequestDTO", orderPageRequestDTO);

    }

    @PostMapping("/modify")
    public String modify(OrderPageRequestDTO orderPageRequestDTO,
                         @Valid CooperatorSupplierDTO cooperatorSupplierDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("supplier modify : " + cooperatorSupplierDTO);

        //에러 처리----
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = orderPageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("supplierNo",
                    cooperatorSupplierDTO.getSupplierNo());

            return "redirect:/cooperatorSupplier/modify?"+link;
        }
        //-----------

        cooperatorSupplierService.modify(cooperatorSupplierDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("supplierNo", cooperatorSupplierDTO.getSupplierNo());

        return "redirect:/cooperatorSupplier/read";
    }

    @PostMapping("/remove")
    public String remove(int supplierNo, RedirectAttributes redirectAttributes) {

        log.info("remove post...." + supplierNo);

        cooperatorSupplierService.remove(supplierNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/cooperatorSupplier/list";

    }

}
