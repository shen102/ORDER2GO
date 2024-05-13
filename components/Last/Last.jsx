import React from 'react'
import logo from "../../assets/L1.png";
import { CiInboxIn, CiPhone, CiLocationOn, CiLogin, CiUser, CiLink} from "react-icons/ci";
import css from './Last.module.css'




const Last = () => {
  return (
    <div className={css.cLastWrapper}>
      <hr/>

      <div className={css.cLast}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          
        </div>
          <div className={css.block}> 
            <div className={css.detail}> 

              <span>Contact</span>
              <span className={css.pngLine}>
                
                <CiLocationOn className={css.icon}/>
                <span>Manila Philippines</span>
              </span>

              <span className={css.pngLine}>
                <CiPhone className="css.icon"/>
                <a href="tel:352-306-4415">352-898-7890</a>
              
              </span>

              <span className={css.pngLine}>
                <CiInboxIn className="css.icon"/>
                <a href="Order2Go"> www.Order2Go.com</a>
              
              </span>

            </div>
          
          </div>

          <div className={css.block}>
            <div className={css.detail}>
              <span>Account</span>
              <span className={css.pngLine}>
                <CiLogin className={css.icon}/>
                Sign In
              </span>
              </div>
            </div>

            <div className={css.block}>
            <div className={css.detail}>
              <span>Our Group</span>
              <span className={css.pngLine}>
                <CiUser className={css.icon}/>
                <a href="/about">
                BSIS NS-3A
                </a>
                
                
              </span>
          </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
              <span>Resources</span>
              <span className={css.pngLine}>
                <CiLink className={css.icon}/>
                Safety Privacy & Terms
              </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
            <div className={css.detail}>
              <span>Copyright ©2024 by Rodrigazo, Montes, San Diego</span>
              <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    
  );
};

export default Last;
