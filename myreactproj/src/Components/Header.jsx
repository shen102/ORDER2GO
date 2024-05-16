import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Coffee Milk Tea Logo" className="logo" />
      </div>
      <h1 className="title">ORDER 2 GO</h1>
      <p className="subtitle">Coffee & Milk Tea</p>

      <div className="container">
        <div className="button-container">
          <button className="sign-in-button">Sign In</button>
        </div>
        <div className="button-container">
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
