package com.deligence.deli;

import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.MaterialInventoryDTO;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.repository.MaterialsRepository;
import com.deligence.deli.service.MaterialInventoryService;
import com.deligence.deli.service.MaterialsService;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;
import java.util.UUID;

@SpringBootTest
@Log4j2
public class CodeInsertTests {

    @Autowired
    private MaterialsRepository materialsRepository;

    @Autowired
    private MaterialInventoryService materialInventoryService;

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

    @Test
    @Transactional
    @Rollback(false)    // 롤백 되지 않도록 설정
    public void imageUpdate() throws IOException, InterruptedException {

        String[] types = {"cpu", "MAINBOARD", "MEMORY", "SSD", "HDD", "GPU","CASE", "POWER", "COOLER", "SOUNDCARD", "MONITER", "KEYBOARD", "MOUSE"};


        for(int j = 1; j <= 1312; j++) {

            Optional<Materials> result = materialsRepository.findById(j);

            Materials materials = result.orElseThrow();

            for (int i = 0; i < types.length; i++) {

                if (materials.getMaterialType().equals(types[i])) {
                    int tmp = 0;
                    if(types[i].equals("SOUNDCARD")) {
                        tmp = (int) (1 + Math.random() * 70);
                    } else{
                        tmp = (int) (1 + Math.random() * 100);
                    }
                    log.info("number: " + tmp);
                    File imgFile = new File("C:/Users/168/Pictures/Saved Pictures/" + types[i] + tmp + ".jpg");
                    imgFile.createNewFile();
                    String uuid = UUID.randomUUID().toString();

                    File newFile = new File("C:/Upload/" + uuid + "_" + types[i] + tmp + ".jpg");
                    File thumbFile = new File("C:/Upload/" + "s_" + uuid + "_" + types[i] + tmp + ".jpg");
                    boolean result1 = imgFile.renameTo(newFile);
                    log.info("result : " + result1);

                    File copyFile = new File("C:/Users/168/Pictures/Saved Pictures/material_image/" + types[i] + tmp + ".jpg");
                    File copyToFile = new File("C:/Users/168/Pictures/Saved Pictures/" + types[i] + tmp + ".jpg");
                    Files.copy(copyFile.toPath(), copyToFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

//                    Thread.sleep(100);

                    Thumbnailator.createThumbnail(Paths.get("C:/Upload/", uuid + "_" + types[i] + tmp + ".jpg").toFile(), thumbFile, 200, 200);


                    materials.addImage(uuid, types[i] + tmp + ".jpg");
                    materialsRepository.save(materials);


                    break;
                }

            }
        }

    }

    @Test
    public void materialInventoryUpdate(){

        for(int j = 1; j <= 1312; j++) {

            Optional<Materials> result = materialsRepository.findById(j);

            Materials materials = result.orElseThrow();

            MaterialsDTO materialsDTO = modelMapper.map(materials, MaterialsDTO.class);
            int materialNo = materialsDTO.getMaterialNo();

            log.info("matDTO : " + materialsDTO);

//        ----자재 재고 등록---------

            log.info("material NO =" + materialNo);

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

            log.info("matDTO : " + materialInventoryDTO);

            materialInventoryService.registerInventory(materialInventoryDTO);

//        -----------
        }

    }


}
