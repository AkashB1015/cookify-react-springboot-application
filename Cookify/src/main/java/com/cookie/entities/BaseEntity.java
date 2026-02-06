package com.cookie.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@MappedSuperclass
@Getter
@Setter
@ToString
@NoArgsConstructor
public abstract class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@CreationTimestamp
	@Column(name="created_on")
	private LocalDate createdOn;
	@UpdateTimestamp
	@Column(name="last_updated")
	private LocalDateTime lastUpdated;
	
	//parameterized Constructor
	public BaseEntity(Long id, LocalDate createdOn, LocalDateTime lastUpdated) {
		super();
		this.id = id;
		this.createdOn = createdOn;
		this.lastUpdated = lastUpdated;
	}
	
	
	
}
