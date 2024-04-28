import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import logo from './logo.jpg'

function Header() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul>
            <li>
              <Link to="/signin" className={css.signinLink}>SignIn</Link>
            </li>
          </ul>
        </div>
        <div className={css.menu}>
          <ul>
            <li>
              <Link to="/signup" className={css.signupLink}>SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;