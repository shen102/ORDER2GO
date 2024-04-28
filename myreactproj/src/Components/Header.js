import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';


function Header() {
  
  return (
    <div className={css.container}>
      <div className={css.right}>
        <div className={css.menu}>
          <ul>
            <li>
              <Link to="/signin" className={css.signinLink}>SignIn</Link>
            </li>
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