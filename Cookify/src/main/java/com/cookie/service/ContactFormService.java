package com.cookie.service;

import java.util.List;

import com.cookie.dto.ContactFormListDTO;
import com.cookie.dto.ContactFormReqDTO;
import com.cookie.dto.ContactFormRespDTO;

public interface ContactFormService {
	ContactFormRespDTO submitForm(ContactFormReqDTO dto);

	List<ContactFormListDTO> getContactFormList();
	 void deleteContact(Long id);
}
