package com.cookie.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderReqDTO {
    private Long customerId;
    private List<OrderItemDTO> items;
}

