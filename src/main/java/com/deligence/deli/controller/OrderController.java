package com.deligence.deli.controller;

import com.deligence.deli.dto.OrderDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/order")
@Log4j2
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/list")
    public void list(PageRequestDTO pageRequestDTO, Model model){

        PageResponseDTO<OrderDTO> responseDTO = orderService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(){

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

        OrderDTO orderDTO = orderService.read(orderNo);

        log.info(orderDTO);

        model.addAttribute("dto", orderDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }


}
