package com.cookie.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.cookie.dto.ContactFormListDTO;
import com.cookie.dto.ContactFormReqDTO;
import com.cookie.dto.ContactFormRespDTO;
import com.cookie.entities.ContactForm;
import com.cookie.repositories.ContactFormRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactFormServiceImpl implements ContactFormService{
	private final ContactFormRepository contactFormRepository;
	private final ModelMapper modelMapper; 
	
	
	@Override
	public ContactFormRespDTO submitForm(ContactFormReqDTO dto) {
		
		ContactForm form = modelMapper.map(dto, ContactForm.class);
		
		ContactForm saved = contactFormRepository.save(form);
		

        // Prepare response DTO
        ContactFormRespDTO response = new ContactFormRespDTO();
        response.setId(saved.getId());
        response.setMessage("Your message has been submitted successfully!");
		
		return response;
	}


	@Override
	public List<ContactFormListDTO> getContactFormList() {

	    return contactFormRepository.findAll()
	            .stream()
	            .map(contact -> modelMapper.map(contact, ContactFormListDTO.class))
	            .collect(Collectors.toList());
	}
	
	@Transactional
    @Override
    public void deleteContact(Long id) {
        if (!contactFormRepository.existsById(id)) {
            throw new RuntimeException("Contact not found with id: " + id);
        }
        contactFormRepository.deleteById(id);
    }


}
