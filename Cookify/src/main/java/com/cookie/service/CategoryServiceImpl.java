package com.cookie.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cookie.custom_exception.ResourceNotFoundException;
import com.cookie.dto.CategoryReqDTO;
import com.cookie.dto.CategoryRespDTO;
import com.cookie.entities.Admin;
import com.cookie.entities.Category;
import com.cookie.repositories.AdminRepository;
import com.cookie.repositories.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final ModelMapper modelMapper;
    private final CategoryRepository categoryRepository;
    private final AdminRepository adminRepository;

    @Override
    public CategoryRespDTO addCategory(CategoryReqDTO dto) {

        
        Admin admin = adminRepository.findByUserDetails_Id(dto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User is NOT an admin"));

        // 2. Map DTO → Category entity (STRICT mode maps only 'name')
        Category category = modelMapper.map(dto, Category.class);

        // 3. Save category
        Category savedCategory = categoryRepository.save(category);

        // 4. Convert entity → response DTO
        CategoryRespDTO response = modelMapper.map(savedCategory, CategoryRespDTO.class);

        // 5. Add custom message
        response.setMessage("Category added successfully by admin (userId = " + dto.getUserId() + ")");

        return response;
    }
}
