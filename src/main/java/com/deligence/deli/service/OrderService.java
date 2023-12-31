package com.deligence.deli.service;

import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.domain.MaterialProcurementPlanning;
import com.deligence.deli.domain.Order;
import com.deligence.deli.dto.*;

import java.util.Map;

public interface OrderService {

    int register(OrderDTO orderDTO);

    OrderDetailDTO read(int orderNo);

    void modify(OrderDTO orderDTO);

    void remove(int orderNo);

    PageResponseDTO<OrderDTO> list(PageRequestDTO pageRequestDTO);
    OrderPageResponseDTO<OrderDTO> listWithState(OrderPageRequestDTO orderPageRequestDTO);

    OrderPageResponseDTO<OrderDTO> listIncoming(OrderPageRequestDTO orderPageRequestDTO, String[] states);

    int getCodeCount(String orderCode);

    void changeState(int orderNo, String state);

    int sumOfOrderQuantity(int materialProcurementPlanningNo);

    Map<String, Integer> orderChart(String materialName, String year, String state);


    default Order dtoToEntity(OrderDTO orderDTO){

        Order order = Order.builder()
                .orderNo(orderDTO.getOrderNo())
                .orderCode(orderDTO.getOrderCode())
                .orderQuantity(orderDTO.getOrderQuantity())
                .orderDeliveryDate(orderDTO.getOrderDeliveryDate())
                .orderDate(orderDTO.getOrderDate())
                .orderState(orderDTO.getOrderState())
                .orderEtc(orderDTO.getOrderEtc())
                .materialProcurementPlanning(MaterialProcurementPlanning.builder().materialProcurementPlanNo(orderDTO.getMaterialProcurementPlanNo()).build())
                .materialProcurementContract(MaterialProcurementContract.builder().materialProcurementContractNo(orderDTO.getMaterialProcurementContractNo()).build())
                .employee(Employee.builder().employeeNo(orderDTO.getEmployeeNo()).build())
                .materialName(orderDTO.getMaterialName())
                .employeeName(orderDTO.getEmployeeName())
                .build();

        return order;

    }

    default OrderDTO entityToDto(Order order){

        OrderDTO orderDTO = OrderDTO.builder()
                .orderNo(order.getOrderNo())
                .orderCode(order.getOrderCode())
                .orderQuantity(order.getOrderQuantity())
                .orderDeliveryDate(order.getOrderDeliveryDate())
                .orderDate(order.getOrderDate())
                .orderState(order.getOrderState())
                .orderEtc(order.getOrderEtc())
                .materialProcurementPlanNo(order.getMaterialProcurementPlanning().getMaterialProcurementPlanNo())
                .materialProcurementContractNo(order.getMaterialProcurementContract().getMaterialProcurementContractNo())
                .employeeNo(order.getEmployee().getEmployeeNo())
                .materialName(order.getMaterialName())
                .employeeName(order.getEmployeeName())
                .build();

        return orderDTO;

    }



}
