import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import classes from '../../../styles/sections-styles/Trending/CategoriesItem.module.css';

const CategoriesItem = (props) => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const linkID = queryParam.get('category');
  const activeLinkHandler = ({ isActive }) => {
    return linkID === props.category
      ? `${classes.category_item} ${classes.active_tab}`
      : ``;
  };
  return (
    <li className={classes.category_item}>
      <NavLink className={activeLinkHandler} to={`?category=${props.category}`}>
        {props.category}
      </NavLink>
    </li>
  );
};

export default CategoriesItem;
