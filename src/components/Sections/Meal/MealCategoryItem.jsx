import React from 'react';

import MoreButton from '../../../UI/Buttons/MoreButton';
import classes from '../../../styles/sections-styles/menu category/MealCategoryItem.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const MealCategoryItem = (props) => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const linkID = queryParam.get('category');
  const activeLinkHandler = () => {
    return linkID === props.category
      ? `${classes.category_item} ${classes.active_tab}`
      : `${classes.category_item}`;
  };

  return (
    <NavLink to={`?category=${props.category}`} className={activeLinkHandler}>
      <div className={classes['category_item-image']}>
        <img src={props.image} alt={props.category} />
      </div>
      <div className={classes['category_item-desc']}>
        <p>{props.category}</p>
      </div>
      <hr />
      <div className={classes['category_item-btn']}>
        <MoreButton />
      </div>
    </NavLink>
  );
};

export default MealCategoryItem;
