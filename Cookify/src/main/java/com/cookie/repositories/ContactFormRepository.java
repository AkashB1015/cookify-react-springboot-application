package com.cookie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookie.entities.ContactForm;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long>{

}
