package com.deligence.deli.controller;

import com.deligence.deli.service.MaterialInventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/materialInventory")
@Log4j2
@RequiredArgsConstructor
public class MaterialInventoryController {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @GetMapping("/materialStockInDetail")
    public void materialStockInDetailListOne() {

    }

    @PostMapping("/materialStockInDetail")
    public void materialStockInDetailListOnePost() {

    }

}
