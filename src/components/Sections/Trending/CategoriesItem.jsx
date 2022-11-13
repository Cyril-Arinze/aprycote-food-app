import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../../styles/sections-styles/Trending/CategoriesItem.module.css';

const CategoriesItem = (props) => {
  return (
    <li className={classes.category_item}>
      <NavLink to="/">{props.category}</NavLink>
    </li>
  );
};

export default CategoriesItem;
