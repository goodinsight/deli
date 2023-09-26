package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInOutHistory;
import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialInOutHistoryRepository;
import com.deligence.deli.repository.MaterialInventoryRepository;
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
public class MaterialInOutHistoryServiceImpl implements MaterialInOutHistoryService {

    private final ModelMapper modelMapper;

    private final MaterialInOutHistoryRepository materialInOutHistoryRepository;



    @Override
    public int register(MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO) {

        log.info(materialInOutHistoryDetailDTO);

        //dto -> entity
        MaterialInOutHistory materialInOutHistory = dtoToEntity(materialInOutHistoryDetailDTO);

        log.info(materialInOutHistory);

        int materialHistoryNo = materialInOutHistoryRepository.save(materialInOutHistory).getMaterialHistoryNo();

        log.info(materialHistoryNo);

        return materialHistoryNo;
    }

    @Override
    public MaterialInOutHistoryDetailDTO readOne(int materialHistoryNo) {   //자재 재고 입고,출고 조회작업처리

        Optional<MaterialInOutHistory> result = materialInOutHistoryRepository.findById(materialHistoryNo);

        MaterialInOutHistory materialInOutHistory = result.orElseThrow();

        log.info(materialInOutHistory);

        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = modelMapper.map(materialInOutHistory, MaterialInOutHistoryDetailDTO.class);

        log.info("materialInOutHistoryDetailDTO : " + materialInOutHistoryDetailDTO);

        return materialInOutHistoryDetailDTO;

    }

    @Override
    public PageResponseDTO<MaterialInOutHistoryDetailDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("materialHistoryNo");

        Page<MaterialInOutHistory> result = materialInOutHistoryRepository.searchAll(types, keyword, pageable);

        List<MaterialInOutHistoryDetailDTO> dtoList = result.getContent().stream()
                .map(materialInOutHistoryDetailDTO -> modelMapper.map(materialInOutHistoryDetailDTO, MaterialInOutHistoryDetailDTO.class)).collect(Collectors.toList());

        return PageResponseDTO.<MaterialInOutHistoryDetailDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();

    }



    // 자재 목록 상세 리스트
//    @Override
//    public PageResponseDTO<MaterialInventoryDTO> materialStockStateListOne(PageRequestDTO pageRequestDTO) {
//        String[] types = pageRequestDTO.getTypes();
//        String keyword = pageRequestDTO.getKeyword();
//        Pageable pageable = pageRequestDTO.getPageable("materialInventoryNo");
//
//        Page<MaterialInventory> result = materialInventoryRepository.materialStockList(types, keyword, pageable);
//
//        List<MaterialInventoryDTO> dtoList = result.getContent().stream()
//                .map(materialInventory -> entityDtoTo(materialInventory)).collect(Collectors.toList());
//
//        return PageResponseDTO.<MaterialInventoryDTO>withAll()
//                .pageRequestDTO(pageRequestDTO)
//                .dtoList(dtoList)
//                .total((int) result.getTotalElements())
//                .build();
//    }

}










