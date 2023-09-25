package com.deligence.deli;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.repository.MaterialsRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

@SpringBootTest
@Log4j2
public class CodeInsertTests {

    @Autowired
    private MaterialsRepository materialsRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Test
    public void codeUpdate() {

        // Material-20230925-1
        for(int i = 1; i<= 1312; i++) {
            Optional<Materials> result = materialsRepository.findById(i);

            Materials materials = result.orElseThrow();

            String code = "Material-20230917-"+i;

            materials.changeCode(code);

            log.info(materials);
            materialsRepository.save(materials);

        }
    }

//    @Test
//    public void imageUpdate() throws IOException {
//
//        String[] types = {"cpu", "MAINBOARD", "MEMORY", "SSD", "HDD", "GPU","CASE", "POWER", "COOLER", "SOUNDCARD", "MONITER", "KEYBOARD", "MOUSE"}
//
//        Optional<Materials> result = materialsRepository.findById(1);
//
//        Materials materials = result.orElseThrow();
//
//        for(int i = 0; i < types.length; i++){
//
//            if( materials.getMaterialType().equals(types[i]) ){
//                int tmp = (int) (1 + Math.random() * 100);
//                File imgFile = new File("C:/Users/168/Pictures/Saved Pictures/"+types[i]+tmp+".jpg");
//
//
//
////                materials.addImage(UUID.randomUUID().toString(), types[i]+".jpg");
////                materialsRepository.save(materials);
//
//                break;
//            }
//
//        }
//
//
//
//
//
//        //확장자를 제외한 파일 이름 만 출력
//        private String getFileNameNoExt(String filepath){
//            String fileName = filepath.substring(0,  filepath.lastIndexOf("."));
//            return fileName;
//        }
//
//        //파일 확장자만 출력
//        private String getFileExt(String filepath){
//            String ext = filepath.substring(filepath.lastIndexOf(".")+1);
//            return ext;
//        }
//    }


}
