package com.cookie.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cookie.custom_exception.ResourceNotFoundException;
import com.cookie.dto.CookieListDTO;
import com.cookie.dto.CookieReqDTO;
import com.cookie.dto.CookieRespDTO;
import com.cookie.dto.CookieUpdateDTO;
import com.cookie.entities.Admin;
import com.cookie.entities.Category;
import com.cookie.entities.Cookie;
import com.cookie.repositories.AdminRepository;
import com.cookie.repositories.CategoryRepository;
import com.cookie.repositories.CookieRepository;
import com.cookie.repositories.OrderItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CookieServiceImpl implements CookieService {

    private final ModelMapper modelMapper;
    private final CategoryRepository categoryRepository;
    private final AdminRepository adminRepository;
    private final CookieRepository cookieRepository;
    private final OrderItemRepository orderItemRepository;

    @Override
    public CookieRespDTO addCookie(CookieReqDTO dto) {

        // 1. Validate Admin
        Admin admin = adminRepository.findByUserDetails_Id(dto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Admin Id"));

        // 2. Validate Category
        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        // 3. Map DTO to entity (without category)
        Cookie cookie = modelMapper.map(dto, Cookie.class);

        // 4. Explicitly set Category
        cookie.setMyCategory(category);

        // 5. Save cookie
        Cookie savedCookie = cookieRepository.save(cookie);

        // 6. Map to response DTO
        CookieRespDTO response = modelMapper.map(savedCookie, CookieRespDTO.class);

        // 7. Add success message
        response.setMessage("Cookie added successfully by admin (userId = " + dto.getUserId() + ")");

        return response;
    }
    
    @Override
    public List<CookieListDTO> getAllCookies() {
        List<Cookie> cookies = cookieRepository.findAll();

        return cookies.stream()
                .map(cookie -> {
                    CookieListDTO dto = new CookieListDTO();
                    dto.setId(cookie.getId());
                    dto.setName(cookie.getName());
                    dto.setPrice(cookie.getPrice());
                    dto.setDescription(cookie.getDescription());
                    dto.setQuantityAvailable(cookie.getQuantityAvailable());
                    if (cookie.getMyCategory() != null) {
                        dto.setCategoryName(cookie.getMyCategory().getName());
                    }
                    dto.setMessage("Available");
                    return dto;
                })
                .collect(Collectors.toList());
    }
    
    @Override
    public boolean deleteCookieById(Long cookieId) {
        // Check if the cookie exists
        if (!cookieRepository.existsById(cookieId)) {
            throw new ResourceNotFoundException("Cookie not found with id: " + cookieId);
        }

        // Delete the cookie
        orderItemRepository.deleteByMyCookieId(cookieId);
        cookieRepository.deleteById(cookieId);
        return true; // return true if deletion is successful
    }
    
    @Override
    public CookieRespDTO updateCookie(CookieUpdateDTO dto) {

        Cookie cookie = cookieRepository.findById(dto.getId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Cookie not found with ID: " + dto.getId()
                ));

        // Update ONLY allowed fields
        cookie.setName(dto.getName());
        cookie.setPrice(dto.getPrice());
        cookie.setDescription(dto.getDescription());
        cookie.setQuantityAvailable(dto.getQuantityAvailable());

        Cookie updated = cookieRepository.save(cookie);

        CookieRespDTO resp = modelMapper.map(updated, CookieRespDTO.class);
        resp.setMessage("Cookie updated successfully");

        return resp;
    }
}

