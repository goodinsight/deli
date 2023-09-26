package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialInOutHistoryDetailDTO;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@SpringBootTest
@Log4j2
public class MaterialInOutHistoryServiceTests {

    @Autowired
    private MaterialInOutHistoryService materialInOutHistoryService;

//    @Test
//    public void testRegister() { // 게시물 등록 test
//
//        log.info(materialInOutHistoryService.getClass().getName());
//
//        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = MaterialInOutHistoryDetailDTO.builder()
//                .materialInventoryNo(1)
//                .inOutSeparator("IN")
//                .materialInOutQuantity(100)
//                .employeeNo(6)
//                .build();
//
//        int materialNo = materialInOutHistoryService.register(materialInOutHistoryDetailDTO);
//
//        log.info("materialNo: " + materialNo);
//    }
//
//    @Test
//    public void testList() { //전체조회 / 검색 test
//
//        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
//                .type("t") // 타입(분류)로 검색
//                .keyword("IN")
//                .page(1)
//                .size(10)
//                .build();
//
//        PageResponseDTO<MaterialInOutHistoryDetailDTO> responseDTO = materialInOutHistoryService.list(pageRequestDTO);
//
//        log.info(responseDTO);
//    }
//
//
//    @Test
//    public void testReadOne() {
//
//        int materialHistoryNo = 10;
//
//        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = materialInOutHistoryService.readOne(materialHistoryNo);
//
//        log.info(materialInOutHistoryDetailDTO);
//
//    }

}