package com.deligence.deli.service;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.MaterialInOutHistory;
import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialInventoryRepository;
import com.deligence.deli.repository.MaterialsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class MaterialsServiceImpl implements MaterialsService {

    private final ModelMapper modelMapper;

    private final MaterialsRepository materialsRepository;


    @Override
    public int register(MaterialsDTO materialsDTO) { //등록 작업처리

//        Materials materials = modelMapper.map(materialsDTO, Materials.class);

        Materials materials = dtoToEntity(materialsDTO);

        log.info("service materials =" + materials);

        int materialNo = materialsRepository.save(materials).getMaterialNo();

        return materialNo;
    }

    @Override
    public MaterialsDTO readOne(int materialNo) { //조회 작업처리

        //materialimage까지 조인 처리되는 findByIdWithImages()를 이용
        Optional<Materials> result = materialsRepository.findByIdWithImages(materialNo);

        Materials materials = result.orElseThrow();

        MaterialsDTO materialsDTO = entityToDTO(materials);

        return materialsDTO;

//        MaterialsDTO materialsDTO = null;
//
//        try {
//            Optional<Materials> result = materialsRepository.findByIdWithImages(materialNo);
//            Materials materials = result.orElseThrow();
//            materialsDTO = entityToDTO(materials);
//        } catch (IndexOutOfBoundsException e){
//            log.info("이미지가 없습니다.");
//            Optional<Materials> result = materialsRepository.findById(materialNo);
//            Materials materials = result.orElseThrow();
//            materialsDTO = modelMapper.map(materials, MaterialsDTO.class);
//        }
//            return materialsDTO;
    }

    @Override
    public void modify(MaterialsDTO materialsDTO) { // 수정 작업처리

        Optional<Materials> result = materialsRepository.findById(materialsDTO.getMaterialNo());

        Materials materials = result.orElseThrow();

//        materials.change(materialsDTO.getMaterialName(), materialsDTO.getMaterialType(), materialsDTO.getMaterialExplaination(), materialsDTO.getMaterialSupplyPrice());

        materials.change(materialsDTO);

        //첨부파일 처리
        materials.clearImages();

        if(materialsDTO.getFileNames() != null){
            for (String fileName : materialsDTO.getFileNames()) {
                String[] arr = fileName.split("_");
                materials.addImage(arr[0],arr[1]);

            }
        }
        materialsRepository.save(materials);
    }

    @Override
    public void delete(int materialNo) { //삭제 작업처리

        materialsRepository.deleteById(materialNo);
    }

    @Override
    public PageResponseDTO<MaterialsDTO> list(PageRequestDTO pageRequestDTO) { //전체조회 & 검색기능

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageble = pageRequestDTO.getPageable("materialNo");

        Page<Materials> result = materialsRepository.searchAll(types, keyword, pageble);

        List<MaterialsDTO> dtoList = result.getContent().stream()
                .map(materials -> entityToDTO(materials))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialsDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) { //자재코드생성

        int num = materialsRepository.getCodeCount(code);

        return num;
    }


    @Override
    public PageResponseDTO<MaterialsDTO> listWithAll(PageRequestDTO pageRequestDTO){     //게시글 이미지 숫자처리

//    public PageResponseDTO<MaterialListAllDTO> listWithAll(PageRequestDTO pageRequestDTO){     //게시글 이미지 숫자처리

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("MaterialNo");

        Page<MaterialsDTO> result = materialsRepository.searchWithAll(types, keyword,pageable);

        return PageResponseDTO.<MaterialsDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(result.getContent())
                .total((int) result.getTotalElements())
                .build();

//        Page<MaterialListAllDTO> result = materialsRepository.searchWithAll(types, keyword,pageable);
//
//        return PageResponseDTO.<MaterialListAllDTO>withAll()
//                .pageRequestDTO(pageRequestDTO)
//                .dtoList(result.getContent())
//                .total((int) result.getTotalElements())
//                .build();
    }

//    public int registerImg(MaterialsDTO materialsDTO) { //이미지 등록
//        Materials materials = dtoToEntity(materialsDTO);
//        int materialNo = materialsRepository.save(materials).getMaterialNo();
//        return materialNo;
//    }
//
//    public MaterialsDTO readOneImg(int materialNo) { //이미지조회
//
//        Optional<Materials> result = materialsRepository.findByIdWithImages(materialNo); //board_image까지 조인 처리
//
//        Materials materials = result.orElseThrow();
//
//        MaterialsDTO materialsDTO = entityToDTO(materials);
//
//        return materialsDTO;
//    }

}
