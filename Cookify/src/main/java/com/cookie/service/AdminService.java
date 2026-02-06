package com.cookie.service;

import com.cookie.dto.AdminRegisterRequest;
import com.cookie.entities.Admin;

public interface AdminService {
	Admin registerAdmin(AdminRegisterRequest req);
}
