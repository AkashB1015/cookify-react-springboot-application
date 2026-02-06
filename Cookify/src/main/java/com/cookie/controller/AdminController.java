package com.cookie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cookie.dto.AdminRegisterRequest;
import com.cookie.dto.CategoryRespDTO;
import com.cookie.entities.Admin;
import com.cookie.service.AdminService;
import com.cookie.service.CategoryService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/admins")
@CrossOrigin(origins = "*")
public class AdminController {
	private final AdminService adminService;
	private final CategoryService categoryService;
	
	
	@PostMapping("/register")
	public ResponseEntity<Admin> registerAdmin(@RequestBody AdminRegisterRequest req){
		Admin admin = adminService.registerAdmin(req);
		return ResponseEntity.ok(admin);
	}
	
	
	
}
