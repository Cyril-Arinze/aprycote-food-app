import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import classes from '../../styles/layout-styles/Layout.module.css';
import Header from '../Navigation/Header';
import SideBar from '../Navigation/SideBar';
import {
  popUpDetailsSelector,
  sideBarSelector,
} from '../../store/slices/ui-slice';
import CartButton from '../Cart/CartButton';
import PopUpNotification from '../../UI/PopUpNotification/PopUpNotification';

const Layout = (props) => {
  const sideBarIsShown = useSelector(sideBarSelector); // ==> using the sideBarIsShown state in the store to conditional render the sidebar
  const popUpDetails = useSelector(popUpDetailsSelector); // ==> using the popUp  state in the store to conditional render the popUpNotification
  const { popUp } = popUpDetails;
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
