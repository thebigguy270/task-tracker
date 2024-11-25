import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</Link>
      <Link to="/calendar" style={{ margin: "0 10px" }}>Calendar</Link>
      <Link to="/" style={{ margin: "0 10px" }}>Logout</Link>
    </nav>
  );
};

export default Navbar;
