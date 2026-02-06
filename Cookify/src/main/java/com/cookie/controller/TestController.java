package com.cookie.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/test")
public class TestController {
	
	public TestController() {
		System.out.println("in constructor of "+getClass());
	}
	
	@GetMapping
	public List<Integer> renderWelcomePage() {
		return List.of(22, 25, 28);
	}
}
