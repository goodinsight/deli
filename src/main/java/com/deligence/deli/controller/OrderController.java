package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialProcurementContractService;
import com.deligence.deli.service.MaterialProcurementPlanningService;
import com.deligence.deli.service.OrderService;
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
import java.util.Map;
import java.util.Objects;

@Controller
@RequestMapping("/order")
@Log4j2
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    private final MaterialProcurementPlanningService materialProcurementPlanningService;
    private final MaterialProcurementContractService materialProcurementContractService;

    @GetMapping("/list")
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model){

        log.info(orderPageRequestDTO);

        OrderPageResponseDTO<OrderDTO> responseDTO = orderService.listWithState(orderPageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register")
    public String registerPOST(@Valid OrderDTO orderDTO,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes){

        log.info("order post register----------------");

        log.info(orderDTO);

        if(bindingResult.hasErrors()) {

            log.info("order register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/order/register";
        }


        int orderNo = orderService.register(orderDTO);

        redirectAttributes.addFlashAttribute("result", orderNo);

        return "redirect:/order/list";

    }

    @GetMapping({"/read", "/modify"})
    public void read(int orderNo,PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : orderNo = " + orderNo);

        OrderDetailDTO orderDetailDTO = orderService.read(orderNo);

        log.info(orderDetailDTO);

        model.addAttribute("dto", orderDetailDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }


    @PostMapping("/modify")
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid OrderDTO orderDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("order modify : " + orderDTO);

        //에러 처리----

        //-----------

        orderService.modify(orderDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("orderNo", orderDTO.getOrderNo());

        return "redirect:/order/read";
    }

    // 비동기 처리 -------------------------------------------------------

    @ResponseBody
    @GetMapping("/register/selectPlan")
    public PageResponseDTO<MaterialProcurementPlanningDTO> getPlanList(PageRequestDTO pageRequestDTO){

        log.info("getPlanList");

        //조달 계획 상태 : 진행중  검색
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

    @ResponseBody
    @GetMapping("/register/selectContract")
    public PageResponseDTO<MaterialProcurementContractDTO> getContractList(PageRequestDTO pageRequestDTO){

        log.info("getContractList");

        PageResponseDTO<MaterialProcurementContractDTO> responseDTO = materialProcurementContractService.list(pageRequestDTO);

        return responseDTO;

    }

    @ResponseBody
    @GetMapping("/register/getContract/{contractNo}")
    public MaterialProcurementContractDetailDTO getContractDTO(@PathVariable("contractNo") int contractNo){

        log.info("getContractDTO : " + contractNo);

        MaterialProcurementContractDetailDTO materialProcurementContractDetailDTO = materialProcurementContractService.read(contractNo);

        log.info(materialProcurementContractDetailDTO);

        return materialProcurementContractDetailDTO;

    }

    @ResponseBody
    @GetMapping("/register/getCodeCount/{orderCode}")
    public int getCodeCount(@PathVariable("orderCode") String orderCode){

        log.info("getCodeCount : " + orderCode);

        int num = orderService.getCodeCount(orderCode);

        log.info("num : " + num);

        return num;

    }

    @ResponseBody
    @PostMapping(value = "/completeOrder", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void completeOrder(@RequestBody Map<String, Object> map){

        int orderNo = Integer.parseInt(map.get("orderNo").toString());
        int materialProcurementPlanNo = Integer.parseInt(map.get("materialProcurementPlanNo").toString());


        //해당 발주 완료
        orderService.changeState(orderNo, "발주완료");

        //조달 계획 소요량 확인
        int materialRequirementsCount = materialProcurementPlanningService.read(materialProcurementPlanNo).getMaterialRequirementsCount();
        log.info("조달 계획 : " + materialRequirementsCount);

        //연관 계획중 발주 완료된 수량 확인
        int sumOfOrderQuantity = orderService.sumOfOrderQuantity(materialProcurementPlanNo);
        log.info("발주 완료 수량 : " + sumOfOrderQuantity);

        //비교
        if(materialRequirementsCount <= sumOfOrderQuantity){
            log.info("조달 완료 프로세스 시작");
            //조달 계획 완료
            materialProcurementPlanningService.completePlan(materialProcurementPlanNo);
        }


    }

    // 검수 페이지 매핑 ------------------------------------------------------------------------------------

    @GetMapping("/progressInspection")
    public void toProgressInspectionPage(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, int orderNo,PageRequestDTO pageRequestDTO, Model model){

        model.addAttribute("orderNo", orderNo);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

}
