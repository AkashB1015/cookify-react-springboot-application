package com.cookie.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customers")
@ToString(callSuper = true, exclude= {"orders","userDetails"})
@AttributeOverride(name="id",column=@Column(name="customer_id"))
public class Customer extends BaseEntity{
	//Customer 1----->1 User
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id",nullable = false)
	private User userDetails;
    @OneToMany(mappedBy = "myCustomer")
    private List<Order> orders = new ArrayList<>();
	
    
    public Customer(User user) {
		this.userDetails = user;
	}
	
    

    
    
}
