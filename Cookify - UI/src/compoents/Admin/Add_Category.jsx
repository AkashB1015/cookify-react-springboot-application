import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { CATEGORY_API } from "../../constants/APIConstant";
import "../../assets/Admin.css"; 

import "../../App.css";

export default function AddCategory() {

  const [formData, setFormData] = useState({
    name: "",
    userId: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      userId: Number(formData.userId)
    };

    try {
      const response = await fetch(CATEGORY_API.ADD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed!", {
          theme: "colored",
          transition: Bounce
        });
        return;
      }

      toast.success("Category added successfully!", {
        theme: "colored",
        transition: Bounce
      });

      setFormData({ name: "", userId: "" });

    } catch (error) {
      toast.error("Server error!", {
        theme: "colored",
        transition: Bounce
      });
    }
  };
return (
  <div className="simple-page-bg d-flex justify-content-center">
    <div className="simple-card" style={{ width: "420px" }}>
      
      <h3 className="simple-title mb-3">Add Category</h3>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            className="simple-input"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter category name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            className="simple-input"
            type="number"
            name="userId"
            value={formData.userId}
            placeholder="Enter user ID"
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" className="simple-btn w-100">
          Submit
        </Button>

      </Form>
    </div>
  </div>
);

}
