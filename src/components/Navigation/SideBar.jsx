import React, { memo, useState } from 'react';

import classes from '../../styles/navigation-styles/SideBar.module.css';
import logo_Sm from '../../assets/Logo_SS.png';
import { TbHome } from 'react-icons/tb';
import { GiWallet } from 'react-icons/gi';
import { RiFileList3Fill, RiSettings3Fill } from 'react-icons/ri';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Logo from '../../UI/Logo/Logo';
import UserProfile from '../User/UserProfile';
import AuthButton from '../Authentication/AuthButton';
import { NavLink } from 'react-router-dom';
import { isAuthSelector } from '../../store/slices/auth-slice';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const [sideBarIsExpanded, setSideBarIsExpanded] = useState(true); // use to manage if the side bar is expanded or not
  const isAuth = useSelector(isAuthSelector);

  const expandSideBarHandler = () => {
    // toggle side bar expansion
    setSideBarIsExpanded((prevState) => !prevState);
  };

  // conditional class for the text in the navigation link based on if the side bar is expanded or not
  const navLinkTextClasses = !sideBarIsExpanded
    ? classes['nav-link__text']
    : '';

  // conditional class for the text in the navigation link based on if the side bar is expanded or not
  const navLinkClasses = sideBarIsExpanded
    ? `${classes['nav-link__expanded']} ${classes['nav-link']}`
    : classes['nav-link'];

  const navList = sideBarIsExpanded ? classes.nav__list : null;

  // function used to set the class name of the active link N/B: ==> this is react router v6 specific
  const ActiveLinkHandler = ({ isActive }) => {
    return isActive ? `${navLinkClasses} ${classes.active}` : navLinkClasses;
  };

  return (
    <aside className={classes['side-bar']}>
      <div
        onClick={expandSideBarHandler}
        className={classes['side-bar__toggle']}
      >
        {sideBarIsExpanded ? <GrPrevious /> : <GrNext />}
      </div>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Logo src={!sideBarIsExpanded && logo_Sm} />
        </div>
        <ul className={classes.nav__links}>
          <li className={navList}>
            <NavLink to="Home?category=Beef" className={ActiveLinkHandler}>
              <TbHome />
              <span className={navLinkTextClasses}>Home</span>
            </NavLink>
          </li>
          <li className={navList}>
            <NavLink to="Wallet" className={ActiveLinkHandler}>
              <GiWallet />
              <span className={navLinkTextClasses}>Wallet</span>
            </NavLink>
          </li>
          <li className={navList}>
            <NavLink to="Orders" className={ActiveLinkHandler}>
              <RiFileList3Fill />
              <span className={navLinkTextClasses}>Orders</span>
            </NavLink>
          </li>
          <li className={navList}>
            <NavLink to="Favourite" className={ActiveLinkHandler}>
              <BsFillBookmarkHeartFill />
              <span className={navLinkTextClasses}>Favorite</span>
            </NavLink>
          </li>
          <li className={navList}>
            <NavLink to="Settings" className={ActiveLinkHandler}>
              <RiSettings3Fill />
              <span className={navLinkTextClasses}>Settings</span>
            </NavLink>
          </li>
        </ul>
        <div className={classes.user}>
          <UserProfile />
        </div>
        {isAuth && (
          <div className={classes.auth__btn}>
            <AuthButton sideBarIsExpanded={sideBarIsExpanded} />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default memo(SideBar);
