package com.cookie.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cookie.dto.OrderListDTO;
import com.cookie.dto.OrderReqDTO;
import com.cookie.dto.OrderRespDTO;
import com.cookie.service.OrderService;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/place")
    public OrderRespDTO placeOrder(@RequestBody OrderReqDTO dto) {
        return orderService.placeOrder(dto);
    }
    
    
    
    // get the list of the orders
    @GetMapping("/list")
    public List<OrderListDTO> getAllOrders(){
    	return orderService.getAllOrders();
    } 
    
}

