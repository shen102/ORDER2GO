import React, { useState } from 'react';
import css from './MenuIcon.css';
import { CgMenu } from "react-icons/cg";
import { Link } from 'react-router-dom';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container}>
      <button className={css.menuButton} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <CgMenu className={css.menuIcon} />
      </button>

      {isOpen && (
        <ul className={css.menu}>
          <li><Link to="/about">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
        </ul>
      )}
    </div>
  );
}

export default MenuButton;