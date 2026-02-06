package com.cookie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.Cookie;

public interface CookieRepository extends JpaRepository<Cookie, Long>{

}
