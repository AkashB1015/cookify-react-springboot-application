package com.cookie.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.Admin;
import com.cookie.entities.User;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findByUserDetails_Id(Long userId);
}
