import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../App.css";

export default function About() {
  return (
    <div>
    
      <div className="about-banner">
        <img
          src="/cards_img/About.png"
          alt="Cookify Banner"
          className="about-banner-img"
        />
      </div>

      <Container className="text-center my-5">
        <h1 className="fw-bold about-title">About Cookify</h1>
        <p className="about-sub">
          Freshly baked cookies made with love, delivered to your door.
        </p>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center">

          <Col md={6}>
            <img
              src="/cards_img/About2.png"
              alt="Cookie Making"
              className="about-img"
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-semibold mb-3">Who We Are ?</h2>
            <p className="about-text">
              Cookify is a passionate bakery brand dedicated to bringing freshly baked
              cookies to your home. Every cookie is handmade using premium ingredients,
              baked in small batches, and delivered warm.
            </p>
            <p className="about-text">
              Our goal is simple—spread happiness with every bite. With years of baking
              experience behind us, we ensure flavor, freshness, and joy in every cookie.
            </p>

            <Button variant="warning" className="about-btn">
              Learn More
            </Button>
          </Col>

        </Row>
      </Container>

  
      <Container className="mt-5">
        <Row>

          <Col md={6}>
            <div className="mv-box">
              <h3 className="fw-bold mb-3">Our Mission</h3>
              <p>
                Our mission is to deliver warm, freshly baked cookies made from the
                finest ingredients. We focus on quick delivery, consistent quality,
                and unforgettable taste.  
              </p>
              <p>
                We aim to make every celebration sweeter—whether it's a small treat,
                a family gathering, or a special moment.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="mv-box">
              <h3 className="fw-bold mb-3">Our Vision</h3>
              <p>
                Our vision is to become the most loved cookie brand globally by
                innovating new flavors, offering delightful customer experiences,
                and maintaining premium quality at friendly prices.
              </p>
              <p>
                We dream of spreading Cookify joy across cities, homes, and hearts,
                one cookie at a time.
              </p>
            </div>
          </Col>

        </Row>
      </Container>

    </div>
  );
}
