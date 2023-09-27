package com.deligence.deli.controller;

import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialProcurementPlanningService;
import com.deligence.deli.service.MaterialsService;
import com.deligence.deli.service.ProductionPlanningService;
import io.swagger.v3.oas.models.links.Link;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/materialProcurementPlanning")
@Log4j2
@RequiredArgsConstructor
public class MaterialProcurementPlanningController {

    private final MaterialProcurementPlanningService materialProcurementPlanningService;

    //생산계획정보(생산계획일련번호) 조회 구현
    private final ProductionPlanningService productionPlanningService;

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
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model) {

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    //등록POST
    @PostMapping("/register")
    public String registerPOST(@Valid MaterialProcurementPlanningDTO materialProcurementPlanningDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        log.info("materialProcurementPlanning POST register.......");

        log.info(materialProcurementPlanningDTO);

        // 에러처리---------------------------------------------------------------------
        if (bindingResult.hasErrors()) {

            log.info("materialProcurementPlanning register has errors........");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            return "redirect:/materialProcurementPlanning/register";
        }
        //-------------------------------------------------------------------------------

        int materialProcurementPlanNo =
                materialProcurementPlanningService.register(materialProcurementPlanningDTO);

        redirectAttributes.addFlashAttribute("result", materialProcurementPlanNo);

        return "redirect:/materialProcurementPlanning/list?";
    }

    //조회, 수정
//    @PreAuthorize("isAuthenticated()")
    @GetMapping({"/read", "/modify"})
    public void read(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : materialProcurementPlanNo = " + materialProcurementPlanNo);

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO =
                materialProcurementPlanningService.read(materialProcurementPlanNo);

        log.info(materialProcurementPlanningDetailDTO);


        model.addAttribute("dto", materialProcurementPlanningDetailDTO);

        log.info(pageRequestDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    //수정POST
    @PostMapping("/modify")
    public String modify( PageRequestDTO pageRequestDTO,
                          @Valid MaterialProcurementPlanningDTO materialProcurementPlanningDTO,
                          BindingResult bindingResult,
                          RedirectAttributes redirectAttributes) {

        log.info("materialProcurementPlanning modify post.........." + materialProcurementPlanningDTO);

        // 에러 처리 ---------------------------------------------------------------------------------------
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("materialProcurementPlanNo",
                    materialProcurementPlanningDTO.getMaterialProcurementPlanNo());

            return "redirect:/materialProcurementPlanning/modify?"+link;
        }
        // -------------------------------------------------------------------------------------------------

        materialProcurementPlanningService.modify(materialProcurementPlanningDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

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

    @ResponseBody
    @GetMapping("/register/selectMaterial")
    public PageResponseDTO<MaterialsDTO> getMaterialList(PageRequestDTO pageRequestDTO) {

        log.info("getMaterialList");

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        return responseDTO;

    }

    @ResponseBody
    @GetMapping("/register/getMaterial/{materialsNo}")
    public MaterialsDTO getMaterialsDTO(@PathVariable("materialsNo") int materialsNo) {

        log.info("getMaterialsDTO : " + materialsNo);

        MaterialsDTO materialsDTO = materialsService.readOne(materialsNo);

        log.info(materialsDTO);

        return materialsDTO;
    }

    @ResponseBody
    @GetMapping("/register/getCodeCount/{materialProcurementPlanCode}")
    public int getCodeCount(@PathVariable("materialProcurementPlanCode") String materialProcurementPlanCode){

        log.info("getCodeCount : " + materialProcurementPlanCode);

        int num = materialProcurementPlanningService.getCodeCount(materialProcurementPlanCode);

        log.info("num : " + num);

        return num;

    }

    //조달계획상세 (연관 발주 목록)
    @GetMapping("/orderList" )
    public void orderList(int materialProcurementPlanNo, PageRequestDTO pageRequestDTO, Model model) {

        List<OrderDTO> dtoList =
                materialProcurementPlanningService.orderList(materialProcurementPlanNo, pageRequestDTO);

        log.info(dtoList);

        model.addAttribute("dtoList", dtoList);
    }

}
