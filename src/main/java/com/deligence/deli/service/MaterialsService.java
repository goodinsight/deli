package com.deligence.deli.service;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.BoardDTO;
import com.deligence.deli.dto.MaterialsDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

import java.util.List;
import java.util.stream.Collectors;

public interface MaterialsService {

    int register(MaterialsDTO materialsDTO); //등록작업처리
    MaterialsDTO readOne(int materialNo); //조회작업처리
    void modify(MaterialsDTO materialsDTO); //수정작업처리
    void delete(int materialsNo); //삭제작업처리
    PageResponseDTO<MaterialsDTO> list(PageRequestDTO pageRequestDTO); //전체조회 & 검색기능

    int getCodeCount(String code); //자재코드생성

    default Materials dtoToEntity(MaterialsDTO materialsDTO){ //이미지등록

        Materials materials = Materials.builder()
                .materialNo(materialsDTO.getMaterialNo())
                .materialCode(materialsDTO.getMaterialCode())
                .materialName(materialsDTO.getMaterialName())
                .materialType(materialsDTO.getMaterialType())
                .materialExplaination(materialsDTO.getMaterialExplaination())
                .materialSupplyPrice(materialsDTO.getMaterialSupplyPrice())
                .build();

        if(materialsDTO.getFileNames() != null) {
            String tmp = materialsDTO.getFileNames();
            String[] arr = tmp.split("_");
            materials.addImage(arr[0], arr[1]);

        }
        return materials;
    }

    default MaterialsDTO entityToDTO(Materials materials) { //이미지조회
        MaterialsDTO materialsDTO = MaterialsDTO.builder()
                .materialNo(materials.getMaterialNo())
                .materialCode(materials.getMaterialCode())
                .materialName(materials.getMaterialName())
                .materialType(materials.getMaterialType())
                .materialExplaination(materials.getMaterialExplaination())
                .materialSupplyPrice(materials.getMaterialSupplyPrice())
                .regDate(materials.getRegDate())
                .modDate(materials.getModDate())
                .build();

        String fileNames = materials.getImageSet().stream().sorted().map(materialImage ->
                materialImage.getMaterialUuid()+"_"+materialImage.getMaterialImgName()
        ).collect(Collectors.toList()).get(0);

        materialsDTO.setFileNames(fileNames);

        return materialsDTO;

    }

}
