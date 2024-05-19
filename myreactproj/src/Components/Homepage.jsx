import React from 'react';
import './homepage.css';

export const Homepage = () => {
  return (
    <div className="home">
      <header className="home-1">
        <div className="user-icon">👤</div>
        <div className="order-text">ORDER 2 GO</div>
        <div className="cart-icon">🛒</div>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="categories">
        <button className="category-btn">Coffee</button>
        <button className="category-btn">Milk Tea</button>
      </div>
      <div className="top-products">
        <div className="product">
          <span className="product-name">Big Brew</span>
          <span className="product-price">₱39 Okinawa</span>
        </div>
        <div className="product">
          <span className="product-name">Don Machiato</span>
          <span className="product-price">₱39</span>
        </div>
      </div>
      <div className="affiliate-shops">
        <div className="shop-logo">BigBrew</div>
        <div className="shop-logo">Don N</div>
        <div className="shop-logo">Baa Baa</div>
      </div>
      <footer className="footer">
        <button className="footer-btn">⚙️</button>
        <button className="footer-btn">🏠</button>
        <button className="footer-btn">📋</button>
      </footer>
    </div>
  );
}

export default Homepage;
