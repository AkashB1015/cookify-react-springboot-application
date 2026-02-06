import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";

export default function Navbar() {
  const navigate = useNavigate();

  // Check if user is logged in
  const customer = JSON.parse(localStorage.getItem("customer"));
  const isLoggedIn = !!customer; // true if customer exists

  const handleLogout = () => {
    // Clear saved user session
    localStorage.removeItem("customer");

    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-cookify pt-0">
      <div className="container-fluid px-3">

        <Link className="navbar-brand cookify-logo" to="/">
          🍪 <span className="cookify-text">
            <i className="bi me-5 fs-3 fw-bold">Cookify</i>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
           <ul className="navbar-nav ms-rg-2 gap-0">
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/store">Store</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">

            {/* Show Login only if no user logged in */}
            {!isLoggedIn && (
              <Link to="/login">
                <button className="btn sign-btn">
                  <FiUser className="me-2" size={18} /> Sign In
                </button>
              </Link>
            )}

            {/* Show Logout only if user is logged in */}
            {isLoggedIn && (
              <button
                className="btn sign-btn d-flex align-items-center"
                onClick={handleLogout}
              >
                <FiLogOut className="me-2" size={18} />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
