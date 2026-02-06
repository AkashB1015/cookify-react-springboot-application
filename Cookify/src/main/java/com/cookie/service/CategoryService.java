package com.cookie.service;



import com.cookie.dto.CategoryReqDTO;
import com.cookie.dto.CategoryRespDTO;

public interface CategoryService {

	CategoryRespDTO addCategory(CategoryReqDTO dto);
	
	
}
