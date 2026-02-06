package com.cookie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
