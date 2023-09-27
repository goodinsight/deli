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
import java.util.Map;

@Controller
@RequestMapping("/materialInventory")
@Log4j2
@RequiredArgsConstructor
public class MaterialInventoryController {

    //자재재고 관련 페이지는 Inventory / 재고>입고관리 관련 페이지는 Incoming을 붙임.

    private final MaterialInventoryService materialInventoryService;

    private final OrderService orderService;
    private final MaterialsService materialsService;

    //자재재고 list
    @GetMapping("/listInventory")
    public void listInventory(PageRequestDTO pageRequestDTO, Model model) {

        log.info(pageRequestDTO);

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.listInventory(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    //재고>입고관리 list
    @GetMapping("/listIncoming")
    public void listIncoming(OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info(orderPageRequestDTO);

        String[] states = {"검수완료", "입고검수진행중", "반품진행중", "자재입고완료"};

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


    //자재재고/재고>입고관리 registerGET
    @GetMapping({"/registerInventory", "/registerIncoming"})
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    //자재재고 registerPOST
    @PostMapping("/registerInventory")
    public String registerInventoryPOST(@Valid MaterialInventoryDTO materialInventoryDTO,
                                        BindingResult bindingResult,
                                        RedirectAttributes redirectAttributes, Model model){

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

    //재고>입고관리 registerPOST
    @PostMapping("/registerIncoming")
    public String registerIncomingPOST(@Valid MaterialInventoryDTO materialInventoryDTO,
                                        BindingResult bindingResult,
                                        RedirectAttributes redirectAttributes){

        log.info("incoming post register----------------");

        log.info(materialInventoryDTO);

        if(bindingResult.hasErrors()) {

            log.info("incoming register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/materialInventory/registerIncoming";
        }

//        int orderNo = materialInventoryService.registerInventory(materialInventoryDTO);
        int materialInventoryNo = materialInventoryService.registerIncoming(materialInventoryDTO);

//        redirectAttributes.addFlashAttribute("result", orderNo);
        redirectAttributes.addFlashAttribute("result", materialInventoryNo);

        return "redirect:/materialInventory/listIncoming";
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

    //재고>입고관리 modify
    @PostMapping("/modifyIncoming")
    public String modifyIncoming(PageRequestDTO pageRequestDTO,
                                  @Valid MaterialInventoryDTO materialInventoryDTO,
                                  BindingResult bindingResult,
                                  RedirectAttributes redirectAttributes){

        log.info("incoming modify : " + materialInventoryDTO);

        //에러 처리----

        //-----------

        materialInventoryService.modifyIncoming(materialInventoryDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

//        redirectAttributes.addAttribute("materialInventoryNo", materialInventoryDTO.getMaterialInventoryNo());
        redirectAttributes.addAttribute("orderNo", materialInventoryDTO.getOrderNo());

        return "redirect:/materialIncoming/readIncoming";
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
