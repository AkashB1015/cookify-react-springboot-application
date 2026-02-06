package com.cookie.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cookie.custom_exception.AuthenticationException;
import com.cookie.dto.AuthRequest;
import com.cookie.dto.AuthResponse;
import com.cookie.dto.UserRegisterRequest;
import com.cookie.entities.Customer;
import com.cookie.entities.Role;
import com.cookie.entities.User;
import com.cookie.repositories.CustomerRepository;
import com.cookie.repositories.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
	private final UserRepository  userRepository;
	private final CustomerRepository customerRepository;
	private final ModelMapper modelMapper;
	
	@Override
	public User registerUser(UserRegisterRequest req) {
		
		if(userRepository.existsByEmail(req.getEmail())) {
			throw new RuntimeException("Email already exists");
		}
		// setting the parameters
		User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());
        user.setLocation(req.getLocation());
        user.setRole(Role.CUSTOMER);   
        
     // Save User first
        User savedUser = userRepository.save(user);

        // Create a Customer entry linked to User (but do NOT change user fields)
        Customer customer = new Customer(savedUser);
        customerRepository.save(customer);


        return savedUser;
	}

	@Override
	public AuthResponse authenticate(AuthRequest dto) {
		User user = userRepository.findByEmailAndPassword(dto.getEmail(),dto.getPassword())
				.orElseThrow( () -> new AuthenticationException("Invalid email or password!!"));
		

		 
		 AuthResponse respDTO = modelMapper.map(user,AuthResponse.class);
		respDTO.setMessage("Login Successful!");
		
		return respDTO;
	}

}
