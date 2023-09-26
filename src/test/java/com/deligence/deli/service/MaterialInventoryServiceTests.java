package com.deligence.deli.service;

import com.deligence.deli.dto.*;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
@Log4j2
//    @Transactional
public class MaterialInventoryServiceTests {

    @Autowired
    private MaterialInventoryService materialInventoryService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private MaterialInOutHistoryService materialInOutHistoryService;

    @Test   //테스트 다시 해볼 것
    public void testStockRegister() {

        OrderDTO orderDTO = OrderDTO.builder().orderNo(45).employeeNo(5).employeeName("김재고").build();
        orderService.register(orderDTO);

        MaterialInOutHistoryDetailDTO materialInOutHistoryDetailDTO = MaterialInOutHistoryDetailDTO.builder().
                materialHistoryNo(5).inOutSeparator("IN").build();

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialNo(1111)
                .materialIncomingQuantity(100)
                .materialOutgoingQuantity(50)
                .materialStock(50)
                .materialSupplyPrice(1000L)
                .materialTotalInventoryPayments(50000L)
                .materialImageNo(50)
                .materialHistoryNo(5)
                .materialName("materialName")
                .materialType("materialType")
                .materialCode("materialCode")
                .employeeName("김재고")
                .orderNo(45)
                .orderCode("ORDER-20230926-")
                .orderState("입고완료")
//                .documentFileNo(1)
                .build();


        materialInventoryService.stockRegister(materialInventoryDTO);

        log.info("success");


    }

    @Test //테스트확인
    public void testStockRead() {

        int materialInventoryNo = 1;

        MaterialInventoryDetailDTO materialInventoryDetailDTO = materialInventoryService.stockRead(materialInventoryNo);

        log.info(materialInventoryDetailDTO);

    }

    @Test   //나중에 테스트 다시 해볼 것
    public void testStockModify() {

        MaterialInventoryDTO materialInventoryDTO = MaterialInventoryDTO.builder()
                .materialHistoryNo(1)
                .materialNo(1111)
                .materialIncomingQuantity(100)
                .materialOutgoingQuantity(50)
                .materialStock(50)
                .materialSupplyPrice(1000L)
                .materialTotalInventoryPayments(50000L)
                .materialImageNo(50)
                .materialHistoryNo(5)
                .materialName("materialName")
                .materialType("materialType")
                .materialCode("materialCode")
                .employeeName("김재고")
                .orderNo(45)
                .orderCode("ORDER-20230926-")
                .orderState("입고완료")
//                .documentFileNo(1)
                .build();

        materialInventoryService.stockModify(materialInventoryDTO);

        log.info(materialInventoryDTO);
    }

    @Test
    public void testStockList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .type("t")
                .keyword("1")
                .page(1)
                .size(10)
                .build();

        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.stockList(pageRequestDTO);

        log.info(responseDTO);

    }

//    @Test
//    public void testMaterialsServicelistOne() {
//
//        int materialInventoryNo = 74;
//
//        MaterialInventoryDTO materialInventoryDTO = materialInventoryService.stockRead(materialInventoryNo);
//        log.info(materialInventoryDTO);
//
//    }
//
//    @Test
//    public void testList() {
//
//        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
//                .type("tcw")
//                .keyword("30")
//                .page(1)
//                .size(10)
//                .build();
//
//        PageResponseDTO<MaterialInventoryDTO> responseDTO = materialInventoryService.materialStockList(pageRequestDTO);
//
//        log.info(responseDTO);
//
//    }



}
