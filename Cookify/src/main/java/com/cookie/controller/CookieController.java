package com.cookie.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cookie.dto.CookieListDTO;
import com.cookie.dto.CookieReqDTO;
import com.cookie.dto.CookieRespDTO;
import com.cookie.dto.CookieUpdateDTO;
import com.cookie.service.CookieService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cookie")
@CrossOrigin(origins = "*")
public class CookieController {
	private final CookieService cookieService;
	
	// GET endpoint to fetch all cookies with full info
    @GetMapping("/list")
    public List<CookieListDTO> getAllCookies() {
        return cookieService.getAllCookies();
    }
	
	@PostMapping("/add-cookie")
	public ResponseEntity<?> addCookie(@RequestBody @Valid CookieReqDTO dto){
		System.out.println("in add c "+dto);
		return ResponseEntity.ok(cookieService.addCookie(dto));
	}
	
	// DELETE endpoint for deleting a cookie by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCookie(@PathVariable("id") Long cookieId) {
        cookieService.deleteCookieById(cookieId);
        return ResponseEntity.ok("Cookie with ID " + cookieId + " deleted successfully");
    }
    
 // UPDATE cookie — only name, price, description, quantity
    @PutMapping("/{id}")
    public ResponseEntity<CookieRespDTO> updateCookie(
            @PathVariable Long id,
            @Valid @RequestBody CookieUpdateDTO dto
    ) {
        dto.setId(id);
        CookieRespDTO updated = cookieService.updateCookie(dto);
        return ResponseEntity.ok(updated);
    }
}
