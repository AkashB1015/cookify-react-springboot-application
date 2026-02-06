package com.cookie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	 void deleteByMyCookieId(Long cookieId);
	
}
