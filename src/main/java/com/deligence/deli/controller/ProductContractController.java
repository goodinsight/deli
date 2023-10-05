package com.deligence.deli.controller;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.dto.*;
import com.deligence.deli.service.CooperatorClientService;
import com.deligence.deli.service.ProductContractService;
import com.deligence.deli.service.ProductsService;
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

@Controller
@RequestMapping("/productContract")
@Log4j2
@RequiredArgsConstructor
public class ProductContractController {

    private final ProductContractService productContractService;

    //비동기처리 -> Products, CooperatorClient
    private final ProductsService productsService;
    private final CooperatorClientService cooperatorClientService;

    @GetMapping("/list")
    public void list(OrderPageRequestDTO orderPageRequestDTO, Model model){

        log.info(orderPageRequestDTO);

        OrderPageResponseDTO<ProductContractDTO> responseDTO = productContractService.listWithState(orderPageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register")
    public String registerPOST(@Valid ProductContractDTO productContractDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes){

        log.info("productContract post register----------------");

        log.info(productContractDTO);

        if(bindingResult.hasErrors()) {

            log.info("productContract register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/productContract/register";
        }


        int productContractNo = productContractService.register(productContractDTO);

        redirectAttributes.addFlashAttribute("result", productContractNo);

        return "redirect:/productContract/list";

    }

    @GetMapping({"/read", "/modify"})
    public void read(int productContractNo, OrderPageRequestDTO orderPageRequestDTO, Model model) {

        log.info("search : productContractNo = " + productContractNo);

        ProductContractDetailDTO productContractDetailDTO = productContractService.read(productContractNo);

        log.info(productContractDetailDTO);

        model.addAttribute("dto", productContractDetailDTO);

        model.addAttribute("pageRequestDTO", orderPageRequestDTO);

    }

    @PostMapping("/modify")
    public String modify(OrderPageRequestDTO orderPageRequestDTO,
                         @Valid ProductContractDTO productContractDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("productContract modify : " + productContractDTO);

        //에러 처리------------------------------------------------------------------------
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = orderPageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("productContractNo",
                    productContractDTO.getProductContractNo());

            return "redirect:/productContract/modify?"+link;
        }
        //-----------------------------------------------------------------------------------

        productContractService.modify(productContractDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("productContractNo", productContractDTO.getProductContractNo());

        return "redirect:/productContract/read";
    }

    @PostMapping("/remove")
    public String remove(int productContractNo, RedirectAttributes redirectAttributes) {

        log.info("remove post...." + productContractNo);

        productContractService.remove(productContractNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/productContract/list";

    }


    // 비동기 처리 -------------------------------------------------------

    @ResponseBody
    @GetMapping("/register/selectProduct")
    public PageResponseDTO<ProductsDTO> getProductList(PageRequestDTO pageRequestDTO){

        log.info("getProductList");

//        //클라이언트 계약 상태 : 계약중(e)  검색
//        pageRequestDTO.setType("e");
//        pageRequestDTO.setKeyword("계약중");

        PageResponseDTO<ProductsDTO> responseDTO = productsService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getProduct/{productsNo}")
    public ProductsDTO getProductDTO(@PathVariable("productsNo") int productsNo) {

        log.info("getProductDTO : " + productsNo);

        ProductsDTO productsDTO = productsService.readOne(productsNo);

        log.info(productsDTO);

        return productsDTO;

    }

    //cooperatorClientService만들면 비동기처리  --------------------------------
    @ResponseBody
    @GetMapping("/register/selectClient")
    public PageResponseDTO<CooperatorClientDTO> getClientList(PageRequestDTO pageRequestDTO){

        log.info("getClientList");

        PageResponseDTO<CooperatorClientDTO> responseDTO = cooperatorClientService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getClient/{clientsNo}")
    public CooperatorClientDTO getClientDTO(@PathVariable("clientsNo") int clientsNo) {

        log.info("getClientDTO : " + clientsNo);

        CooperatorClientDTO cooperatorClientDTO = cooperatorClientService.read(clientsNo);

        log.info(cooperatorClientDTO);

        return cooperatorClientDTO;

    }



    //--------------------------------------------------------------------------

    @ResponseBody
    @GetMapping("/register/getCodeCount/{productContractCode}")
    public int getCodeCount(@PathVariable("productContractCode") String productContractCode){

        log.info("getCodeCount : " + productContractCode);

        int num = productContractService.getCodeCount(productContractCode);

        log.info("num : " + num);

        return num;

    }

    @ResponseBody
    @PostMapping(value = "/changeProductContractState", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void changeProductContractState(@RequestBody Map<String, Object> map){

        int productContractNo = Integer.parseInt(map.get("productContractNo").toString());
        String state = map.get("state").toString();

        productContractService.changeState(productContractNo, state);

    }

}
