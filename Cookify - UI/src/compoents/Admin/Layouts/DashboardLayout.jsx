import React from "react";
import Dashboard from "../../Admin/Dashboard.jsx";
import ProductList from "../../Admin/ProductList.jsx";
import Footer from "./Footer.jsx";

export default function DashboardLayout() {
  return (
    <>
      <Dashboard/>    
      <div style={{ marginTop: "30px", padding: "20px" }}>
        <ProductList />
        <Footer/>
      </div>
    </>
  );
}
