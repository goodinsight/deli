package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInventoryService;
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
    private OrderService orderService;

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @GetMapping("/stockList")
    public void stockList(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<OrderDTO> responseDTO = orderService.list(pageRequestDTO);

        for (int i = 0; i <responseDTO.getDtoList().size(); i++) {

            if (responseDTO.getDtoList().get(i).getOrderState().equals("검수완료")){

                log.info(responseDTO);

                model.addAttribute("responseDTO", responseDTO);

            }

        }

    }

    @GetMapping("/materialStockList")
    public void materialStockList(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/materialStockDetail")
    public void materialStockRead(int materialInventoryNo, PageRequestDTO pageRequestDTO, Model model) {

        MaterialInventoryDetailDTO materialInventoryDetailDTO = materialInventoryService.materialStockRead(materialInventoryNo);

        log.info(materialInventoryDetailDTO);

        model.addAttribute("dto", materialInventoryDetailDTO);

    }

    @GetMapping("/materialStockInDetail")
    public void materialInRead(int orderNo, PageRequestDTO pageRequestDTO, Model model) {

        OrderDetailDTO orderDetailDTO = orderService.read(orderNo);

        log.info(orderDetailDTO);

        int num = (int) (Math.random() * 9) + 0;

        model.addAttribute("num", num);

        model.addAttribute("dto", orderDetailDTO);

        int result = orderDetailDTO.getOrderQuantity() - num;

        model.addAttribute("result", result);

    }

}
