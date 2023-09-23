package com.deligence.deli.repository;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.MaterialImage;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.service.MaterialsService;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class MaterialsRepositoryTests {

    @Autowired
    private MaterialsRepository materialsRepository;

    private MaterialsService materialsService;

    @Test
    public void testInsert() { // 자재등록 test
        IntStream.rangeClosed(1, 100).forEach(i -> {
            Materials materials = Materials.builder()
                    .materialCode("code" + i)
                    .materialName("name" + i)
                    .materialType("type" + i)
                    .materialExplaination("explaination" + i)
                    .materialSupplyPrice((long) (100 + i))
                    .build();

            Materials result = materialsRepository.save(materials);
            log.info("materialNo:" + result.getMaterialNo());
        });
    }

    @Test
    public void testSelect(){ //select test
        int materialNo = 100;

        Optional<Materials> result = materialsRepository.findById(materialNo);

        Materials materials = result.orElseThrow();

        log.info(materials);
    }

    @Test
    public void testUpeate() { //Update test
        int materialNo = 1313;

        Optional<Materials> result = materialsRepository.findById(materialNo);

        Materials materials = result.orElseThrow();

        materials.change("update test", "update.. test", "update... test", 100000000L, LocalDateTime.now(),  LocalDateTime.now());

        materialsRepository.save(materials);
    }

    @Test
    public void testDelete() { //Delete test
        int materialNo = 1313;

        materialsRepository.deleteById(materialNo);
    }
    @Test
    public void testpaging(){ //자재 페이징 test

        Pageable pageable = PageRequest.of(0,10, Sort.by("materialNo").descending());

        Page<Materials> result = materialsRepository.findAll(pageable);

        log.info("total count: " + result.getTotalElements());
        log.info("total pages: " + result.getTotalPages());
        log.info("page number:" + result.getNumber());
        log.info("page size: " + result.getSize());

        List<Materials> todoList = result.getContent();

        todoList.forEach(materials -> log.info(materials));
    }

    @Test
    public void testSearch1(){

        Pageable pageable = PageRequest.of(1,10, Sort.by("materialNo").descending());

        materialsRepository.search1(pageable);
    }

    @Test
    public void testSearchAll() { //검색 test

        String[] types = {"t","c","w"};

        String keyword = "1";

        Pageable pageable = PageRequest.of(0,10,Sort.by("materialNo").descending());

        Page<Materials> result = materialsRepository.searchAll(types, keyword, pageable);

        //total pages
        log.info(result.getTotalPages());

        //pag size
        log.info(result.getSize());

        //pageNumber
        log.info(result.getNumber());

        //prev next
        log.info(result.hasPrevious() + ": " + result.hasNext());

        result.getContent().forEach(materials -> log.info(materials));

    }

    @Test //자재 코드 test
    public void testCodeCount() {

        String code = "Matrials-GPU-20230924-";

        int result = materialsRepository.getCodeCount(code);

        log.info("num : " + result);

    }

    @Test
    public void testInsertWithImages() { // 이미지 추가 test

        Materials materials = Materials.builder()
                .materialCode("이미지 test")
                .materialName("이미지 test")
                .materialType("이미지 test")
                .materialExplaination("이미지 test")
                .materialSupplyPrice(1L)
                .build();

        materials.addImage(UUID.randomUUID().toString(), "file.jpg");

        materialsRepository.save(materials);
    }

    @Test
    public void testReadWithImages() { //이미지 조회 test

        //반드시 존재하는 materialsNo로 확인
        Optional<Materials> result = materialsRepository.findByIdWithImages(1351);

        Materials materials = result.orElseThrow();

        log.info(materials);
        log.info("--------------------");

        log.info(materials.getImageSet());


    }

    @Transactional
    @Commit
    @Test
    public void testModifyImages() { //이미지수정 test

        Optional<Materials> result = materialsRepository.findByIdWithImages(1351);

        Materials materials = result.orElseThrow();

        //기존의 첨부파일들 삭제
        materials.clearImages();

        //새로운 첨부파일
        materials.addImage(UUID.randomUUID().toString(), "updatefile" +".jpg");

        materialsRepository.save(materials);
    }

    @Test
    public void testRemoveAll(){ //이미지 삭제 test

        int materialNo = 1348;

        materialsService.delete(materialNo);

    }

    @Test
    public void testInsertAll(){ //게시물 + 이미지 ( 2의 배수만) 추가(등록) test

        for (int i = 1; i<=10; i++){
            Materials materials = Materials.builder()
                    .materialCode("test" + i)
                    .materialName("test" + i)
                    .materialType("test" + i)
                    .materialExplaination("test" + i)
                    .materialSupplyPrice(30L)
                    .build();

            for (int j=0; j<5; j++){
                if(i%2 == 0) {
                    continue;
                }
                materials.addImage(UUID.randomUUID().toString(),i+"file"+j+",jpg");
            }
            materialsRepository.save(materials);
        } //end for
    }

}
