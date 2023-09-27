package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import com.deligence.deli.service.MaterialInventoryService;
import com.deligence.deli.service.MaterialsService;
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
@RequestMapping("/material")
@Log4j2
@RequiredArgsConstructor
public class MaterialsController {

    @Value("${com.deligence.upload.path}") //import 시에 springframework으로 시작하는 Value
    private String uploadPath;

    private final MaterialsService materialsService;

    private final MaterialInventoryService materialInventoryService;

    @GetMapping("/list")//자재 전체목록
    public void list(PageRequestDTO pageRequestDTO, Model model) {


        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

       // PageResponseDTO<MaterialListAllDTO> responseDTO = materialsService.listWithAll(pageRequestDTO);


        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

    @GetMapping("/register") //자재 등록 (자재 employee6)
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register") //자재 등록
    public String registerPost(@Valid MaterialsDTO materialsDTO, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        log.info("material POST register...");

        if(bindingResult.hasErrors()) {
            log.info("has errors..");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/material/register";
        }

        log.info(materialsDTO);

        int materialNo = materialsService.register(materialsDTO);

        //----자재 재고 등록---------

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialCode(materialsDTO.getMaterialCode())
                .materialName(materialsDTO.getMaterialName())
                .materialType(materialsDTO.getMaterialType())
                .materialSupplyPrice(materialsDTO.getMaterialSupplyPrice())
                .materialIncomingQuantity(0)
                .materialOutgoingQuantity(0)
                .materialStock(0)
                .materialNo(materialNo)
                .materialTotalInventoryPayments(0L)
                .build();

        materialInventoryService.registerInventory(materialInventoryDTO);

        //-----------

        redirectAttributes.addFlashAttribute("result", materialNo);

        return "redirect:/material/list";
    }

    @GetMapping({"/read", "/modify"}) //자재 조회, 수정
    public void read(int materialNo, PageRequestDTO pageRequestDTO, Model model){

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        log.info(materialsDTO);
        log.info(pageRequestDTO);

        model.addAttribute("dto",materialsDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);
    }

    @PostMapping("/modify") //자재 수정
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid MaterialsDTO materialsDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes){

        log.info("Materials modify post....." + materialsDTO);

        //에러 처리 ------------------------------------------------------------------------------
        if(bindingResult.hasErrors()) {
            log.info("hss errors......");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("materialNo", materialsDTO.getMaterialNo());

            return "redirect:/material/modify?"+link;
        }
        //--------------------------------------------------------------------------------------------

        materialsService.modify(materialsDTO);

        redirectAttributes.addFlashAttribute("result","modifed");

        redirectAttributes.addAttribute("materialNo", materialsDTO.getMaterialNo());

        return "redirect:/material/read";
    }

    @PostMapping("/delete") //자재삭제
    public String remove(MaterialsDTO materialsDTO, RedirectAttributes redirectAttributes) {

        int materialNo = materialsDTO.getMaterialNo();
        log.info("remove post..." + materialNo);

        materialsService.delete(materialNo);

        //게시물이 데이터베이스상에서 삭제되었다면 첨부파일 삭제
        log.info(materialsDTO.getFileNames());
        List<String> fileNames = materialsDTO.getFileNames();
        if(fileNames != null && fileNames.size() > 0 ){
            removeFiles(fileNames);
        }

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/material/list";
    }

    private void removeFiles(List<String> files) {

        for(String materialImgName : files) {

            Resource resource = new FileSystemResource(uploadPath + File.separator + materialImgName);

            String resourceName = resource.getFilename();

            try {
                String contentType = Files.probeContentType(resource.getFile().toPath());

                resource.getFile().delete();

                // 섬네일이 존재한다면
                if(contentType.startsWith("image")) {

                    File thumbnailFile = new File(uploadPath + File.separator + "s_" + materialImgName);

                    thumbnailFile.delete();
                }

            } catch(Exception e) {
                log.error(e.getMessage());
            }
        } // end for

    }

    @ResponseBody
    @GetMapping("/register/getCodeCount/{materialCode}") //자재코드생성
    public int getCodeCount(@PathVariable("materialCode") String materialCode){

        log.info("getCodeCount : " + materialCode);

        int num = materialsService.getCodeCount(materialCode);

        log.info("num : " + num);

        return num;

    }


}
