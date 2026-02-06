package com.cookie.entities;


import jakarta.persistence.AttributeOverride;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
@Table(name="admins")
@AttributeOverride(name="id",column=@Column(name="admin_id"))
public class Admin extends BaseEntity{
	// Admin 1----->1 User
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="user_id",nullable = false)
	private User userDetails;

	//parameterized constructor
	public Admin(User userDetails) {
		super();
		this.userDetails = userDetails;
	}
	
	
	
	
	
}
