package com.deligence.deli.controller;

//생산계획 컨트롤러

import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.ProductionPlanning;
import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialProcurementPlanningService;
import com.deligence.deli.service.MaterialsService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/materialProcurementPlanning")
@Log4j2
@RequiredArgsConstructor
public class MaterialProcurementPlanningController {

    private final MaterialProcurementPlanningService materialProcurementPlanningService;

    //생산계획정보(생산계획일련번호) 조회 구현
//    private final ProductionPlanningService productionPlanningService;

    //자재정보(자재일련번호 -> 자재코드, 카테고리, 자재이름) 조회 구현
    private final MaterialsService materialsService;

    @GetMapping("/list")    //목록
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<MaterialProcurementPlanningDTO> responseDTO =
                materialProcurementPlanningService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    //등록GET
    @GetMapping("/register")
    public void registerGET() {

    }

    //등록POST
    @PostMapping("/register")
    public String registerPOST(@Valid MaterialProcurementPlanningDTO materialProcurementPlanningDTO,
                               BindingResult bindingResult, RedirectAttributes redirectAttributes) {

        log.info("materialProcurementPlanning POST register.......");

        if (bindingResult.hasErrors()) {

            log.info("materialProcurementPlanning register has errors........");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            return "redirect:/materialProcurementPlanning/register";
        }

        log.info(materialProcurementPlanningDTO);

        int materialProcurementPlanNo =
                materialProcurementPlanningService.register(materialProcurementPlanningDTO);

        redirectAttributes.addFlashAttribute("result", materialProcurementPlanNo);

        return "redirect:/materialProcurementPlanning/list";
    }

    //조회, 수정
//    @PreAuthorize("isAuthenticated()")
    @GetMapping({"/read", "/modify"})
    public void read(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO,
                     Model model) {

        log.info("search : materialProcurementPlanNo = " + materialProcurementPlanNo);

        MaterialProcurementPlanningDTO materialProcurementPlanningDTO =
                materialProcurementPlanningService.read(materialProcurementPlanNo);

        log.info(materialProcurementPlanningDTO);


        model.addAttribute("dto", materialProcurementPlanningDTO);

        log.info(pageRequestDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    //----------------------------------------------------------------------------------------

    //productionPlanningService 구현 한 후에 주석 풀기.

//    @ResponseBody
//    @GetMapping("/register/selectProductionPlan")
//    public PageResponseDTO<ProductionPlanningDTO> getProductionPlanList(PageRequestDTO pageRequestDTO) {
//
//        log.info("getProductionPlanList");
//
//        PageResponseDTO<ProductionPlanning> responseDTO = productionPlanningService.list(pageRequestDTO);
//
//        return responseDTO;
//
//    }

//    @ResponseBody
//    @GetMapping("/register/getProductionPlan/{productionPlanNo}")
//    public ProductionPlanningDTO getProductionPlanDTO(@PathVariable("productionPlanNo") int productionPlanNo) {
//
//        log.info("getProductionPlanDTO : " + productionPlanNo);
//
//        ProductionPlanningDTO productionPlanningDTO = productionPlanningService.read(productionPlanNo);
//
//        log.info(productionPlanningDTO);
//
//        return productionPlanningDTO;
//    }

    @ResponseBody
    @GetMapping("/register/selectMaterialPlan")
    public PageResponseDTO<MaterialsDTO> getMaterialPlanList(PageRequestDTO pageRequestDTO) {

        log.info("getMaterialPlanList");

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        return responseDTO;

    }

    //materialNo -> html에서 materialCode -> materialNo 수정 필요
    @ResponseBody
    @GetMapping("/register/getMaterialPlan/{materialNo}")
    public MaterialsDTO getMaterialsDTO(@PathVariable("materialNo") int materialNo) {

        log.info("getMaterialsDTO : " + materialNo);

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        log.info(materialNo);

        return materialsDTO;
    }

    //수정POST
    @PostMapping("/modify")
    public String modify( PageRequestDTO pageRequestDTO,
                          @Valid MaterialProcurementPlanningDTO materialProcurementPlanningDTO,
                          BindingResult bindingResult,
                          RedirectAttributes redirectAttributes) {

        log.info("materialProcurementPlanning modify post.........." + materialProcurementPlanningDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("materialProcurementPlanNo",
                    materialProcurementPlanningDTO.getMaterialProcurementPlanNo());

            return "redirect:/materialProcurementPlanning/modify?"+link;
        }

        materialProcurementPlanningService.modify(materialProcurementPlanningDTO);

        redirectAttributes.addAttribute("materialProcurementPlanNo",
                materialProcurementPlanningDTO.getMaterialProcurementPlanNo());

        return "redirect:/materialProcurementPlanning/read";
    }

    //삭제
    @PostMapping("/remove")
    public String remove(int materialProcurementPlanNo, RedirectAttributes redirectAttributes) {

        log.info("remove post...." + materialProcurementPlanNo);

        materialProcurementPlanningService.remove(materialProcurementPlanNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/materialProcurementPlanning/list";

    }



}
