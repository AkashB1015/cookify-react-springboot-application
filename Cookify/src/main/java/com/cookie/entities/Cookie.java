package com.cookie.entities;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude= "myCategory")
@Entity
@Table(name="cookies")
@AttributeOverride(name="id",column=@Column(name="cookie_id"))
public class Cookie extends BaseEntity{
	@Column(length=50)
	private String name;
	private double price;
	@Column(length=300)
	private String description;
	@Column(name="quantity_available")
	private int quantityAvailable;
	/*
	 * Cookie * ------> 1 Category
	 * */
	@ManyToOne
	@JoinColumn(name="category_id",nullable=false)
	private Category myCategory;
	
	//parameterized constructor
	public Cookie(String name, double price, String description, int quantityAvailable, Category myCategory) {
	    super();
		this.name = name;
	    this.price = price;
	    this.description = description;
	    this.quantityAvailable = quantityAvailable;
	    this.myCategory = myCategory;
	}

	
	
}
