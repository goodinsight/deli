package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialImage;
import com.deligence.deli.dto.*;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.parameters.P;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialsServiceTests {

    @Autowired
    private MaterialsService materialsService;

    @Test
    public void testRegister() throws Exception { // 게시물 등록 test

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

//        IntStream.rangeClosed(1,10).forEach(i ->{
//            MaterialImageDTO materialImageDTO = MaterialImageDTO.builder()
//                    .materialNo(i)
//                    .materialImgName("file.jpg")
//                    .materialUuid("b51f9013-6ba8-4f92-bb45-286574b246c"+(5+i))
//                    .build();
//
//            materialsService.dtoToEntity(materialImageDTO);
//        });
        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialNo(1365)
                .materialName("update.............1365")
                .materialExplaination("update.............1365")
                .materialType("update.............1365")
                .materialSupplyPrice(10L)
                .build();

//        첨부파일 추가
        materialsDTO.setFileNames(UUID.randomUUID()+"_yyy.jpg");

        materialsService.modify(materialsDTO);

    }

    @Test
    public void testDelete() { // 게시물 삭제 test
        int materialNo = 1360;

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
    public void testCC() {

        int num = materialsService.getCodeCount("Material-GPU-20230924-");

        log.info( "cc :" + num);
    }

    @Test
    public void testRegisterWithImages() throws Exception { //이미지 추가 test

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

        int materialNo = 1365;

        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

        log.info(materialsDTO);

        String fileName = materialsDTO.getFileNames();

        log.info(fileName);


    }

    @Test
    public void testRemoveAll(){ //이미지 삭제
        int materialNo = 1348;
        materialsService.delete(materialNo);
    }

    @Test
    public void testListWithAll(){

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialImageDTO> responseDTO = materialsService.listWithAll(pageRequestDTO);

        List<MaterialImageDTO> dtoList = responseDTO.getDtoList();

        dtoList.forEach(materialImageDTO -> {
                log.info(materialImageDTO.getMaterialNo());

            if(materialImageDTO.getMaterialImages() != null){
                for(MaterialImageDTO materialImage : materialImageDTO.getMaterialImages()) {
                    log.info(materialImage);
                }
            }

            log.info("--------------------------------------------");
        });
    }
}