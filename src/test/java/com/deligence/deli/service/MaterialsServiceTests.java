package com.deligence.deli.service;

import com.deligence.deli.dto.BoardDTO;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.parameters.P;

import java.util.Arrays;
import java.util.UUID;

@SpringBootTest
@Log4j2
public class MaterialsServiceTests {

    @Autowired
    private MaterialsService materialsService;

    @Test
    public void testRegister() { //등록 test

        log.info(materialsService.getClass().getName());

        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialName("Name Test")
                .materialType("Type Test")
                .materialExplaination("Explaination Test")
                .materialSupplyPrice(10L)
                .build();

        int materialNo = materialsService.register(materialsDTO);

        log.info("materialNo: " + materialNo);
    }

    @Test
    public void testModify() { // 게시글 수정 test + 파일 추가

        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialNo(1348)
                .materialName("update")
                .materialExplaination("update")
                .materialType("update")
                .materialSupplyPrice(10L)
                .build();

        //첨부파일 추가
        materialsDTO.setFileNames(UUID.randomUUID()+"_yyy.jpg");

        materialsService.modify(materialsDTO);

    }

    @Test
    public void testDelete() { //삭제 test
        int materialNo = 1315;

        materialsService.delete(materialNo);
    }

    @Test
    public void testList() { //전체조회 / 검색 test

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("w") // 타입(분류)로 검색
                .keyword("cpu")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialsDTO> responseDTO = materialsService.list(pageRequestDTO);

        log.info(responseDTO);
    }

    @Test
    public void testRegisterWithImages() { //이미지 추가 test

        log.info(materialsService.getClass().getName());

        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialCode("File....Sample Title......")
                .materialName("Sample Name....")
                .materialType("test")
                .materialExplaination("Test")
                .materialSupplyPrice(1L)
                .build();

        materialsDTO.setFileNames(
                UUID.randomUUID() + "_aaa.jpg"

        );
        int materialNo = materialsService.register(materialsDTO);

        log.info("materialNo: " + materialNo);
    }

    @Test
    public void testReadAll() { // 이미지조회

        int materialNo = 1348;

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        log.info(materialsDTO);

        String fileName = materialsDTO.getFileNames();

        log.info(fileName);

    }

    @Test
    public void testRemoveAll(){
        int materialNo = 1348;
        materialsService.delete(materialNo);
    }
}