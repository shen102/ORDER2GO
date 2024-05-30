import React from "react";
import "./baa menu.css";
import searchIcon from "../icons/search.png";
import cartIcon from "../icons/cart.png";
import userIcon from "../icons/profile.png";
import homeIcon from "../icons/home.png";
import promo from "../icons/promo.png";
import transact from "../icons/transact.png";
import B1 from "../images/b1.png";
import B2 from "../images/b2.png";
import B3 from "../images/b3.png";
import B4 from "../images/b4.png";
import B5 from "../images/b5.png";
import B6 from "../images/b6.png";
import { Link } from "react-router-dom";

export const MenuItems2 = () => {
  return (
    <div className="Home">
      <div className="header">
        <img src={userIcon} alt="User Icon" className="profile-icon" />
        <h1>ORDER 2 GO</h1>
        <img src={cartIcon} alt="Cart Icon" className="icon" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Big Brew" />
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </div>
      <div className="products">
        <button className="product-button">
          <img src={okinawa} alt="B1" />
          Banoffee Frappe
        </button>
        <button className="product-button">
          <img src={chocolate} alt="B2" />
          Cheese Cake Milktea 
        </button>
        <button className="product-button">
          <img src={lemon} alt="B3" />
          Choco Thai Green Milktea
        </button>
        <button className="product-button">
          <img src={greenApple} alt="B4" />
          Chocolate Frappe
        </button>
        <button className="product-button">
          <img src={coffee} alt="B5" />
          Cocoa Milk
        </button>
        <button className="product-button">
          <img src={coffee} alt="B6" />
          Stawberry Frappe
        </button>
      </div>
      <div className="footer">
        <button className="footer-button">
          <img src={promo} alt="Promo" />
        </button>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="home-button">
            <img src={homeIcon} alt="Home" />
          </button>
        </Link>
        <button className="footer-button">
          <img src={transact} alt="Transact" />
        </button>
      </div>
    </div>
  );
};

export default MenuItems1;
