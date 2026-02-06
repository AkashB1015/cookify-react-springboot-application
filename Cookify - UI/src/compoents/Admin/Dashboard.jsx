import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiLogOut,
  FiPlusCircle,
  FiList,
  FiPhoneCall,
  FiPackage,
  FiGrid
} from "react-icons/fi";
import { toast } from "react-toastify";

import "../../index.css";

export default function AdminNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-cookify pt-0">
      <div className="container-fluid px-3">

        <Link className="navbar-brand cookify-logo" to="/admin/dashboard">
          🍪 <span className="cookify-text">
            <i className="bi me-5 fs-3 fw-bold">Cookify</i>
          </span>
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div
          className="collapse navbar-collapse justify-content-between"
          id="adminNavbar"
        >
          <ul className="navbar-nav ms-lg-2 gap-0">

            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/admin">
                <FiGrid className="me-1" /> Dashboard
              </Link>
            </li>

           
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/admin/addCookie">
                <FiPlusCircle className="me-1" /> Add Cookie
              </Link>
            </li>

            
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/admin/addcategory">
                <FiList className="me-1" /> Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/Contactdata">
                <FiPhoneCall className="me-1" /> Contacts
              </Link>
            </li>

       
            <li className="nav-item">
              <Link className="nav-link navbar-link" to="/order-list">
                <FiPackage className="me-1" /> Orders
              </Link>
            </li>

          </ul>

         
          <div className="d-flex align-items-center">
            <button
              className="btn sign-btn d-flex align-items-center"
              onClick={handleLogout}
            >
              <FiLogOut className="me-2" size={18} />
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
