package com.cookie.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ContactFormListDTO {
	private String name;
	private String email;
	private String phone;
	private String message;
}
