package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.ProductionPlanningService;
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
@RequestMapping("/productionPlanning")
@Log4j2
@RequiredArgsConstructor
public class ProductionPlanningController {

    private final ProductionPlanningService productionPlanningService;

    @GetMapping("/list")    //목록
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<ProductionPlanningDTO> responseDTO =
                productionPlanningService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    //등록GET
    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model) {

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    //등록POST
    @PostMapping("/register")
    public String registerPOST(@Valid ProductionPlanningDTO productionPlanningDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        log.info("ProductionPlanning POST register.......");

        log.info(productionPlanningDTO);

        // 에러처리---------------------------------------------------------------------
        if (bindingResult.hasErrors()) {

            log.info("ProductionPlanning register has errors........");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            return "redirect:/productionPlanning/register";
        }
        //-------------------------------------------------------------------------------

        int materialProcurementPlanNo =
                productionPlanningService.register(productionPlanningDTO);

        redirectAttributes.addFlashAttribute("result", materialProcurementPlanNo);

        return "redirect:/productionPlanning/list";
    }

    //조회, 수정
//    @PreAuthorize("isAuthenticated()")
    @GetMapping({"/read", "/modify"})
    public void read(int productionPlanNo, PageRequestDTO pageRequestDTO, Model model) {

        ProductionPlanningDetailDTO productionPlanningDetailDTO =
                productionPlanningService.read(productionPlanNo);

        log.info(productionPlanningDetailDTO);


        model.addAttribute("dto", productionPlanningDetailDTO);

        log.info(pageRequestDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    //수정POST
    @PostMapping("/modify")
    public String modify( PageRequestDTO pageRequestDTO,
                          @Valid ProductionPlanningDTO productionPlanningDTO,
                          BindingResult bindingResult,
                          RedirectAttributes redirectAttributes) {

        log.info("productionPlanning modify post.........." + productionPlanningDTO);

        // 에러 처리 ---------------------------------------------------------------------------------------
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("productionPlanNo",
                    productionPlanningDTO.getProductionPlanNo());

            return "redirect:/productionPlanning/modify?"+link;
        }
        // -------------------------------------------------------------------------------------------------

        productionPlanningService.modify(productionPlanningDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("productionPlanNo",
                productionPlanningDTO.getProductionPlanNo());

        return "redirect:/productionPlanning/read";
    }

    //삭제
    @PostMapping("/remove")
    public String remove(int productionPlanNo, RedirectAttributes redirectAttributes) {

        log.info("remove post...." + productionPlanNo);

        productionPlanningService.remove(productionPlanNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/productionPlanning/list";

    }

    // 비동기 처리 ----------------------------------------------------------------------------------------

    //productionPlanningService 구현 한 후에 주석 풀기.

    @ResponseBody
    @GetMapping("/register/selectPlan")
    public PageResponseDTO<ProductionPlanningDTO> getPlanList(PageRequestDTO pageRequestDTO) {

        log.info("getPlanList");

        PageResponseDTO<ProductionPlanningDTO> responseDTO = productionPlanningService.list(pageRequestDTO);

        return responseDTO;

    }

    @ResponseBody
    @GetMapping("/register/getPlan/{planNo}")
    public ProductionPlanningDetailDTO getPlanDTO(@PathVariable("planNo") int planNo) {

        log.info("getPlanDTO : " + planNo);

        ProductionPlanningDetailDTO productionPlanningDetailDTO = productionPlanningService.read(planNo);

        log.info(productionPlanningDetailDTO);

        return productionPlanningDetailDTO;
    }

//    @ResponseBody
//    @GetMapping("/register/selectMaterial")
//    public PageResponseDTO<ProductionPlanningDTO> getMaterialList(PageRequestDTO pageRequestDTO) {
//
//        log.info("getproductionPlanningList");
//
//        PageResponseDTO<ProductionPlanningDTO> responseDTO = productionPlanningService.list(pageRequestDTO);
//
//        return responseDTO;
//
//    }
//
//    @ResponseBody
//    @GetMapping("/register/getMaterial/{materialsNo}")
//    public MaterialsDTO getMaterialsDTO(@PathVariable("materialsNo") int materialsNo) {
//
//        log.info("getMaterialsDTO : " + materialsNo);
//
//        MaterialsDTO materialsDTO = materialsService.readOne(materialsNo);
//
//        log.info(materialsDTO);
//
//        return materialsDTO;
//    }
//
//    @ResponseBody
//    @GetMapping("/register/getCodeCount/{materialProcurementPlanCode}")
//    public int getCodeCount(@PathVariable("materialProcurementPlanCode") String materialProcurementPlanCode){
//
//        log.info("getCodeCount : " + materialProcurementPlanCode);
//
//        int num = materialProcurementPlanningService.getCodeCount(materialProcurementPlanCode);
//
//        log.info("num : " + num);
//
//        return num;
//
//    }
//
//    //조달계획상세 (연관 발주 목록)
//    @GetMapping("/orderList" )
//    public void orderList(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO, Model model) {
//
//        List<OrderDTO> dtoList =
//                materialProcurementPlanningService.orderList(materialProcurementPlanNo, pageRequestDTO);
//
//        log.info(dtoList);
//
//        model.addAttribute("dtoList", dtoList);
//    }

}
