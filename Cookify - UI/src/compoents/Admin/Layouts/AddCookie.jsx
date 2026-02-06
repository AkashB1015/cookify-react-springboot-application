import React from "react";
import Dashboard from "../../Admin/Dashboard.jsx";
import Add_cookicooki from "../../Admin/Add_cooki.jsx";
import Footer from "./Footer.jsx";
export default function DashboardLayout() {
  return (
    <>
      <Dashboard/>    
      <div style={{ marginTop: "30px", padding: "20px" }}>
        <Add_cookicooki />
        <Footer/>
      </div>
    </>
  );
}
