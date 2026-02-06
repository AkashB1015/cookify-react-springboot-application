import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Contact from "./compoents/Contact/Contactpage.jsx";
import Homepage from "./compoents/Home/content/Homepage.jsx";
import Login from "./compoents/AuthLogin/Login.jsx";
import Aboutpage from "./compoents/About/aboutpage.jsx";
import AddCategory from "./compoents/Admin/Layouts/AddCategory.jsx";
import AddCookie from "./compoents/Admin/Layouts/AddCookie.jsx";
import DashboardLayout from "./compoents/Admin/Layouts/DashboardLayout.jsx";
import { AdminRoute, CustomerRoute } from "./services/SecureROut.jsx";
import OrderList from "./compoents/Admin/Layouts/OrderList.jsx";
import Contactdata from "./compoents/Admin/Layouts/Contact.jsx";
import Products from "./compoents/Customer/Products.jsx";
export function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/home"
          element={<CustomerRoute><Homepage /></CustomerRoute>}
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
     
        <Route path="/store" element={<Products />} />
      </Routes>

      <Routes>
        <Route
          path="/admin/addcategory"
          element={<AdminRoute><AddCategory /></AdminRoute>}
        />
        <Route
          path="/admin/addCookie"
          element={<AdminRoute><AddCookie /></AdminRoute>}
        />
        <Route
          path="/admin"
          element={<AdminRoute><DashboardLayout /></AdminRoute>}
        />
        <Route
          path="/order-list"
          element={<AdminRoute><OrderList /></AdminRoute>}
        />
         <Route
          path="/Contactdata"
          element={<AdminRoute><Contactdata /></AdminRoute>}
        />
      
       
      </Routes>

    </BrowserRouter>
  );
}
