package com.cookie.entities;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="contact_form")
@AttributeOverride(name="id",column=@Column(name="contact_form_id"))
public class ContactForm extends BaseEntity{
	@Column(length=50)
	private String name;
	@Column(length=50)
	private String email;
	@Column(length=15)
	private String phone;
	@Column(length=300)
	private String message;
	
	//parameterized constructor
	public ContactForm(String name, String email, String phone, String message) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.message = message;
	}
	
	
	
}
