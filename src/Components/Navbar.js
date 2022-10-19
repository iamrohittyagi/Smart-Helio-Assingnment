import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="nav-head">Reports</h1>
      <div className="nav-button-container">
        <button>Overview</button>
        <button>Product</button>
        <button>Sale</button>
        <button>Marketing</button>
      </div>
    </div>
  );
}

export default Navbar;
