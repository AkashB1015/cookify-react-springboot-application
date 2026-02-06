package com.cookie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cookie.dto.CategoryReqDTO;
import com.cookie.service.CategoryService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "*")
public class CategoryController {
	private final CategoryService categoryService;
	
	@PostMapping("/add-category")
	public ResponseEntity<?> addCategory(@RequestBody @Valid CategoryReqDTO dto){
		System.out.println("in add category "+dto);
		return ResponseEntity.ok(categoryService.addCategory(dto));
	}
}
