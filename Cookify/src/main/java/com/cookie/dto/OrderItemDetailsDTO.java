package com.cookie.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDetailsDTO {
    private String cookieName;
    private int quantity;
    private double pricePerUnit;
    private double totalPrice;
}

