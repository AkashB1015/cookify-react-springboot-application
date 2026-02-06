package com.cookie.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CookieRespDTO {
	private Long id;
	private String name;
	private double price;
	private String message;
}
