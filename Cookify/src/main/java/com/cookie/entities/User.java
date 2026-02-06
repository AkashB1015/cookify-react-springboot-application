package com.cookie.entities;



import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name="users")
@AttributeOverride(name="id", column=@Column(name="user_id"))
public class User extends BaseEntity{
	@Column(length=50, nullable=false)
	private String name;
	@Column(length=300, unique=true,nullable=false)
	private String email;
	@Column(length=300, nullable=false)
	private String password;
	@Column(length=50)
	private String location;
	@Enumerated(EnumType.STRING) 
	private Role role;
	
	
	public User(String name, String email, String password,String location, Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.location = location;
		this.role = role;
	}
	
	
	
	
	
}
