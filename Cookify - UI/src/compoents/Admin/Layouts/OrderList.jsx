import React from "react";
import Dashboard from "../../Admin/Dashboard.jsx";
import OrderList from "../../Admin/OrderList.jsx";
import Footer from "./Footer.jsx";
export default function DashboardLayout() {
  return (
    <>
      <Dashboard/>    
      <div style={{ marginTop: "70px", padding: "20px" }}>
        <OrderList/>
        <Footer/>
      </div>
    </>
  );
}
