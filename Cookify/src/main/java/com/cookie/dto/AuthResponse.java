package com.cookie.dto;

import com.cookie.entities.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class AuthResponse {
	private Long id;
	private String name;
	private String email;
	private Role role;
	private String message;
}
