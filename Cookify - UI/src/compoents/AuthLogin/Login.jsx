import * as Yup from "yup";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";

import { AUTH_API, STORAGE_KEYS } from "../../constants/APIConstant";
import "../../App.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

 
  const loginSchema = Yup.object({
    email: Yup.string().email("Enter valid email").required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const registerSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Enter valid email").required("Email required"),
    location: Yup.string().required("Address required"),
    password: Yup.string().required("Password required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const url = isLogin ? AUTH_API.LOGIN : AUTH_API.REGISTER;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Something went wrong!", { theme: "colored" });
        return;
      }

   
      if (isLogin) {
        toast.success(data.message || "Login successful!", { theme: "colored" });

     
        localStorage.setItem(STORAGE_KEYS.CUSTOMER, JSON.stringify(data));

     
        const role = data.role?.toLowerCase();

        if (role === "admin") {
          navigate("/admin");
        } else if (role === "customer") {
          navigate("/store");
        } else {
          toast.error("Unknown role!", { theme: "colored" });
        }
      }

  
      else {
        toast.success("Registered successfully!", { theme: "colored" });
        setIsLogin(true);
      }

      resetForm();

    } catch (error) {
      toast.error("Server error!", { theme: "colored" });
    }
  };

  return (
    <Container fluid className="auth-bg">
      <Row className="justify-content-center w-100">
        <Col md={5}>
          <div className="auth-card fadeIn">

            <h3 className="auth-title">{isLogin ? "Sign In" : "Register"}</h3>

            <Formik
              enableReinitialize
              initialValues={{
                name: "",
                email: "",
                password: "",
                location: "",
              }}
              validationSchema={isLogin ? loginSchema : registerSchema}
              onSubmit={handleSubmit}
            >
              {({
                values, errors, touched,
                handleChange, handleBlur,
                handleSubmit, isValid, dirty
              }) => (
                <Form noValidate onSubmit={handleSubmit}>

          
                  {!isLogin && (
                    <Form.Control
                      className="auth-input mb-3"
                      name="name"
                      placeholder="Enter name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.name && errors.name}
                    />
                  )}

                  {/* Email */}
                  <Form.Control
                    className="auth-input mb-3"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />

                  {/* Password */}
                  <Form.Control
                    className="auth-input mb-2"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && errors.password}
                  />

                  <Form.Check
                    type="checkbox"
                    className="small mb-3"
                    label="Show password"
                    onChange={() => setShowPassword(!showPassword)}
                  />

                  {/* Address - Register only */}
                  {!isLogin && (
                    <Form.Control
                      className="auth-input mb-3"
                      name="location"
                      placeholder="Enter address"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.location && errors.location}
                    />
                  )}

                  <Button
                    className="auth-submit w-100 mb-2"
                    type="submit"
                    disabled={!dirty || !isValid}
                  >
                    {isLogin ? "SIGN IN" : "REGISTER"}
                  </Button>

                  {/* Toggle */}
                  <p className="auth-footer text-center mt-2">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}

                    <Button
                      variant="link"
                      className="px-1 fw-bold"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? "Register" : "Sign In"}
                    </Button>

                    <span className="text-muted px-1 fw-bold">|</span>

                    <Link to="/" className="auth-link">Home</Link>
                  </p>

                </Form>
              )}
            </Formik>

          </div>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
}
