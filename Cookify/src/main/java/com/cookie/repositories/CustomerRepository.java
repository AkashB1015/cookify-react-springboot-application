package com.cookie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.Customer;
import com.cookie.entities.User;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	void deleteByUserDetails(User user);
}
