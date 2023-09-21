package com.deligence.deli.service;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.Order;
import com.deligence.deli.domain.ProgressInspection;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProgressInspectionDTO;
import com.deligence.deli.repository.OrderRepository;
import com.deligence.deli.repository.ProgressInspectionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class ProgressInspectionServiceImpl implements ProgressInspectionService{

    private final ModelMapper modelMapper;

    private final ProgressInspectionRepository progressInspectionRepository;

    @Override
    public int register(ProgressInspectionDTO progressInspectionDTO) {

        log.info(progressInspectionDTO);

        // 발주에 할당된 검수 갯수
        long count = progressInspectionRepository.countByOrder_OrderNo(progressInspectionDTO.getOrderNo());

        // dto 차수에 count + 1 설정
        progressInspectionDTO.setProgressInspectionTimes((int)(count +1));

        ProgressInspection progressInspection = modelMapper.map(progressInspectionDTO, ProgressInspection.class);

        //modelmapper로 매핑 안되는 부분 직접 지정
        progressInspection.setEmployee(Employee.builder().employeeNo(progressInspectionDTO.getEmployeeNo()).build());
        progressInspection.setOrder(Order.builder().orderNo(progressInspectionDTO.getOrderNo()).build());


        int result = progressInspectionRepository.save(progressInspection).getProgressInspectionNo();
        //발주 일련번호 반환받는게 좋을지도?

        return result;
    }

    @Override
    public ProgressInspectionDTO read(int progressInspectionNo) {

        Optional<ProgressInspection> result = progressInspectionRepository.findById(progressInspectionNo);

        ProgressInspection progressInspection = result.orElseThrow();

        //entity to dto
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);

        ProgressInspectionDTO progressInspectionDTO = modelMapper.map(progressInspection, ProgressInspectionDTO.class);


        return progressInspectionDTO;
    }

    @Override
    public void modify(ProgressInspectionDTO progressInspectionDTO) {

        Optional<ProgressInspection> target = progressInspectionRepository.findById(progressInspectionDTO.getProgressInspectionNo());

        ProgressInspection progressInspection = target.orElseThrow();

        progressInspection.change(progressInspectionDTO);

        //-----------------------------


        //-----------------------------

        progressInspectionRepository.save(progressInspection);

    }

    @Override
    public void remove(int progressInspectionNo) {

        progressInspectionRepository.deleteById(progressInspectionNo);

    }

    @Override
    public PageResponseDTO<ProgressInspectionDTO> list(int progressInspectionNo, PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable();//속성 집어넣으면 오류 발생함.

        //Page<ProgressInspection> result = progressInspectionRepository.search(types, keyword, pageable);


        return null;
    }

}

