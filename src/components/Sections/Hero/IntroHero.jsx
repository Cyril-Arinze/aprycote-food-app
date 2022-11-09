import React from 'react';

import classes from '../../../styles/sections-styles/hero/IntroHero.module.css';
import HeroHeader from './HeroHeader';
import HeroAside from './HeroAside';

const IntroHero = () => {
  return (
    <section className={classes.hero_section}>
      <HeroHeader />
      <HeroAside />
    </section>
  );
};

export default IntroHero;
