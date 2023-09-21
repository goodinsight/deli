package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/materialInventory")
@Log4j2
@RequiredArgsConstructor

public class MaterialInventoryController {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @GetMapping("/materialStockList")
    public void materialStockList(PageRequestDTO pageRequestDTO, Model model, RedirectAttributes redirectAttributes) {

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/materialStockInDetail")
    public void materialStockInDetailListOne(int materialInventoryNo, PageRequestDTO pageRequestDTO, Model model) {

        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.materialStockListOne(materialInventoryNo);

        log.info(materialInventoryDTO);

        model.addAttribute("dto", materialInventoryDTO);

    }



}
