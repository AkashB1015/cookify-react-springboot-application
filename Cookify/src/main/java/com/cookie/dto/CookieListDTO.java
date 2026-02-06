package com.cookie.dto;



import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CookieListDTO {
    private Long id;
    private String name;
    private double price;
    private String description;
    private int quantityAvailable;
    private String categoryName;
    private String message; 
}

