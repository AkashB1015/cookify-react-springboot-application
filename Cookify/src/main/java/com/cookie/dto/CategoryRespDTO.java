package com.cookie.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CategoryRespDTO {
    private Long id;
    private String name;
    private String message;
}
