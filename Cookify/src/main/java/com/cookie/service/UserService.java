package com.cookie.service;

import com.cookie.dto.AuthRequest;
import com.cookie.dto.AuthResponse;
import com.cookie.dto.UserRegisterRequest;
import com.cookie.entities.User;

public interface UserService {
	User registerUser(UserRegisterRequest req);

	AuthResponse authenticate(AuthRequest dto);
}
