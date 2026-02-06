package com.cookie.dto;

import java.time.LocalDate;

import com.cookie.entities.OrderStatus;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderListDTO {
	private Long id;
	private LocalDate createdOn;
	private double totalAmount;
	private Long customerId;
	private OrderStatus status;
}
