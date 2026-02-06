import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="simple-footer bg-dark text-white py-4 mt-auto">
            <div className="container">
                <div className="footer-content row text-center text-md-start align-items-center">

                    <div className="col-md-4 mb-4 mb-md-0">
                        <i className="bi me-5 fs-3 fw-bold" style={{ color: "#D68C45", fontFamily: "Georgia, serif", letterSpacing: "1px" }}>
                            Cookify
                        </i>

                        <p className="mb-1">support@cookify.com | +91 98765 43210</p>
                        <p className="mb-0">Mumbai, Maharashtra, India</p>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                        <h5 className="fw-bold text-light mb-2">Developed By</h5>
                        <p className="mb-1"> Team : 60 </p>
                        <p className="mb-0">Akash Bhadane | Suyog Joshi | Abhishek Borse</p>
                    </div>

                    <div className="col-md-4 text-md-end">

                        <h6 className="fw-bold text-light mb-2">Follow Us</h6>

                        <div className="d-flex justify-content-center justify-content-md-end gap-4">

                            <Link to="https://www.instagram.com/cookiecravings_/?hl=en" className="text-white fs-4">
                                <i className="bi bi-instagram"></i>
                            </Link>

                            <Link to="https://www.youtube.com/@Cookiecravings_ca" className="text-white fs-4">
                                <i className="bi bi-youtube"></i>
                            </Link>

                            <Link to="/linkedin" className="text-white fs-4">
                                <i className="bi bi-linkedin"></i>
                            </Link>

                            <Link to="/twitter" className="text-white fs-4">
                                <i className="bi bi-twitter"></i>
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom text-center mt-3 border-top pt-3">
                    <p className="mb-0 small text-secondary">
                        &copy; 2025 - Cookify. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
