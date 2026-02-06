import React from "react";
import Dashboard from "../../Admin/Dashboard.jsx";
import Contactdata from "../../Admin/Contactdata.jsx";
import Footer from "./Footer.jsx";
export default function DashboardLayout() {
  return (
    <>
      <Dashboard/>    
      <div style={{ marginTop: "30px", padding: "20px" }}>
        <Contactdata />
        <Footer/>
      </div>
    </>
  );
}
