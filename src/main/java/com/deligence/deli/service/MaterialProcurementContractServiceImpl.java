package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.dto.MaterialProcurementContractDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.repository.MaterialProcurementContractRepository;
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
public class MaterialProcurementContractServiceImpl implements MaterialProcurementContractService{

    private final ModelMapper modelMapper;

    private final MaterialProcurementContractRepository materialProcurementContractRepository;

    @Override
    public int register(MaterialProcurementContractDTO materialProcurementContractDTO) {

        //dto -> entity
        MaterialProcurementContract materialProcurementContract =
                modelMapper.map(materialProcurementContractDTO, MaterialProcurementContract.class);
        //안되면 인터페이스에 dtoToEntity 메소드 만들기

        log.info(materialProcurementContract);

        int materialProcurementContractNo = materialProcurementContractRepository
                .save(materialProcurementContract).getMaterialProcurementContractNo();

        log.info(materialProcurementContractNo);

        return materialProcurementContractNo;
    }

    @Override
    public MaterialProcurementContractDTO read(int materialProcurementContractNo) {

        Optional<MaterialProcurementContract> result =
                materialProcurementContractRepository.findById(materialProcurementContractNo);

        MaterialProcurementContract materialProcurementContract =
                result.orElseThrow();

        //entity -> dto
        MaterialProcurementContractDTO materialProcurementContractDTO =
                modelMapper.map(materialProcurementContract, MaterialProcurementContractDTO.class);

        return materialProcurementContractDTO;
    }

    @Override
    public void modify(MaterialProcurementContractDTO materialProcurementContractDTO) {

        Optional<MaterialProcurementContract> result = materialProcurementContractRepository
                        .findById(materialProcurementContractDTO.getMaterialProcurementContractNo());

        MaterialProcurementContract materialProcurementContract = result.orElseThrow();

        materialProcurementContract.change(materialProcurementContractDTO);

        // 추후 자재조달계약 수정에 따라 다른 영역에 관련된 수정 사항이 있으면 여기에 추가


        //------------------------------------------------------------------

        materialProcurementContractRepository.save(materialProcurementContract);
    }

    @Override
    public void remove(int materialProcurementContractNo) {

        materialProcurementContractRepository.deleteById(materialProcurementContractNo);

    }

    @Override
    public PageResponseDTO<MaterialProcurementContractDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
//        Pageable pageable = pageRequestDTO.getPageable("materialProcurementContractNo");
        //속성 넣으면 SearchImpl의 searchAll() paging 부분 오류남.
        Pageable pageable = pageRequestDTO.getPageable();

        Page<MaterialProcurementContract> result =
                materialProcurementContractRepository.searchAll(types, keyword, pageable);

        List<MaterialProcurementContractDTO> dtoList = result.getContent().stream()
                .map(materialProcurementContract -> modelMapper
                        .map(materialProcurementContract, MaterialProcurementContractDTO.class))
                .collect(Collectors.toList());

        return PageResponseDTO.<MaterialProcurementContractDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }
}
