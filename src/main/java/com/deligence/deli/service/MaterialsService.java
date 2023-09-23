package com.deligence.deli.service;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.MaterialImage;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.*;

import java.util.List;
import java.util.stream.Collectors;

public interface MaterialsService {

    int register(MaterialsDTO materialsDTO) throws Exception; //등록작업처리
    MaterialsDTO readOne(int materialNo); //조회작업처리
    void modify(MaterialsDTO materialsDTO); //수정작업처리
    void delete(int materialsNo); //삭제작업처리
    PageResponseDTO<MaterialsDTO> list(PageRequestDTO pageRequestDTO); //전체조회 & 검색기능

    int getCodeCount(String materialCode); //자재코드생성

    //게시글 이미지 숫자처리
    PageResponseDTO<MaterialImageDTO> listWithAll(PageRequestDTO pageRequestDTO);

    default Materials dtoToEntity(MaterialsDTO materialsDTO) throws Exception { //이미지등록

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
                    materialImage.getMaterialUuid() + "_" + materialImage.getMaterialImgName()
            ).collect(Collectors.toList()).get(0);

            materialsDTO.setFileNames(fileNames);



//        if( tmpList.size()!=0){
//            tmpList.get(0).getName();
//        }
        return materialsDTO;

    }

}
