import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { ADD_COOKIE_API} from "../../constants/APIConstant";

export default function AddCookie() {

  const [formData, setFormData] = useState({
    userId: "",
    categoryId: "",
    name: "",
    price: "",
    description: "",
    quantityAvailable: ""
  });

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: Number(formData.userId),
      categoryId: Number(formData.categoryId),
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      quantityAvailable: Number(formData.quantityAvailable)
    };

    try {
      const res = await fetch(ADD_COOKIE_API.ADD, {   // API call 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to add cookie!", {
          theme: "colored",
          transition: Bounce,
        });
        return;
      }

      toast.success("Cookie Added Successfully!", {
        theme: "colored",
        transition: Bounce,
      });

    
      setFormData({
        userId: "",
        categoryId: "",
        name: "",
        price: "",
        description: "",
        quantityAvailable: ""
      });

    } catch (err) {
      toast.error("Server error!", { theme: "colored" });
    }
  };

 return (
  <div className="simple-page-bg d-flex justify-content-center align-items-center">
    <div className="simple-card" style={{ width: "600px" }}>

      <h3 className="text-center fw-bold mb-3">
        Add Cookie 🍪
      </h3>

      <Form onSubmit={handleSubmit}>

       
        <Form.Group className="mb-3">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            className="simple-input"
            type="number"
            name="userId"
            placeholder="Enter userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Category ID</Form.Label>
          <Form.Control
            className="simple-input"
            type="number"
            name="categoryId"
            placeholder="Enter categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          />
        </Form.Group>

  
        <Form.Group className="mb-3">
          <Form.Label>Cookie Name</Form.Label>
          <Form.Control
            className="simple-input"
            type="text"
            name="name"
            placeholder="Enter cookie name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

  
        <Form.Group className="mb-3">
          <Form.Label>Price (₹)</Form.Label>
          <Form.Control
            className="simple-input"
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

 
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="simple-input"
            as="textarea"
            rows={3}
            name="description"
            placeholder="Enter cookie description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

   
        <Form.Group className="mb-3">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            className="simple-input"
            type="number"
            name="quantityAvailable"
            placeholder="Enter quantity"
            value={formData.quantityAvailable}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" className="simple-btn w-100">
          Add Cookie
        </Button>

      </Form>

      <ToastContainer />
    </div>
  </div>
);

}
