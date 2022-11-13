import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import classes from '../../styles/layout-styles/Layout.module.css';
import Header from '../Navigation/Header';
import SideBar from '../Navigation/SideBar';
import { sideBarSelector } from '../../store/slices/ui-slice';
import Footer from '../Navigation/Footer';

const Layout = (props) => {
  const sideBarIsShown = useSelector(sideBarSelector); // ==> using the sideBarIsShown state in the store to conditional render the sidebar
  return (
    <section className={classes.layout}>
      <Header />
      {sideBarIsShown && <SideBar />}
      <main>{props.children}</main>
      <Footer />
    </section>
  );
};

export default memo(Layout);
