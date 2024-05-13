import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/L1.png';
import {useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const isServicesRoute = window.location.pathname === '/services';

  
  React.useEffect(() => {
    if (isServicesRoute) {
      navigate('/');
    }
  }, [navigate, isServicesRoute]);

  const transition = { duration: 3, type: 'spring' };

  
  if (isServicesRoute) {
    return null;
  }

  return (
    <div className={css.container}>
      {/* Left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Life begins after coffee</span>

        <div className={css.text2}>
          <span>Love Your Self</span>
          <span className={css.text1}>You can't buy happiness, but you can buy coffee, and that's pretty close.</span>
        </div>
      </div>

      {/* Middle side */}
      <div className={css.wrapper}>
        {/* Blue circle */}
        <motion.div
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          src={HeroImg}
          alt=""
          width={600}
        />
      </div>

      {/* Right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>Coffee is the best part of waking up.</span>
          <span>Espresso yourself!.</span>
          <span>Espresso yourself!</span>
          <span>Espresso yourself!</span>
        </div>

        <div className={css.customers}>
          <span>Order Now!!!</span>
          <span>A good day starts with a great cup of coffee.</span>
          <span>Experience a chill</span>
          <span>
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;