import React from 'react';
import classes from '../../../styles/sections-styles/hero/IntroHero.module.css';
import BurgerImg from '../../../assets/Burger image.png';

const HeroAside = () => {
  return (
    <aside className={classes['hero-aside']}>
      <div className={classes['hero-aside__image']}>
        <img src={BurgerImg} alt="Burger" />
      </div>
      <div className={classes['hero-aside__desc']}>
        <h2>50 % off</h2>
        <p>The full price of burgers</p>
      </div>
    </aside>
  );
};

export default HeroAside;
