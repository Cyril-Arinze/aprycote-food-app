import React from 'react';

import Logo from '../../Logo/Logo';
import classes from '../../../styles/UI-styles/Loader/LazyLoader.module.css';

const LazyLoader = () => {
  return (
    <section className={classes.lazy_loader}>
      <Logo />
    </section>
  );
};

export default LazyLoader;
