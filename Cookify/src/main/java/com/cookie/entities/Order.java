package com.cookie.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper=true, exclude={"myCustomer","orderItems"})
@Entity
@Table(name="orders")
@AttributeOverride(name="id",column=@Column(name="order_id"))
public class Order extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer myCustomer;

    private double totalAmount;

    @Enumerated(EnumType.STRING)
    private OrderStatus status = OrderStatus.PENDING;

    @OneToMany(mappedBy = "myOrder", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();

    public Order(Long id, LocalDate createdOn, LocalDateTime lastUpdated, Customer myCustomer, double totalAmount, OrderStatus status) {
        super(id, createdOn, lastUpdated);
        this.myCustomer = myCustomer;
        this.totalAmount = totalAmount;
        this.status = status;
    }

}

