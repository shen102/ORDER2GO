import React from "react";
import "./homepage.css";
import coffeeIcon from "../images/Coffee.png";
import milkTeaIcon from "../images/Milktea.png";
import coffee from "../images/Ice Coffee.png";
import okinawa from "../images/Okinawa.png";
import searchIcon from "../icons/search.png";
import cartIcon from "../icons/cart.png";
import userIcon from "../icons/profile.png";
import homeIcon from "../icons/home.png";
import promo from "../icons/promo.png";
import transact from "../icons/transact.png";
import BigBrew from "../images/BigBrew.png";
import DonMacchiatos from "../images/Don Macchiatos.png";
import Baabaa from "../images/Baa Baa.png";

function Homepage() {
  return (
    <div className="Home">
      <div className="header">
        <img src={userIcon} alt="User Icon" className="icon" />
        <h1>ORDER 2 GO</h1>
        <img src={cartIcon} alt="Cart Icon" className="icon" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="Search Icon" className="icon" />
      </div>
      <div className="categories">
        <button className="category-button">
          <img src={coffeeIcon} alt="Coffee" />
          Coffee
        </button>
        <button className="category-button">
          <img src={milkTeaIcon} alt="Milk Tea" />
          Milk Tea
        </button>
      </div>
      <div className="top-products">
        <h2>Top Products</h2>
        <div className="products">
        <button className="product-button">
          <img src={okinawa} alt="Big Brew" />
          Big Brew
        </button>
        <button className="product-button">
          <img src={coffee} alt="Don Maka" />
          Don Maka
        </button>
      </div>
      </div>

      
      <div className="affiliate-shops">
        <h2>Affiliate Shop</h2>
        <div className="shops">
          <button className="shop-button">
            <img src={BigBrew} alt="Shop" />
          </button>
          <button className="shop-button">
            <img src={DonMacchiatos} alt="Shop" />
          </button>
          <button className="shop-button">
            <img src={Baabaa} alt="Shop" />
          </button>
        </div>
      </div>
      <div className="footer">
        <button className="footer-button">
          <img src={promo} alt="Promo" />
        </button>
        <button className="footer-button">
          <img src={homeIcon} alt="Home" />
        </button>
        <button className="footer-button">
          <img src={transact} alt="Transact" />
        </button>
      </div>
    </div>
  );
}

export default Homepage;
