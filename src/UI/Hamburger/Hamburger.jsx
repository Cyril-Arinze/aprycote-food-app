import React, { useState } from 'react';
import classes from '../../styles/UI-styles/hamburger-styles/Hamburger.module.css';

const Hamburger = () => {
  const [sideBarIsActive, setSideBarIsActive] = useState(false);
  const toggleSideBarHandler = () => {
    setSideBarIsActive((prevState) => !prevState);
  };

  const hamburgerClasses = sideBarIsActive
    ? `${classes.hamburger} ${classes['hamburger--collapse']} ${classes['is-active']}`
    : `${classes.hamburger} ${classes['hamburger--collapse']}`;
  return (
    <button
      onClick={toggleSideBarHandler}
      className={hamburgerClasses}
      type="button"
    >
      <span className={classes['hamburger-box']}>
        <span className={classes['hamburger-inner']}></span>
      </span>
    </button>
  );
};

export default Hamburger;
