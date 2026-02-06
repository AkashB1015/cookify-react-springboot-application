package com.cookie.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderRespDTO {
    private Long orderId;
    private double totalAmount;
    private String status;
    private List<OrderItemDetailsDTO> items;
    private String message;
}

