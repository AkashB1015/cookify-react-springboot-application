package com.cookie.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactFormReqDTO {
	@NotBlank(message="Name is required")
	@Size(max=50)
	private String name;
	@NotBlank(message="Email is required")
	@Email(message = "invalid email format")
	private String email;
	@Size(max=15)
	private String phone;
	@Size(max=300)
	private String message;
}
