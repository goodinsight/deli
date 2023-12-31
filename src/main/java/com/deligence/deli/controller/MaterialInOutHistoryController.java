package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInOutHistoryService;
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
@RequestMapping("/materialInOutHistory")
@Log4j2
@RequiredArgsConstructor
public class MaterialInOutHistoryController {

    private final MaterialInOutHistoryService materialInOutHistoryService;

    @GetMapping("/materialInOutHistoryList")
    public void list(PageRequestDTO pageRequestDTO, Model model){

        PageResponseDTO<MaterialInOutHistoryDetailDTO> responseDTO = materialInOutHistoryService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/materialInOutHistoryRead")
    public void read(int materialHistoryNo,PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : materialHistoryNo = " + materialHistoryNo);

        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = materialInOutHistoryService.readOne(materialHistoryNo);

        log.info(materialInOutHistoryDetailDTO);

        model.addAttribute("dto", materialInOutHistoryDetailDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

//    @GetMapping("/materialOutRegister") //register 시 자재 & 사원정보 검색 또는 선택용
//    public void materialOutGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model) {
//
//        log.info(employeeSecurityDTO);
//
//        model.addAttribute("user", employeeSecurityDTO);
//
//    }
//
//    @PostMapping("/materialOutRegister") //register 시 자재 & 사원정보 검색 또는 선택용
//    public String materialOutPOST(@Valid MaterialsDTO materialsDTO,
//                                  MaterialInventoryDTO materialInventoryDTO,
//                                  EmployeeSecurityDTO employeeSecurityDTO,
//                                  BindingResult bindingResult,
//                                  RedirectAttributes redirectAttributes){
//
//        log.info("productInOutHistory pust Register....");
//
//        log.info(materialsDTO.getMaterialCode(), materialsDTO.getFileNames(),
//                materialInventoryDTO.getMaterialStock());
//
//        if(bindingResult.hasErrors()) {
//
//            log.info("productInOutHistory Register error");
//
//            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
//
//            return "redirect:/materialInventory/materialOutRegister";
//        }
//
//        String materialCode = materialsDTO.getMaterialCode();
//
//        String materialName = materialsDTO.getMaterialName();
//
//        int materialStock = materialInventoryDTO.getMaterialStock();
//
//        redirectAttributes.addFlashAttribute("materialCode", materialCode);
//
//        redirectAttributes.addFlashAttribute("materialName",materialCode);
//
//        redirectAttributes.addFlashAttribute("materialStock", materialStock);
//
//
//        return "redirect:/materialInventory/materialOutList";
//    }

}
