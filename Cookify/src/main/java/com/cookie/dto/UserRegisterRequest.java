package com.cookie.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegisterRequest {
	private String name;
	private String email;
	private String password;
	private String location;
}
