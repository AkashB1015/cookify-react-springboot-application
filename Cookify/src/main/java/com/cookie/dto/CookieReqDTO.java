package com.cookie.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class CookieReqDTO {
	private Long userId;
	private Long categoryId;
	@NotBlank(message = "Cookie name cannot be blank")
    @Size(min = 2, max = 50, message = "Cookie name must be between 2 and 50 characters")
	private String name;
	@Positive(message = "Price must be greater than 0")
	@DecimalMin(value = "0.1", message = "Minimum price must be 0.1")
	private double price;
	@Size(max = 300, message = "Description cannot exceed 255 characters")
	private String description;
	@PositiveOrZero(message = "Quantity must be zero or positive")
	private int quantityAvailable;
}
