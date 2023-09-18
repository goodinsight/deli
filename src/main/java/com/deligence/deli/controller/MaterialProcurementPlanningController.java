package com.deligence.deli.controller;

//생산계획 컨트롤러

import com.deligence.deli.dto.MaterialProcurementPlanningDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.MaterialProcurementPlanningService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/materialProcurementPlanning")
@Log4j2
@RequiredArgsConstructor
public class MaterialProcurementPlanningController {

    private final MaterialProcurementPlanningService materialProcurementPlanningService;

    //오류 발생 -> 이전과 같은 페이징 문제 -> Entity속성명 캐멀방식으로 변경 후 해결.
    @GetMapping("/list")    //목록
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<MaterialProcurementPlanningDTO> responseDTO =
                materialProcurementPlanningService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }

}
