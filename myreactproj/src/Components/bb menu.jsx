import React from "react";
import "./menu.css";
import searchIcon from "../icons/search.png";
import cartIcon from "../icons/cart.png";
import userIcon from "../icons/profile.png";
import homeIcon from "../icons/home.png";
import promo from "../icons/promo.png";
import transact from "../icons/transact.png";
import okinawa from "../images/Okinawa.png";
import chocolate from "../images/Chocolate.png";
import lemon from "../images/Lemon.png";
import greenApple from "../images/Green.png";
import coffee from "../images/Coffee.png";
import { Link } from "react-router-dom";

export const MenuItems1 = () => {
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
          <img src={okinawa} alt="Okinawa" />
          Okinawa
        </button>
        <button className="product-button">
          <img src={chocolate} alt="Chocolate" />
          Chocolate
        </button>
        <button className="product-button">
          <img src={lemon} alt="Lemon" />
          Lemon
        </button>
        <button className="product-button">
          <img src={greenApple} alt="Green Apple" />
          Green Apple
        </button>
        <button className="product-button">
          <img src={coffee} alt="Coffee" />
          Coffee
        </button>
        <button className="product-button">
          <img src={coffee} alt="Coffee" />
          Coffee
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
