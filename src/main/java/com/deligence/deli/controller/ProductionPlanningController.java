package com.deligence.deli.controller;

import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.domain.ProductContract;
import com.deligence.deli.dto.*;
import com.deligence.deli.service.ProductContractService;
import com.deligence.deli.service.ProductionPlanningService;
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
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/productionPlanning")
@Log4j2
@RequiredArgsConstructor
public class ProductionPlanningController {

    private final ProductionPlanningService productionPlanningService;

    private final ProductContractService productContractService;        //제품계약 Service
    //제품별필요자재항목 Service 구현 후 주석 풀기
//    private final MaterialRequirementsListService materialRequirementsListService;  //제품별필요자재항목 Service

    //상태 검색 추가 -> list 수정함
    @GetMapping("/list")    //목록
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info(orderPageRequestDTO);

        OrderPageResponseDTO<ProductionPlanningDTO> responseDTO = productionPlanningService.listWithState(orderPageRequestDTO);

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

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/productionPlanning/register";
        }
        //-------------------------------------------------------------------------------

        int productionPlanNo =
                productionPlanningService.register(productionPlanningDTO);

        redirectAttributes.addFlashAttribute("result", productionPlanNo);

        return "redirect:/productionPlanning/list";
    }

    //조회, 수정
//    @PreAuthorize("isAuthenticated()")
    @GetMapping({"/read", "/modify"})
    public void read(int productionPlanNo, OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info("search : productionPlanNo = " + productionPlanNo);

        ProductionPlanningDetailDTO productionPlanningDetailDTO = productionPlanningService.read(productionPlanNo);

        log.info(productionPlanningDetailDTO);

        model.addAttribute("dto", productionPlanningDetailDTO);

        model.addAttribute("pageRequestDTO", orderPageRequestDTO);

    }

    //수정POST
    @PostMapping("/modify")
    public String modify(OrderPageRequestDTO orderPageRequestDTO,
                         @Valid ProductionPlanningDTO productionPlanningDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("productionPlanning modify post.........." + productionPlanningDTO);

        // 에러 처리 ---------------------------------------------------------------------------------------
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = orderPageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("productionPlanNo",
                    productionPlanningDTO.getProductionPlanNo());

            return "redirect:/productionPlanning/modify?" + link;
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

    //제품계약 ProductContract
    @ResponseBody
    @GetMapping("/register/selectContract")
    public PageResponseDTO<ProductContractDTO> getContractList(PageRequestDTO pageRequestDTO) {

        log.info("getContractList");

        PageResponseDTO<ProductContractDTO> responseDTO = productContractService.list(pageRequestDTO);

        return responseDTO;

    }

    @ResponseBody
    @GetMapping("/register/getContract/{contractNo}")
    public ProductContractDetailDTO getContractDTO(@PathVariable("contractNo") int contractNo) {

        log.info("getContractDTO : " + contractNo);

        ProductContractDetailDTO productContractDetailDTO = productContractService.read(contractNo);

        log.info(productContractDetailDTO);

        return productContractDetailDTO;

    }

    //materialRequirementsListService 구현 한 후에 주석 풀기.

//    @ResponseBody
//    @GetMapping("/register/selectMrl")
//    public PageResponseDTO<MaterialRequirementsListDTO> getMrlList(PageRequestDTO pageRequestDTO) {
//
//        log.info("getMrlList");
//
//        PageResponseDTO<MaterialRequirementsListDTO> responseDTO = MaterialRequirementsListService.list(pageRequestDTO);
//
//        return responseDTO;
//
//    }
//    @ResponseBody
//    @GetMapping("/register/getMrl/{mrlNo}")
//    public MaterialRequirementsListDTO getMrlDTO(@PathVariable("mrlNo") int mrlNo) {
//
//        log.info("getMrlDTO : " + mrlNo);
//
//        MaterialRequirementsListDTO materialRequirementsListDTO = MaterialRequirementsListService.read(mrlNo);
//
//        log.info(materialRequirementsListDTO);
//
//        return materialRequirementsListDTO;
//    }


    @ResponseBody
    @GetMapping("/register/getCodeCount/{ProductionPlanCode}")
    public int getCodeCount(@PathVariable("ProductionPlanCode") String productionPlanCode) {

        log.info("getCodeCount : " + productionPlanCode);

        int num = productionPlanningService.getCodeCount(productionPlanCode);

        log.info("num : " + num);

        return num;

    }

    //생산계획상세 (연관 조달 계획 목록)
    @GetMapping("/procurementPlanList")
    public void procurementPlanList(int productionPlanNo, PageRequestDTO pageRequestDTO, Model model) {

        List<MaterialProcurementPlanningDTO> dtoList =
                productionPlanningService.procurementPlanList(productionPlanNo, pageRequestDTO);

        log.info(dtoList);

        model.addAttribute("dtoList", dtoList);
    }

//    @GetMapping("/procurementPlanList")
//    public void planList(int productionPlanNo, PageRequestDTO pageRequestDTO, Model model) {
//
//        List<MaterialProcurementPlanningDetailDTO> dtoList =
//                productionPlanningService.planList(productionPlanNo, pageRequestDTO);
//
//        log.info(dtoList);
//
//        model.addAttribute("dtoList", dtoList);
//    }


    //생산계획진행상태 변경 -> 제품계약에서 제품계약진행상태 변경됨
    @ResponseBody
    @PostMapping(value = "/changeProductionState", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void changeProductionState(@RequestBody Map<String, Object> map){

        int productionPlanNo = Integer.parseInt(map.get("productionPlanNo").toString());
        String state = map.get("state").toString();

        productionPlanningService.changeState(productionPlanNo, state);

    }

    //생산계획완료
    @ResponseBody
    @PostMapping(value = "/completePlan", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void completePlan(@RequestBody Map<String, Object> map) {

        //흐름을 어떻게 가지고 갈 지 생각해보기

        int productionPlanNo = Integer.parseInt(map.get("productionPlanNo").toString());
        int productContractNo = Integer.parseInt(map.get("productContractNo").toString());

        //해당 제품입고 완료
        productionPlanningService.changeState(productionPlanNo, "제품입고완료");

        //제품계약 수량 확인
        int productQuantity = productContractService.read(productContractNo).getProductQuantity();
        log.info("제품 계약 수량 : " + productQuantity);

        //연관 조달 계획중 입고 완료된 수량 확인 -> 입고 완료된 제품 수량 확인
//        int sumOfOrderQuantity = orderService.sumOfOrderQuantity(materialProcurementPlanNo);
//        log.info("발주 완료 수량 : " + sumOfOrderQuantity);

        //비교
//        if(materialRequirementsCount <= sumOfOrderQuantity){
//            log.info("조달 완료 프로세스 시작");
//            //조달 계획 완료
//            materialProcurementPlanningService.completePlan(materialProcurementPlanNo);
//        }
    }


}