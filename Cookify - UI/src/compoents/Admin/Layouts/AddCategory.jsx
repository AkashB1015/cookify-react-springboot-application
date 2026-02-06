import React from "react";
import Dashboard from "../../Admin/Dashboard.jsx";
import Add_Category from "../../Admin/Add_Category.jsx";
import Footer from "./Footer.jsx";
export default function AddCategory() {
  return (
    <>
      <Dashboard/>    
      <div style={{ marginTop: "30px", padding: "20px" }}>
        <Add_Category />
        <Footer/>
      </div>
    </>
  );
}
