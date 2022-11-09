import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sideBarSelector, UIAction } from '../../store/slices/ui-slice';
import classes from '../../styles/UI-styles/hamburger-styles/Hamburger.module.css';

let firstRender = true;
const Hamburger = () => {
  const sideBarIsShown = useSelector(sideBarSelector);
  const dispatch = useDispatch();

  const toggleSideBarHandler = useCallback(() => {
    // dispatch an action that toggles the sideBarIsShownValue in the store
    dispatch(UIAction.toggleSideBar());
  }, [dispatch]);

  useEffect(() => {
    // automatically close the side bar navigation if the screen width is less than 992 and it is the first render cycle.
    if (window.innerWidth < 992 && firstRender) {
      const closeSideBar = setTimeout(() => {
        toggleSideBarHandler();
      }, 0.01);
      return () => {
        clearTimeout(closeSideBar);
      };
    }
  }, [toggleSideBarHandler]);

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
