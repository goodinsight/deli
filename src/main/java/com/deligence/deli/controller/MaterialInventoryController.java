package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInOutHistoryService;
import com.deligence.deli.service.MaterialInventoryService;
import com.deligence.deli.service.MaterialsService;
import com.deligence.deli.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/materialInventory")
@Log4j2
@RequiredArgsConstructor
public class MaterialInventoryController {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    private final MaterialInventoryService materialInventoryService;

    private final OrderService orderService;
    private final MaterialInOutHistoryService materialInOutHistoryService;
    private final MaterialsService materialsService;

    //자재재고 list
    @GetMapping("/listInventory")
    public void listInventory(PageRequestDTO pageRequestDTO, Model model) {

        log.info(pageRequestDTO);

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.listInventory(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    
    //자재재고/재고>입고관리 registerGET
//    @GetMapping({"/registerInventory", "/registerIncoming"})
    @GetMapping({"/registerInventory"})
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    //자재재고 registerPOST
    @PostMapping("/registerInventory")
    public String registerInventoryPOST(@Valid MaterialInventoryDTO materialInventoryDTO,
                                        BindingResult bindingResult,
                                        RedirectAttributes redirectAttributes){

        log.info("material inventory post register----------------");

        log.info(materialInventoryDTO);

        if(bindingResult.hasErrors()) {

            log.info("material inventory register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/materialInventory/registerInventory";
        }

        int materialInventoryNo = materialInventoryService.registerInventory(materialInventoryDTO);

        redirectAttributes.addFlashAttribute("result", materialInventoryNo);

        return "redirect:/materialInventory/listInventory";
    }

    //자재재고 read
    @GetMapping({"/readInventory", "/modifyInventory"})
    public void readInventory(int materialInventoryNo, PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : materialInventoryNo = " + materialInventoryNo);

        MaterialInventoryDetailDTO materialInventoryDetailDTO = materialInventoryService.readInventory(materialInventoryNo);

        log.info(materialInventoryDetailDTO);

        model.addAttribute("dto", materialInventoryDetailDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);
    }

    //자재재고 modify
    @PostMapping("/modifyInventory")
    public String modifyInventory(PageRequestDTO pageRequestDTO,
                                  @Valid MaterialInventoryDTO materialInventoryDTO,
                                  BindingResult bindingResult,
                                  RedirectAttributes redirectAttributes){

        log.info("inventory modify : " + materialInventoryDTO);

        //에러 처리----

        //-----------

        materialInventoryService.modifyInventory(materialInventoryDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("materialInventoryNo", materialInventoryDTO.getMaterialInventoryNo());

        return "redirect:/materialInventory/readInventory";
    }

    @GetMapping("/listIncoming")
    public void listIncoming(OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info(orderPageRequestDTO);

        String[] states = {"검수완료", "입고검수진행중", "반품진행중", "자재입고완료", "발주완료"};

        OrderPageResponseDTO<OrderDTO> responseDTO =
                orderService.listIncoming(orderPageRequestDTO, states);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    @GetMapping("/readIncoming")
    public void readIncoming(int orderNo, OrderPageRequestDTO orderPageRequestDTO, Model model){

        log.info("search : orderNo = " + orderNo);

        OrderDetailDTO orderDetailDTO = orderService.read(orderNo);

        log.info(orderDetailDTO);

        model.addAttribute("dto", orderDetailDTO);

        model.addAttribute("pageRequestDTO", orderPageRequestDTO);

    }


    @PostMapping("/completeIncoming")
    public String completeIncoming(OrderPageRequestDTO orderPageRequestDTO,
                                   @Valid OrderDetailDTO orderDetailDTO,
                                   BindingResult bindingResult,
                                   RedirectAttributes redirectAttributes){

        log.info("order modify : " + orderDetailDTO);

        String materialCode = orderDetailDTO.getMaterialCode();
        int materialIncomingQuantity = orderDetailDTO.getOrderQuantity();
        int employeeNo = orderDetailDTO.getEmployeeNo();
        String employeeName = orderDetailDTO.getEmployeeName();

        //해당 재고 탐색
        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.readByMaterialCode(materialCode);

        log.info(materialInventoryDTO);

        //재고 상승
        materialInventoryDTO.setMaterialIncomingQuantity(materialInventoryDTO.getMaterialIncomingQuantity()+materialIncomingQuantity); // 입고 수량 +
        materialInventoryDTO.setMaterialStock(materialInventoryDTO.getMaterialStock()+materialIncomingQuantity); // 재고 수량 +
        materialInventoryDTO.setMaterialTotalInventoryPayments(materialInventoryDTO.getMaterialTotalInventoryPayments() + materialInventoryDTO.getMaterialSupplyPrice()*materialIncomingQuantity);

        log.info(materialInventoryDTO);

        materialInventoryService.modifyInventory(materialInventoryDTO);


        //재고 입고 기록 등록
        MaterialInOutHistoryDTO materialInOutHistoryDTO = MaterialInOutHistoryDTO.builder()
                .materialInventoryNo(materialInventoryDTO.getMaterialInventoryNo())
                .inOutSeparator("입고")
                .quantity(materialIncomingQuantity)
                .historyDate(LocalDate.now())
                .employeeNo(employeeNo)
                .employeeName(employeeName)
                .build();

        log.info(materialInOutHistoryDTO);

        materialInOutHistoryService.register2(materialInOutHistoryDTO);


        return "redirect:/materialInventory/listIncoming";

    }


    @ResponseBody
    @PostMapping(value = "/changeOrderState", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void changeOrderState(@RequestBody Map<String, Object> map){

        int orderNo = Integer.parseInt(map.get("orderNo").toString());
        log.info("orderNo : " + orderNo);
        String state = map.get("state").toString();
        log.info("state : " + state);

        orderService.changeState(orderNo, state);

    }

}
