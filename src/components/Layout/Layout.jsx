import React, { memo } from 'react';

import classes from '../../styles/layout-styles/Layout.module.css';
import NavBar from '../Navigation/NavBar';
import SideBar from '../Navigation/SideBar';

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <NavBar />
      <SideBar />
      {props.children}
    </div>
  );
};

export default memo(Layout);
