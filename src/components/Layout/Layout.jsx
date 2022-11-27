import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import classes from '../../styles/layout-styles/Layout.module.css';
import Header from '../Navigation/Header';
import SideBar from '../Navigation/SideBar';
import { popUpSelector, sideBarSelector } from '../../store/slices/ui-slice';
import CartButton from '../Cart/CartButton';
import PopUpNotification from '../../UI/PopUpNotification/PopUpNotification';

const Layout = (props) => {
  const sideBarIsShown = useSelector(sideBarSelector); // ==> using the sideBarIsShown state in the store to conditional render the sidebar
  const popUp = useSelector(popUpSelector); // ==> using the sideBarIsShown state in the store to conditional render the sidebar

  return (
    <section className={classes.layout}>
      {popUp && <PopUpNotification />}
      <CartButton />
      <Header />
      {sideBarIsShown && <SideBar />}
      <main>{props.children}</main>
    </section>
  );
};

export default memo(Layout);
