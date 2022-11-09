import React from 'react';
import { useSelector } from 'react-redux';

import heroImg from '../../../assets/Hero.png';
import classes from '../../../styles/sections-styles/hero/IntroHero.module.css';
import Button from '../../../UI/Buttons/Button';
import { userDataSelector } from '../../../store/slices/auth-slice';

const HeroHeader = (props) => {
  const userData = useSelector(userDataSelector);
  return (
    <header
      className={classes.hero}
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className={classes.hero_details}>
        <span>👑 Deal of the weekend</span>
        <h1> Hello, {userData.name}</h1>
        <p>
          Get <span>FREE delivery</span> on every weekend
        </p>
        <Button className={classes.action_btn}>Check Menu</Button>
      </div>
    </header>
  );
};

export default HeroHeader;
