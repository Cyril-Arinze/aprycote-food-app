import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../../styles/sections-styles/Trending/CategoriesItem.module.css';

const CategoriesItem = (props) => {
  const activeLinkHandler = ({ isActive }) => {
    return isActive
      ? `${classes.category_item} ${classes.active_tab}`
      : `${classes.category_item}`;
  };
  return (
    <li className={classes.category_item}>
      <NavLink className={activeLinkHandler} to={props.category}>
        {props.category}
      </NavLink>
    </li>
  );
};

export default CategoriesItem;
