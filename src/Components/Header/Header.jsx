import React from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <span>My website</span>
        <br></br>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About </Link>
      </nav>
    </div>
  );
};

export default Header;
