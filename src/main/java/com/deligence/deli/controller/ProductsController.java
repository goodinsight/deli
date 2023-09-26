package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.ProductsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.io.File;
import java.nio.file.Files;
import java.util.List;

@Controller
@RequestMapping("/product")
@Log4j2
@RequiredArgsConstructor
public class ProductsController {

    @Value("${com.deligence.upload.path}") //import 시에 springframework으로 시작하는 Value
    private String uploadPath;

    private final ProductsService productsService;

    @GetMapping("/list")//제품 전체목록
    public void list(PageRequestDTO pageRequestDTO, Model model) {


        PageResponseDTO<ProductsDTO> responseDTO = productsService.list(pageRequestDTO);

       // PageResponseDTO<ProductListAllDTO> responseDTO = productsService.listWithAll(pageRequestDTO);


        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    @GetMapping("/register") //제품 등록
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register") //자재 등록
    public String registerPost(@Valid ProductsDTO productsDTO, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        log.info("product POST register...");

        if(bindingResult.hasErrors()) {
            log.info("has errors..");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/product/register";
        }

        log.info(productsDTO);

        int productNo = productsService.register(productsDTO);

        redirectAttributes.addFlashAttribute("result", productNo);

        return "redirect:/product/list";
    }

    @GetMapping({"/read", "/modify"}) //자재 조회, 수정
    public void read(int productNo, PageRequestDTO pageRequestDTO, Model model){

        ProductsDTO productsDTO = productsService.readOne(productNo);

        log.info(productsDTO);
        log.info(pageRequestDTO);

        model.addAttribute("dto",productsDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);
    }

    @PostMapping("/modify") //자재 수정
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid ProductsDTO productsDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("Products modify post....." + productsDTO);

        //에러 처리 ------------------------------------------------------------------------------
        if(bindingResult.hasErrors()) {
            log.info("hss errors......");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("productNo", productsDTO.getProductNo());

            return "redirect:/product/modify?"+link;
        }
        //--------------------------------------------------------------------------------------------

        productsService.modify(productsDTO);

        redirectAttributes.addFlashAttribute("result","modifed");

        redirectAttributes.addAttribute("productNo", productsDTO.getProductNo());

        return "redirect:/product/read";
    }

    @PostMapping("/delete") //자재삭제
    public String remove(ProductsDTO productsDTO, RedirectAttributes redirectAttributes) {

        int productNo = productsDTO.getProductNo();
        log.info("remove post..." + productNo);

        productsService.delete(productNo);

        //게시물이 데이터베이스상에서 삭제되었다면 첨부파일 삭제
        log.info(productsDTO.getFileNames());
        List<String> fileNames = productsDTO.getFileNames();
        if(fileNames != null && fileNames.size() > 0 ){
            removeFiles(fileNames);
        }

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/product/list";
    }

    private void removeFiles(List<String> files) {

        for(String productImgName : files) {

            Resource resource = new FileSystemResource(uploadPath + File.separator + productImgName);

            String resourceName = resource.getFilename();

            try {
                String contentType = Files.probeContentType(resource.getFile().toPath());

                resource.getFile().delete();

                // 섬네일이 존재한다면
                if(contentType.startsWith("image")) {

                    File thumbnailFile = new File(uploadPath + File.separator + "s_" + productImgName);

                    thumbnailFile.delete();
                }

            } catch(Exception e) {
                log.error(e.getMessage());
            }
        } // end for

    }

    @ResponseBody
    @GetMapping("/register/getCodeCount/{productCode}") //자재코드생성
    public int getCodeCount(@PathVariable("productCode") String productCode){

        log.info("getCodeCount : " + productCode);

        int num = productsService.getCodeCount(productCode);

        log.info("num : " + num);

        return num;

    }


}
