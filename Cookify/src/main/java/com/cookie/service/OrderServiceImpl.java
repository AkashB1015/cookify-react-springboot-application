package com.cookie.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cookie.custom_exception.ResourceNotFoundException;
import com.cookie.dto.OrderItemDTO;
import com.cookie.dto.OrderItemDetailsDTO;
import com.cookie.dto.OrderListDTO;
import com.cookie.dto.OrderReqDTO;
import com.cookie.dto.OrderRespDTO;
import com.cookie.entities.Cookie;
import com.cookie.entities.Customer;
import com.cookie.entities.Order;
import com.cookie.entities.OrderItem;
import com.cookie.entities.OrderStatus;
import com.cookie.repositories.CookieRepository;
import com.cookie.repositories.CustomerRepository;
import com.cookie.repositories.OrderItemRepository;
import com.cookie.repositories.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final CustomerRepository customerRepository;
    private final CookieRepository cookieRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final ModelMapper modelMapper;

    @Override
    public OrderRespDTO placeOrder(OrderReqDTO dto) {

        // 1. Validate customer
        Customer customer = customerRepository.findById(dto.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));

        // 2. Create the order
        Order order = new Order();
        order.setMyCustomer(customer);
        order.setStatus(OrderStatus.PENDING);
        order = orderRepository.save(order);

        double totalAmount = 0;
        List<OrderItemDetailsDTO> itemDetailsList = new ArrayList<>();

        // 3. Process each order item
        for (OrderItemDTO item : dto.getItems()) {

            Cookie cookie = cookieRepository.findById(item.getCookieId())
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Cookie not found: " + item.getCookieId()));

            // Check stock availability
            if (cookie.getQuantityAvailable() < item.getQuantity()) {
                throw new ResourceNotFoundException(
                        "Not enough stock for: " + cookie.getName());
            }

            // Update stock
            cookie.setQuantityAvailable(cookie.getQuantityAvailable() - item.getQuantity());
            cookieRepository.save(cookie);

            // Calculate cost
            double itemCost = cookie.getPrice() * item.getQuantity();
            totalAmount += itemCost;

            // Save OrderItem
            OrderItem orderItem = new OrderItem(order, cookie, item.getQuantity());
            orderItemRepository.save(orderItem);

            // Prepare Response DTO
            OrderItemDetailsDTO details = new OrderItemDetailsDTO();
            details.setCookieName(cookie.getName());
            details.setQuantity(item.getQuantity());
            details.setPricePerUnit(cookie.getPrice());
            details.setTotalPrice(itemCost);

            itemDetailsList.add(details);
        }

        // 4. Update order
        order.setTotalAmount(totalAmount);
        order.setStatus(OrderStatus.SUCCESSFUL);
        orderRepository.save(order);

        // 5. Create response
        OrderRespDTO resp = new OrderRespDTO();
        resp.setOrderId(order.getId());
        resp.setTotalAmount(totalAmount);
        resp.setStatus(order.getStatus().toString());
        resp.setItems(itemDetailsList);
        resp.setMessage("Order placed successfully!");

        return resp;
    }
    
    
    // listing the orders
    @Override
    public List<OrderListDTO> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(order -> modelMapper.map(order, OrderListDTO.class))
                .toList();
    }
}
