package com.cookie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cookie.dto.AuthRequest;
import com.cookie.dto.UserRegisterRequest;
import com.cookie.entities.User;
import com.cookie.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
	private final UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody UserRegisterRequest req){
		User user = userService.registerUser(req);
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> userAuthentication(@RequestBody @Valid AuthRequest dto){
		System.out.println("in sign in "+dto);
		
		return ResponseEntity.ok(userService.authenticate(dto));
	}
}
