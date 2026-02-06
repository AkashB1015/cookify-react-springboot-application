package com.cookie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cookie.dto.AdminRegisterRequest;
import com.cookie.entities.Admin;
import com.cookie.entities.Role;
import com.cookie.entities.User;
import com.cookie.repositories.AdminRepository;
import com.cookie.repositories.CustomerRepository;
import com.cookie.repositories.UserRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;
    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;

    public AdminServiceImpl(AdminRepository adminRepository,
                            UserRepository userRepository,
                            CustomerRepository customerRepository) {
        this.adminRepository = adminRepository;
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public Admin registerAdmin(AdminRegisterRequest req) {

        // Find the User
        User user = userRepository.findById(req.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Step 1: Remove from Customer table if user is a CUSTOMER
        customerRepository.deleteByUserDetails(user);

        // Step 2: Update Role
        user.setRole(Role.ADMIN);
        userRepository.save(user);

        // Step 3: Create admin entry
        Admin admin = new Admin(user);
        return adminRepository.save(admin);
    }
}
