import React from 'react';

import classes from '../../../styles/sections-styles/hero/IntroHero.module.css';
import { HeroHeader } from './HeroHeader';
import BurgerImg from '../../../assets/Burger image.png';

const IntroHero = () => {
  return (
    <section className={classes.hero_section}>
      <HeroHeader />
      <aside className={classes['hero-aside']}>
        <div className={classes['hero-aside__image']}>
          <img src={BurgerImg} alt="Burger" />
        </div>
        <div className={classes['hero-aside__desc']}>
          <h4>50 % off</h4>
          <p>The full price of burgers</p>
        </div>
      </aside>
    </section>
  );
};

export default IntroHero;
