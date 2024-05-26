import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bb menu.css";
import searchIcon from "../icons/search.png";
import cartIcon from "../icons/cart.png";
import userIcon from "../icons/profile.png";
import homeIcon from "../icons/home.png";
import promo from "../icons/promo.png";
import transact from "../icons/transact.png";
import okinawa from "../images/DM.png";
import chocolate from "../images/DD.png";
import lemon from "../images/BF.png";
import greenApple from "../images/DB.png";
import coffee from "../images/ICM.png";
import { FaPlusCircle } from "react-icons/fa"; // Importing Font Awesome icon
import AddCart from "../Components/cart"; // Import Cart component

const ProductCard = ({ image, title, description, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ title }); // Pass an object with the title property to addToCart
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="add-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <div className="add-icon">
        <FaPlusCircle size={24} color="gold" />
      </div>
    </div>
  );
};
const MenuItems = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === product.title);
      if (existingItem) {
        // If the product already exists in the cart, increase its quantity
        return prevCart.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="Home">
      <div className="header">
        <img src={userIcon} alt="User Icon" className="profile-icon" />
        <h1>ORDER 2 GO</h1>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cartIcon} alt="Cart Icon" className="icon" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Big Brew" />
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </div>
      <div className="products">
        <ProductCard
          image={okinawa}
          title="Okinawa"
          description="Delicious Okinawa drink"
          addToCart={() => addToCart({ title: "Okinawa" })}
        />

        <ProductCard
          image={chocolate}
          title="Chocolate"
          description="Rich chocolate flavor"
          addToCart={addToCart}
        />
        <ProductCard
          image={lemon}
          title="Lemon"
          description="Refreshing lemon taste"
          addToCart={addToCart}
        />
        <ProductCard
          image={greenApple}
          title="Green Apple"
          description="Tart green apple"
          addToCart={addToCart}
        />
        <ProductCard
          image={coffee}
          title="Coffee"
          description="Strong coffee brew"
          addToCart={addToCart}
        />
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
     
      
      <AddCart cartItems={cart} />
    </div>
  );
};

export default MenuItems;
