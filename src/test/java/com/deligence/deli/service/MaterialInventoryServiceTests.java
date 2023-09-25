package com.deligence.deli.service;

import com.deligence.deli.domain.MaterialInventory;
import com.deligence.deli.domain.Materials;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.OrderRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@SpringBootTest
@Log4j2
@Transactional
public class MaterialInventoryServiceTests {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private MaterialProcurementPlanningService materialProcurementPlanningService;

    @Autowired
    private MaterialsService materialsService;

    @Test
    public void testMaterialsServicelistOne() {

        int orderNo = 114;

        OrderDetailDTO orderDetailDTO = materialInventoryService.materialStockListOne(orderNo);
        log.info(orderDetailDTO);
        log.info("자재 이름 : " + orderDetailDTO.getMaterialName());
        log.info("담당자 : " + orderDetailDTO.getEmployeeName());

        log.info("No : " + orderDetailDTO.getMaterialProcurementPlanNo());

//        MaterialProcurementPlanningDetailDTO mppDTO = materialProcurementPlanningService.read();
//
//        log.info(mppDTO.getMaterialProcurementPlanNo());
//        log.info(mppDTO.getMaterialName());
//        log.info(mppDTO.getMaterialNo());
//
//        MaterialsDTO materialsDTO = materialsService.readOne(mppDTO.getMaterialNo());
//
//        log.info(materialsDTO.getMaterialName());

    }

    @Test
    public void testListOne() {

        int orderNo = 30;

        OrderDetailDTO orderDetailDTO = orderService.read(orderNo);

        log.info(orderDetailDTO);

    }
    @Test
    public void testmpListOne() {

        int materialProcurementPlanningNo = 30;

        MaterialProcurementPlanningDetailDTO materialProcurementPlanningDetailDTO = materialProcurementPlanningService.read(materialProcurementPlanningNo);

        log.info(materialProcurementPlanningDetailDTO);

    }
    @Test
    public void testmListOne() {

        int materialNo = 30;

//        MaterialsDTO materialsDTO = materialsService.readOne(materialNo);

//        log.info(materialsDTO);

    }

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("tcw")
                .keyword("cpu")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<OrderDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);

        log.info(responseDTO);

    }



}
