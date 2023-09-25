package com.deligence.deli.controller;

import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProgressInspectionDTO;
import com.deligence.deli.service.OrderService;
import com.deligence.deli.service.ProgressInspectionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/progressInspection")
@Log4j2
@RequiredArgsConstructor
public class ProgressInspectionController {

    private final ProgressInspectionService progressInspectionService;

    private final OrderService orderService;

    @PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Integer> register(@Valid @RequestBody ProgressInspectionDTO progressInspectionDTO,
                                         BindingResult bindingResult) throws BindException {

        if(bindingResult.hasErrors()){
            throw new BindException(bindingResult);
        }

        Map<String, Integer> resultMap = new HashMap<>();

        Integer progressInspectionNo = progressInspectionService.register(progressInspectionDTO);

        resultMap.put("progressInspectionNo", progressInspectionNo);

        return resultMap;

    }

    @GetMapping("/list/{orderNo}")
    public PageResponseDTO<ProgressInspectionDTO> getList(@PathVariable("orderNo") int orderNo,
                                                          PageRequestDTO pageRequestDTO){

        log.info("start get list : orderNo = " + orderNo);
        log.info("pageRequestDTO = " + pageRequestDTO);

        PageResponseDTO<ProgressInspectionDTO> responseDTO = progressInspectionService.list(orderNo, pageRequestDTO);

        log.info("getList result : " + responseDTO);

        return responseDTO;
    }

    @GetMapping(value = "/{progressInspectionNo}")
    public ProgressInspectionDTO getProgressInspectionDTO(@PathVariable("progressInspectionNo") int piNo){

        log.info(piNo);

        ProgressInspectionDTO progressInspectionDTO = progressInspectionService.read(piNo);

        log.info(progressInspectionDTO);

        return progressInspectionDTO;
    }

    @PutMapping(value = "/{progressInspectionNo}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Integer> modify(@PathVariable("progressInspectionNo") int progressInspectionNo,
                                       @RequestBody ProgressInspectionDTO progressInspectionDTO){

        log.info(progressInspectionDTO);

        progressInspectionService.modify(progressInspectionDTO);

        Map<String, Integer> resultMap = new HashMap<>();

        resultMap.put("progressInspectionNo", progressInspectionNo);

        return resultMap;

    }


    @DeleteMapping(value = "/{progressInspectionNo}")
    public void delete(@PathVariable("progressInspectionNo") int progressInspectionNo){

        progressInspectionService.remove(progressInspectionNo);

    }

    @PostMapping(value = "/completePI/{orderNo}")
    public void completeProgressInspection(@PathVariable("orderNo") int orderNo){

        orderService.changeState(orderNo, "검수완료");

    }


    @GetMapping(value = "/getOrderState/{orderNo}")
    public String getOrderState(@PathVariable("orderNo") int orderNo){
        return orderService.read(orderNo).getOrderState();
    }

}
