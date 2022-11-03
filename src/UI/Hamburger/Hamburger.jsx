import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sideBarSelector, UIAction } from '../../store/slices/ui-slice';
import classes from '../../styles/UI-styles/hamburger-styles/Hamburger.module.css';

const Hamburger = () => {
  const sideBarIsShown = useSelector(sideBarSelector);
  const dispatch = useDispatch();

  const toggleSideBarHandler = () => {
    // dispatch an action that toggles the sideBarIsShownValue in the store
    dispatch(UIAction.toggleSideBar());
  };

  // conditionally adding hamburger classes based on the state of the sideBar
  const hamburgerClasses = sideBarIsShown
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
