package com.cookie.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cookie.dto.ContactFormListDTO;
import com.cookie.dto.ContactFormReqDTO;
import com.cookie.dto.ContactFormRespDTO;
import com.cookie.service.ContactFormService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/contact-form")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ContactFormController {

    private final ContactFormService contactFormService;

   
    @PostMapping("/submit")
    public ResponseEntity<ContactFormRespDTO> submitForm(
            @Valid @RequestBody ContactFormReqDTO dto) {

        return ResponseEntity.ok(contactFormService.submitForm(dto));
    }

    
    @GetMapping("/list")
    public ResponseEntity<List<ContactFormListDTO>> getContactFormList() {
        return ResponseEntity.ok(contactFormService.getContactFormList());
    }

  
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable Long id) {
        contactFormService.deleteContact(id);
        return ResponseEntity.ok("Contact deleted successfully");
    }
}
