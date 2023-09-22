package com.deligence.deli.controller;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.dto.*;
import com.deligence.deli.service.EmployeeService;
import com.deligence.deli.service.MaterialProcurementContractService;
import com.deligence.deli.service.MaterialsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

//자재조달계약 Controller
@Controller
@RequestMapping("/materialProcurementContract")
@Log4j2
@RequiredArgsConstructor
public class MaterialProcurementContractController {

    private final MaterialProcurementContractService materialProcurementContractService;

    //자재정보(일련번호->코드,분류,이름) 조회 구현
    private final MaterialsService materialsService;

    //자재협력회사정보(협력회사일련번호->협력회사명,대표명, 연락처) 조회 구현
//    private final CooperatorSupplierService cooperatorSupplierService;

    //담당자정보(사원일련번호->사원명) 조회구현
    private EmployeeService employeeService;

    @GetMapping("/list")
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<MaterialProcurementContractDTO> responseDTO =
                materialProcurementContractService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")    //자재조달계약 employee2
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model) {

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("register")
    public String registerPOST(@Valid MaterialProcurementContractDTO materialProcurementContractDTO,
                               BindingResult bindingResult, RedirectAttributes redirectAttributes) {

        log.info("materialProcurementContact post register........");

        log.info(materialProcurementContractDTO);

        if (bindingResult.hasErrors()) {

            log.info("materialProcurementContract register error");

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/materialProcurementContract/register";
        }

        int materialProcurementContractNo =
                materialProcurementContractService.register(materialProcurementContractDTO);

        redirectAttributes.addFlashAttribute("result", materialProcurementContractNo);

        return "redirect:/materialProcurementContract/list";
    }

    @GetMapping({"/read", "modify"})
    public void read(int materialProcurementContractNo, PageRequestDTO pageRequestDTO, Model model) {

        log.info("search : materialProcurementContractNo = " + materialProcurementContractNo);

        MaterialProcurementContractDetailDTO materialProcurementContractDetailDTO =
                materialProcurementContractService.read(materialProcurementContractNo);

        log.info(materialProcurementContractDetailDTO);

        model.addAttribute("dto", materialProcurementContractDetailDTO);

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    @PostMapping("/modify")
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid MaterialProcurementContractDTO materialProcurementContractDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes) {

        log.info("materialProcurementContract modify : " + materialProcurementContractDTO);

        //에러 처리 ------------------------------------------------------------------------------
        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors() );

            redirectAttributes.addAttribute("materialProcurementContractNo",
                    materialProcurementContractDTO.getMaterialProcurementContractNo());

            return "redirect:/materialProcurementContract/modify?"+link;
        }
        //--------------------------------------------------------------------------------------------

        materialProcurementContractService.modify(materialProcurementContractDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("materialProcurementContractNo",
                materialProcurementContractDTO.getMaterialProcurementContractNo());

        return "redirect:/materialProcurementContract/read";

    }

    @PostMapping("/remove")
    public String remove(int materialProcurementContractNo, RedirectAttributes redirectAttributes) {

        log.info("remove post...." + materialProcurementContractNo);

        materialProcurementContractService.remove(materialProcurementContractNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/materialProcurementContract/list";

    }

    //비동기처리 -----------------------------------------------------
    //자재코드클릭->자재목록, 협력회사이름클릭->협력회사목록
    @ResponseBody
    @GetMapping("/register/selectMaterial")
    public PageResponseDTO<MaterialsDTO> getMaterialList(PageRequestDTO pageRequestDTO){

        log.info("getMaterialList");

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        return responseDTO;
    }

    @ResponseBody
    @GetMapping("/register/getMaterial/{materialsNo}")
    public MaterialsDTO getMaterialDTO(@PathVariable("materialsNo") int materialsNo) {

        log.info("getMaterialDTO : " + materialsNo);

        MaterialsDTO materialsDTO = materialsService.readOne(materialsNo);

        log.info(materialsDTO);

        return materialsDTO;

    }

    //자재조달협력회사 Service만들면 주석 풀기
    /*
    @ResponseBody
    @GetMapping("/materialProcurementContract/register/selectSupplier")
    public PageResponseDTO<CooperatorSupplierDTO> getSupplierList(PageRequestDTO pageRequestDTO){

        log.info("getSupplierList");

        PageResponseDTO<CooperatorSupplierDTO> responseDTO = cooperatorSupplierService.list(pageRequestDTO);

        return responseDTO;

    }

    @ResponseBody
    @GetMapping("/materialProcurementContract/register/getSupplier/{suppliersNo}")
    public CooperatorSupplierDTO getSupplierDTO(@PathVariable("suppliersNo") int suppliersNo){

        log.info("getSupplierDTO : " + suppliersNo);

        CooperatorSupplierDTO cooperatorSupplierDTO = cooperatorSupplierService.read(suppliersNo);

        log.info(cooperatorSupplierDTO);

        return cooperatorSupplierDTO;

    }
*/


    @ResponseBody
    @GetMapping("/register/getCodeCount/{materialProcurementContractCode}")
    public int getCodeCount(@PathVariable("materialProcurementContractCode") String materialProcurementContractCode){

        log.info("getCodeCount : " + materialProcurementContractCode);

        int num = materialProcurementContractService.getCodeCount(materialProcurementContractCode);

        log.info("num : " + num);

        return num;

    }
}
