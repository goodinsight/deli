package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.MaterialProcurementContractRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
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
public class MaterialProcurementContractServiceImpl implements MaterialProcurementContractService{

    private final MaterialProcurementContractRepository materialProcurementContractRepository;
    private final BusinessRecordService records;

    @Override
    public int register(MaterialProcurementContractDTO materialProcurementContractDTO) {
        if (materialProcurementContractDTO.getMaterialProcurementContractNo() != 0) throw new IllegalArgumentException("등록 요청으로 기존 데이터를 덮어쓸 수 없습니다.");

        log.info(materialProcurementContractDTO);

        //dto -> entity
        MaterialProcurementContract materialProcurementContract = dtoToEntity(materialProcurementContractDTO);
        records.snapshot(materialProcurementContract);

        log.info(materialProcurementContract);

        int materialProcurementContractNo =
                materialProcurementContractRepository.save(materialProcurementContract).getMaterialProcurementContractNo();

        log.info(materialProcurementContractNo);

        return materialProcurementContractNo;
    }

    @Override
    public MaterialProcurementContractDetailDTO read(int materialProcurementContractNo) {

        //entity -> dto
        MaterialProcurementContractDetailDTO result = materialProcurementContractRepository.read(materialProcurementContractNo);

        return result;

    }

    @Override
    public void modify(MaterialProcurementContractDTO materialProcurementContractDTO) {
        if (materialProcurementContractDTO.getProcurementQuantity() <= 0) throw new IllegalArgumentException("수량은 양수여야 합니다.");

        MaterialProcurementContract materialProcurementContract = records.editable(MaterialProcurementContract.class, materialProcurementContractDTO.getMaterialProcurementContractNo());

        records.changeState(MaterialProcurementContract.class, materialProcurementContractDTO.getMaterialProcurementContractNo(), materialProcurementContractDTO.getMaterialProcurementContractState());
        materialProcurementContract.change(materialProcurementContractDTO);

        log.info(materialProcurementContractDTO);


        materialProcurementContractRepository.save(materialProcurementContract);
    }

    @Override
    public void changeState(int materialProcurementContractNo, String state) {
        records.changeState(MaterialProcurementContract.class, materialProcurementContractNo, state);
    }

    @Override
    public void remove(int materialProcurementContractNo) {

        records.cancel(MaterialProcurementContract.class, materialProcurementContractNo);

    }

    @Override
    public PageResponseDTO<MaterialProcurementContractDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();
//        Pageable pageable = pageRequestDTO.getPageable("materialProcurementContractNo");
        //속성 넣으면 SearchImpl의 searchAll() paging 부분 오류남.

        Page<MaterialProcurementContract> result =
                materialProcurementContractRepository.searchAll(types, keyword, pageable);

        List<MaterialProcurementContractDTO> dtoList = result.getContent().stream()
                .map(materialProcurementContract -> entityToDto(materialProcurementContract))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialProcurementContractDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public OrderPageResponseDTO<MaterialProcurementContractDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO) {

        String[] types = orderPageRequestDTO.getTypes();
        String keyword = orderPageRequestDTO.getKeyword();
        String state = orderPageRequestDTO.getState();
        Pageable pageable = orderPageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        Page<MaterialProcurementContract> result =
                materialProcurementContractRepository.searchWithState(types, keyword, state, pageable);

        List<MaterialProcurementContractDTO> dtoList = result.getContent().stream()
                .map(materialProcurementContract -> entityToDto(materialProcurementContract))
                .collect(Collectors.toList());

        return OrderPageResponseDTO.<MaterialProcurementContractDTO>withAll()
                .orderPageRequestDTO(orderPageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public OrderPageResponseDTO<MaterialProcurementContractDTO> listWithState2(OrderPageRequestDTO orderPageRequestDTO, String[] states) {

        String[] types = orderPageRequestDTO.getTypes();
        String keyword = orderPageRequestDTO.getKeyword();
        Pageable pageable = orderPageRequestDTO.getPageable();

        Page<MaterialProcurementContract> result = materialProcurementContractRepository.searchWithState2(types, keyword, states, pageable);

        List<MaterialProcurementContractDTO> dtoList = result.getContent().stream()
                .map(materialProcurementContract -> entityToDto(materialProcurementContract))
                .collect(Collectors.toList());


        return OrderPageResponseDTO.<MaterialProcurementContractDTO>withAll()
                .orderPageRequestDTO(orderPageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) {

        int num = materialProcurementContractRepository.getCodeCount(code);

        return num;
    }
}
