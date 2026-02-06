import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Form, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "../../constants/APIConstant"; // update your path

export function Contact() {
  
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });


  const onSubmitHandler = async (values, { resetForm }) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };
    //  console.log("Payload:", payload); 
      const res = await axios.post(`${API_BASE_URL}/contact-form/submit`, payload);

      toast.success(res.data?.message || "Message sent!", {
        theme: "colored",
        transition: Bounce,
      });

      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message", {
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <section
      id="contact-section"
      className="py-5"
      style={{ backgroundColor: "#fafafa" }}
    >
      <Container style={{ paddingTop: "40px" }}>
        
        <Container className="text-center mb-4">
          <h2
            className="fw-bold"
            style={{ color: "#8B4513", fontFamily: "Georgia, serif" }}
          >
            🍪 Contact Us - Cookify
          </h2>

          <p className="text-muted" style={{ fontSize: "16px" }}>
            We’re always here to answer your questions and listen to your ideas.
          </p>
        </Container>

        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="mx-auto bg-white p-4 rounded shadow-sm"
              style={{ maxWidth: "700px" }}
            >
              
              <Form.Group className="mb-3">
                <Form.Label><i className="bi bi-person-fill me-2" /> Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><i className="bi bi-envelope-fill me-2" /> Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@cookify.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><i className="bi bi-telephone-fill me-2" /> Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="9811111111"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.phone && errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><i className="bi bi-pencil-square me-2" /> Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Type your message here..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.message && errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  className="px-4 py-2"
                  style={{
                    background: "#000000",
                    border: "none",
                    fontWeight: "600",
                    padding: "10px 30px",
                    borderRadius: "8px",
                  }}
                  disabled={!isValid || !dirty}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <ToastContainer autoClose={3000} theme="colored" transition={Bounce} />
      </Container>
    </section>
  );
}

export default Contact;
