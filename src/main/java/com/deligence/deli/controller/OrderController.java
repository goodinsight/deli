package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialProcurementContractService;
import com.deligence.deli.service.MaterialProcurementPlanningService;
import com.deligence.deli.service.MaterialsService;
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
import java.util.ArrayList;
import java.util.List;
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
    private final MaterialsService materialsService;

    @GetMapping("/list")
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model){

        OrderPageResponseDTO<OrderDTO> responseDTO = orderService.listWithState(orderPageRequestDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register")
    public String registerPOST(@Valid OrderDTO orderDTO,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes){

        if(bindingResult.hasErrors()) {

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/order/register";
        }


        int orderNo = orderService.register(orderDTO);

        redirectAttributes.addFlashAttribute("result", orderNo);

        return "redirect:/order/list";

    }

    @GetMapping({"/read", "/modify"})
    public void read(int orderNo, OrderPageRequestDTO orderPageRequestDTO, Model model) {

        OrderDetailDTO orderDetailDTO = orderService.read(orderNo);

        model.addAttribute("dto", orderDetailDTO);

        model.addAttribute("pageRequestDTO", orderPageRequestDTO);

    }


    @PostMapping("/modify")
    public String modify(OrderPageRequestDTO orderPageRequestDTO,
                         @Valid OrderDTO orderDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        orderService.modify(orderDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("orderNo", orderDTO.getOrderNo());

        return "redirect:/order/read";
    }

    @PostMapping("/remove")
    public String remove(int orderNo){

        orderService.remove(orderNo);

        return "redirect:/order/list";
    }


    @GetMapping("/chart")
    public void chart(){

    }

    // 비동기 처리 -------------------------------------------------------

    @ResponseBody
    @GetMapping("/register/planList")
    public OrderPageResponseDTO<MaterialProcurementPlanningDTO> getPlanList(OrderPageRequestDTO orderPageRequestDTO){

        //조달 계획 상태 : 진행중  검색
        orderPageRequestDTO.setState("진행중");

        OrderPageResponseDTO<MaterialProcurementPlanningDTO> responseDTO = materialProcurementPlanningService.listWithState(orderPageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getPlan/{planNo}")
    public MaterialProcurementPlanningDetailDTO getPlanDTO(@PathVariable("planNo") int planNo) {

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO = materialProcurementPlanningService.read(planNo);

        return materialProcurementPlanningDetailDTO;

    }

    @ResponseBody
    @GetMapping("/register/contractList")
    public PageResponseDTO<MaterialProcurementContractDTO> getContractList(PageRequestDTO pageRequestDTO){

        PageResponseDTO<MaterialProcurementContractDTO> responseDTO = materialProcurementContractService.list(pageRequestDTO);

        return responseDTO;

    }

    @ResponseBody
    @GetMapping("/register/getContract/{contractNo}")
    public MaterialProcurementContractDetailDTO getContractDTO(@PathVariable("contractNo") int contractNo){

        MaterialProcurementContractDetailDTO materialProcurementContractDetailDTO = materialProcurementContractService.read(contractNo);

        return materialProcurementContractDetailDTO;

    }

    @ResponseBody
    @GetMapping("/register/getCodeCount/{orderCode}")
    public int getCodeCount(@PathVariable("orderCode") String orderCode){

        int num = orderService.getCodeCount(orderCode);

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

        //연관 계획중 발주 완료된 수량 확인
        int sumOfOrderQuantity = orderService.sumOfOrderQuantity(materialProcurementPlanNo);

        //비교
        if(materialRequirementsCount <= sumOfOrderQuantity){
            //조달 계획 완료
            materialProcurementPlanningService.completePlan(materialProcurementPlanNo);

            //생산계획 관련 비교 및 완료 작업 -----------------------------------------------

            //--------------------------------------------------------------------------

        }


    }

    @ResponseBody
    @PostMapping(value = "/changeOrderState", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void changeOrderState(@RequestBody Map<String, Object> map){

        int orderNo = Integer.parseInt(map.get("orderNo").toString());
        String state = map.get("state").toString();

        orderService.changeState(orderNo, state);

    }


    @ResponseBody
    @GetMapping("/chart/materialList")
    public PageResponseDTO<MaterialsDTO> getMaterialList(PageRequestDTO pageRequestDTO){

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/chart/getMaterial/{materialNo}")
    public MaterialsDTO getMaterialDTO(@PathVariable("materialNo") int materialNo) {

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        return materialsDTO;

    }

    @ResponseBody
    @PostMapping(value = "/chart/getChartByMaterialName", consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Integer> getOrderChartByMaterialName(@RequestBody Map<String, Object> map){

        String materialName = map.get("materialName").toString();
        String year = map.get("year").toString();
        String state = map.get("state").toString();

        Map<String, Integer> result = orderService.orderChart(materialName, year, state);

        List<Integer> chartData = new ArrayList<>();

        for(int i = 1; i <= 12; i++){

            chartData.add(result.getOrDefault(String.valueOf(i),0));

        }

        return chartData;

    }

    // 검수 페이지 매핑 ------------------------------------------------------------------------------------

    @GetMapping("/progressInspection")
    public void toProgressInspectionPage(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, int orderNo,PageRequestDTO pageRequestDTO, Model model){

        model.addAttribute("orderNo", orderNo);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

}
