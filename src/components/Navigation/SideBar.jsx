import React, { memo, useState, useEffect } from 'react';

import classes from '../../styles/navigation-styles/SideBar.module.css';
import logo_Sm from '../../assets/Logo_SS.png';
import { TbHome } from 'react-icons/tb';
import { GiWallet } from 'react-icons/gi';
import { RiFileList3Fill, RiSettings3Fill } from 'react-icons/ri';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Logo from '../../UI/Logo/Logo';
import User from '../User/User';
import AuthButton from '../Authentication/AuthButton';

const SideBar = () => {
  const [sideBarIsExpanded, setSideBarIsExpanded] = useState(true);

  const expandSideBarHandler = () => {
    setSideBarIsExpanded((prevState) => !prevState);
  };

  const navLinkTextClasses = !sideBarIsExpanded
    ? classes['nav-link__text']
    : '';

  const navLinkClasses = sideBarIsExpanded
    ? `${classes['nav-link__expanded']} ${classes['nav-link']}`
    : classes['nav-link'];

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
          <li className={`${navLinkClasses} ${classes.active}`}>
            <a href="/">
              <TbHome />
              <span className={navLinkTextClasses}>Home</span>
            </a>
          </li>
          <li className={`${navLinkClasses}`}>
            <a href="/">
              <GiWallet />
              <span className={navLinkTextClasses}>Wallet</span>
            </a>
          </li>
          <li className={`${navLinkClasses}`}>
            <a href="/">
              <RiFileList3Fill />
              <span className={navLinkTextClasses}>Orders</span>
            </a>
          </li>
          <li className={`${navLinkClasses}`}>
            <a href="/">
              <BsFillBookmarkHeartFill />
              <span className={navLinkTextClasses}>Favorite</span>
            </a>
          </li>
          <li className={`${navLinkClasses}`}>
            <a href="/">
              <RiSettings3Fill />
              <span className={navLinkTextClasses}>Settings</span>
            </a>
          </li>
        </ul>
        <div className={classes.user}>
          <User />
        </div>
        <div className={classes.auth__btn}>
          <AuthButton sideBarIsExpanded={sideBarIsExpanded} />
        </div>
      </nav>
    </aside>
  );
};

export default memo(SideBar);
