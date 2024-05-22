import React from 'react';
import './homepage.css';
import coffeeIcon from "../images/Coffee.png";
import milkTeaIcon from '../images/Milktea.png';
import searchIcon from '../icons/search.png';
import cartIcon from '../icons/cart.png';
import userIcon from '../icons/profile.png';
import homeIcon from '../icons/home.png';
import settingsIcon from '../icons/settings.png';
import shopIcon from '../icons/shop.png';

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
        <button className="product-button">
          <img src={coffeeIcon} alt="Big Brew" />
          Big Brew
        </button>
        <button className="product-button">
          <img src={milkTeaIcon} alt="Don Maka" />
          Don Machiato
        </button>
      </div>
      <div className="affiliate-shops">
        <h2>Affiliate Shop</h2>
        <button className="shop-button">
          <img src={shopIcon} alt="Shop" />
        </button>
        <button className="shop-button">
          <img src={shopIcon} alt="Shop" />
        </button>
        <button className="shop-button">
          <img src={shopIcon} alt="Shop" />
        </button>
      </div>
      <div className="footer">
        <button className="footer-button">
          <img src={homeIcon} alt="Home" />
        </button>
        <button className="footer-button">
          <img src={settingsIcon} alt="Settings" />
        </button>
      </div>
    </div>
  );
}

export default Homepage;
