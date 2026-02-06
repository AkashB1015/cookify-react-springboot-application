package com.cookie.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactFormRespDTO {
	private Long id;
	private String message = "Your message has been submitted successfully!";
}
