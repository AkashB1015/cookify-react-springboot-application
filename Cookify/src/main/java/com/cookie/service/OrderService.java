package com.cookie.service;

import java.util.List;

import com.cookie.dto.OrderListDTO;
import com.cookie.dto.OrderReqDTO;
import com.cookie.dto.OrderRespDTO;

public interface OrderService {
	OrderRespDTO placeOrder(OrderReqDTO dto);

	List<OrderListDTO> getAllOrders();
}
