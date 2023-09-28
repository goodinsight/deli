package com.deligence.deli.controller;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.domain.Products;
import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.OrderPageRequestDTO;
import com.deligence.deli.dto.OrderPageResponseDTO;
import com.deligence.deli.dto.ProductContractDTO;
import com.deligence.deli.service.ProductContractService;
import com.deligence.deli.service.ProductsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/productContract")
@Log4j2
@RequiredArgsConstructor
public class ProductContractController {

    private final ProductContractService productContractService;

    //비동기처리 -> Products, CooperatorClient
    private final ProductsService productsService;
//    private final CooperatorClientService cooperatorClientService; -> 구현 후 주석 풀 것

    @GetMapping("/list")
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model){

        log.info(orderPageRequestDTO);

        OrderPageResponseDTO<ProductContractDTO> responseDTO = productContractService.listWithState(orderPageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

}
