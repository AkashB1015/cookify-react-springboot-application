package com.cookie.entities;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AttributeOverride(name="id", column=@Column(name="category_id"))
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
@Entity
@Table(name="categories")
public class Category extends BaseEntity{
	@Column(length=50)
	private String name;

	public Category(String name) {
		super();
		this.name = name;
	}
	
	
}
