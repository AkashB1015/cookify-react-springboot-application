package com.cookie.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CategoryReqDTO {

    @NotBlank(message = "Category name is required")
    private String name;

    private Long userId;   // userId of logged-in user (admin)
}