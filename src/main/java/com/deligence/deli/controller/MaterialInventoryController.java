package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInventoryService;
import com.deligence.deli.service.MaterialsService;
import com.deligence.deli.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/materialInventory")
@Log4j2
@RequiredArgsConstructor

public class MaterialInventoryController {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private MaterialsService materialsService;

    @GetMapping("/materialInlist")
    public void materialInListAll(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<OrderDTO> responseDTO = orderService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);


    }

    @GetMapping("/materialIndetail")
    public void materialInRead(int materialInventoryNo, PageRequestDTO pageRequestDTO, Model model) {

//        OrderDTO materialInventoryDTO = materialInventoryService.materialInRead(materialInventoryNo);
//
//        log.info(materialInventoryDTO);
//
//        int num = (int) (Math.random() * 9) + 0;
//
//        model.addAttribute("num", num);
//
//        model.addAttribute("dto", materialInventoryDTO);
//
//        int result = materialInventoryDTO.getOrder().getOrderQuantity() - num;
//
//        model.addAttribute("result", result);

    }


}
