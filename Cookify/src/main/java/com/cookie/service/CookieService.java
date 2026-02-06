package com.cookie.service;

import java.util.List;

import com.cookie.dto.CookieListDTO;
import com.cookie.dto.CookieReqDTO;
import com.cookie.dto.CookieRespDTO;
import com.cookie.dto.CookieUpdateDTO;

public interface CookieService {

	CookieRespDTO addCookie(CookieReqDTO dto);

	// New method for getting all cookies
	List<CookieListDTO> getAllCookies();
	
	// delete cookie by Id
	boolean deleteCookieById(Long cookieId);

	CookieRespDTO updateCookie(CookieUpdateDTO dto);
}
