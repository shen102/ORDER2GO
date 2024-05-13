import React, { Component } from 'react';
import css from './Virtual.module.css';
import ReactCompareImage from 'react-compare-image';
import BeforeImage from '../../assets/c1.jpg'; // Adjust the path accordingly
import AfterImage from '../../assets/m1.jpg'; // Adjust the path accordingly

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>TRY IT NOW!</span>
        <span>Coffee is Life</span>
        <span>You Need to Chill!</span>
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={BeforeImage} rightImage={AfterImage} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
