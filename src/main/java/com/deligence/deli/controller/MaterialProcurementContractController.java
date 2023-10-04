package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.CooperatorSupplierService;
import com.deligence.deli.service.MaterialProcurementContractService;
import com.deligence.deli.service.MaterialProcurementPlanningService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.awt.*;
import java.util.Map;

@Controller
@RequestMapping("/materialProcurementContract")
@Log4j2
@RequiredArgsConstructor
public class MaterialProcurementContractController {

    private final MaterialProcurementContractService materialProcurementContractService;

    //자재조달계획에서 자재정보(일련번호,코드,분류,이름,공급단가), 자재소요량 조회 구현
    private final MaterialProcurementPlanningService materialProcurementPlanningService;

    //자재협력회사정보(협력회사일련번호->협력회사명,대표명, 연락처) 조회 구현
    private final CooperatorSupplierService cooperatorSupplierService;

    @GetMapping("/list")
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info(orderPageRequestDTO);

        OrderPageResponseDTO<MaterialProcurementContractDTO> responseDTO =
                materialProcurementContractService.listWithState(orderPageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }



//    @GetMapping("/list")
//    public void list(OrderPageRequestDTO orderPageRequestDTO, String[] states, Model model) {
//
//        log.info(orderPageRequestDTO);
//
//        OrderPageResponseDTO<MaterialProcurementContractDTO> responseDTO =
//                materialProcurementContractService.listWithState2(orderPageRequestDTO, states);
//
//        log.info(responseDTO);
//
//        model.addAttribute("responseDTO", responseDTO);
//    }

    @GetMapping("/register")    //자재조달계약 employee2
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model) {

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register")
    public String registerPOST(@Valid MaterialProcurementContractDTO materialProcurementContractDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        log.info("materialProcurementContact post register........");

        log.info(materialProcurementContractDTO);

        if (bindingResult.hasErrors()) {

            log.info("materialProcurementContract register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/materialProcurementContract/register";
        }

        int materialProcurementContractNo =
                materialProcurementContractService.register(materialProcurementContractDTO);

        redirectAttributes.addFlashAttribute("result", materialProcurementContractNo);

        return "redirect:/materialProcurementContract/list";
    }

    @GetMapping({"/read", "/modify"})
    public void read(int materialProcurementContractNo, OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info("search : materialProcurementContractNo = " + materialProcurementContractNo);

        MaterialProcurementContractDetailDTO materialProcurementContractDetailDTO =
                materialProcurementContractService.read(materialProcurementContractNo);

        log.info(materialProcurementContractDetailDTO);

        model.addAttribute("dto", materialProcurementContractDetailDTO);

        model.addAttribute("pageRequestDTO", orderPageRequestDTO);

    }

    @PostMapping("/modify")
    public String modify(OrderPageRequestDTO orderPageRequestDTO,
                         @Valid MaterialProcurementContractDTO materialProcurementContractDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes) {

        log.info("materialProcurementContract modify : " + materialProcurementContractDTO);

        //에러 처리 ------------------------------------------------------------------------------
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = orderPageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("materialProcurementContractNo",
                    materialProcurementContractDTO.getMaterialProcurementContractNo());

            return "redirect:/materialProcurementContract/modify?"+link;
        }
        //--------------------------------------------------------------------------------------------

        materialProcurementContractService.modify(materialProcurementContractDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("materialProcurementContractNo",
                materialProcurementContractDTO.getMaterialProcurementContractNo());

        return "redirect:/materialProcurementContract/read";

    }

    @PostMapping("/remove")
    public String remove(int materialProcurementContractNo, RedirectAttributes redirectAttributes) {

        log.info("remove post...." + materialProcurementContractNo);

        materialProcurementContractService.remove(materialProcurementContractNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/materialProcurementContract/list";

    }

    // 비동기 처리 -----------------------------------------------------
    //조달계획 클릭 -> 계획목록 -> 자재정보(자재코드,자재분류,자재이름,공급단가), 자재소요량
    //협력회사이름클릭->협력회사목록


    @ResponseBody
    @GetMapping("/register/selectPlan")
    public PageResponseDTO<MaterialProcurementPlanningDTO> getPlanList(PageRequestDTO pageRequestDTO){

        log.info("getPlanList");

        //조달 계획 상태 : 진행중 검색
        pageRequestDTO.setType("f");
        pageRequestDTO.setKeyword("진행중");

        PageResponseDTO<MaterialProcurementPlanningDTO> responseDTO = materialProcurementPlanningService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getPlan/{planNo}")
    public MaterialProcurementPlanningDetailDTO getPlanDTO(@PathVariable("planNo") int planNo) {

        log.info("getPlanDTO : " + planNo);

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO = materialProcurementPlanningService.read(planNo);

        log.info(materialProcurementPlanningDetailDTO);

        return materialProcurementPlanningDetailDTO;

    }

    //자재조달 협력회사 비동기처리
    @ResponseBody
    @GetMapping("/register/selectSupplier")
    public PageResponseDTO<CooperatorSupplierDTO> getSupplierList(PageRequestDTO pageRequestDTO){

        log.info("getSupplierList");

        PageResponseDTO<CooperatorSupplierDTO> responseDTO = cooperatorSupplierService.list(pageRequestDTO);

        return responseDTO;
//        return cooperatorSupplierService.list(pageRequestDTO);

    }

    @ResponseBody
    @GetMapping("/register/getSupplier/{suppliersNo}")
    public CooperatorSupplierDTO getSupplierDTO(@PathVariable("suppliersNo") int suppliersNo){

        log.info("getSupplierDTO : " + suppliersNo);

        CooperatorSupplierDTO cooperatorSupplierDTO = cooperatorSupplierService.read(suppliersNo);

        log.info(cooperatorSupplierDTO);

        return cooperatorSupplierDTO;

    }


    @ResponseBody
    @GetMapping("/register/getCodeCount/{materialProcurementContractCode}")
    public int getCodeCount(@PathVariable("materialProcurementContractCode") String materialProcurementContractCode){

        log.info("getCodeCount : " + materialProcurementContractCode);

        int num = materialProcurementContractService.getCodeCount(materialProcurementContractCode);

        log.info("num : " + num);

        return num;

    }

    //상태변경
    @ResponseBody
    @PostMapping(value = "/changeMaterialProcurementContractState", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void changeMaterialProcurementContractState(@RequestBody Map<String, Object> map){

        int materialProcurementContractNo = Integer.parseInt(map.get("materialProcurementContractNo").toString());
        String state = map.get("state").toString();

        materialProcurementContractService.changeState(materialProcurementContractNo, state);

    }
}
