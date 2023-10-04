package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialRequirementsListService;
import com.deligence.deli.service.MaterialsService;
import com.deligence.deli.service.ProductsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/materialRequirementsList")
@Log4j2
@RequiredArgsConstructor
public class MaterialRequirementsListController {

    private final MaterialRequirementsListService materialRequirementsListService;
    private final ProductsService productsService;
    private final MaterialsService materialsService;

    @GetMapping("/list")
    public void list(PageRequestDTO pageRequestDTO, Model model){

        log.info(pageRequestDTO);

        PageResponseDTO<MaterialRequirementsListDTO> responseDTO = materialRequirementsListService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register")
    public String registerPOST(@Valid MaterialRequirementsListDTO materialRequirementsListDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes){

        log.info("order post register----------------");

        log.info(materialRequirementsListDTO);

        if(bindingResult.hasErrors()) {

            log.info("materials list register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/materialReqirementsList/register";
        }


        int materialRequirementsListNo = materialRequirementsListService.register(materialRequirementsListDTO);

        redirectAttributes.addFlashAttribute("result", materialRequirementsListNo);

        return "redirect:/materialRequirementsList/list";

    }

    @GetMapping({"/read", "/modify"})
    public void read(int materialRequirementsListNo, PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : materialRequirementsListNo = " + materialRequirementsListNo);

        MaterialRequirementsListDTO materialRequirementsListDTO = materialRequirementsListService.read(materialRequirementsListNo);

        log.info(materialRequirementsListDTO);

        model.addAttribute("dto", materialRequirementsListDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    @PostMapping("/modify")
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid MaterialRequirementsListDTO materialRequirementsListDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("materialRequirementsList modify : " + materialRequirementsListDTO);

        //에러 처리----

        //-----------

        materialRequirementsListService.modify(materialRequirementsListDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("materialRequirementsListNo", materialRequirementsListDTO.getMaterialRequirementsListNo());

        return "redirect:/materialRequirementsList/read";
    }

    //비동기처리 --------------------------------------
    //제품 정보
    @ResponseBody
    @GetMapping("/register/productList")
    public PageResponseDTO<ProductsDTO> getProductList(PageRequestDTO pageRequestDTO){

        log.info("getProductsList");

        PageResponseDTO<ProductsDTO> responseDTO = productsService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getProduct/{productNo}")
    public ProductsDTO getProductDTO(@PathVariable("productNo") int productNo) {

        log.info("getProductDTO : " + productNo);

        ProductsDTO productsDTO = productsService.readOne(productNo);

        log.info(productsDTO);

        return productsDTO;

    }
    

    //자재 정보
    @ResponseBody
    @GetMapping("/register/materialList")
    public PageResponseDTO<MaterialsDTO> getMaterialList(PageRequestDTO pageRequestDTO){

        log.info("getMaterialsList");

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getMaterial/{materialNo}")
    public MaterialsDTO getMaterialDTO(@PathVariable("materialNo") int materialNo) {

        log.info("getPlanDTO : " + materialNo);

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        log.info(materialsDTO);

        return materialsDTO;

    }
}
