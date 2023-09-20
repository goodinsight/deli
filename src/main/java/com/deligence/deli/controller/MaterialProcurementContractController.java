package com.deligence.deli.controller;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.dto.MaterialProcurementContractDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.EmployeeService;
import com.deligence.deli.service.MaterialProcurementContractService;
import com.deligence.deli.service.MaterialsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
}
