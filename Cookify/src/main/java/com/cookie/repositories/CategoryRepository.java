package com.cookie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
