package com.cookie.entities;


import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
@ToString(callSuper = true, exclude = {"myOrder", "myCookie"})
@Entity
@Table(name = "order_items")
@AttributeOverride(name = "id", column = @Column(name = "order_item_id"))
public class OrderItem extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order myOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cookie_id", nullable = false)
    private Cookie myCookie;

    private int quantity;

    public OrderItem(Order myOrder, Cookie myCookie, int quantity) {
        this.myOrder = myOrder;
        this.myCookie = myCookie;
        this.quantity = quantity;
    }
}

